import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blogs");

export type BlogPostPreview = {
    key: string;
    title: string;
    date: string;
    rawDate: string; // ISO string for sorting
    author: string;
    imageUrl: string;
    description: string; // Used for previews (formerly startContent)
    tags: string[];
};

export type BlogPost = BlogPostPreview & {
    contentHtml: string;
};

export function getSortedPostsData(): BlogPostPreview[] {
    // Get file names under /content/blogs
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id (key)
        const key = fileName.replace(/\.md$/, "");

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Validate and extract data
        // We can add more validation here if needed

        const matterData = matterResult.data as {
            title: string;
            date: string | Date; // gray-matter might return Date
            author: string;
            imageUrl: string;
            description: string;
            tags?: string[];
        };

        const dateObj = new Date(matterData.date);
        const formattedDate = dateObj.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });

        return {
            key,
            ...matterData,
            date: formattedDate,
            rawDate: isNaN(dateObj.getTime()) ? new Date().toISOString() : dateObj.toISOString(),
            tags: matterData.tags || [],
        };
    });

    // Sort posts by date (newest first)
    return allPostsData.sort((a, b) => {
        if (a.rawDate < b.rawDate) {
            return 1;
        } else {
            return -1;
        }
    });
}

export function getAllPostIds() {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ""),
            },
        };
    });
}

export async function getPostData(id: string): Promise<BlogPost> {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    const matterData = matterResult.data as {
        title: string;
        date: string | Date;
        author: string;
        imageUrl: string;
        description: string;
        tags?: string[];
    };

    const dateObj = new Date(matterData.date);
    const formattedDate = dateObj.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return {
        key: id,
        contentHtml,
        ...matterData,
        date: formattedDate,
        rawDate: dateObj.toISOString(),
        tags: matterData.tags || [],
    };
}

export function getRelatedPosts(currentId: string, tags: string[] = []): BlogPostPreview[] {
    const allPosts = getSortedPostsData();

    // Filter out current post
    const otherPosts = allPosts.filter((post) => post.key !== currentId);

    // If no tags, return the 3 most recent posts
    if (tags.length === 0) {
        return otherPosts.slice(0, 3);
    }

    // Score posts based on tag overlap
    const scoredPosts = otherPosts.map((post) => {
        let score = 0;
        if (post.tags) {
            post.tags.forEach((tag) => {
                if (tags.includes(tag)) {
                    score++;
                }
            });
        }
        return { post, score };
    });

    // Sort by score (descending) and then by date (newest first)
    scoredPosts.sort((a, b) => {
        if (a.score > b.score) return -1;
        if (a.score < b.score) return 1;
        if (a.post.rawDate < b.post.rawDate) return 1; // rawDate is ISO string, so lexicographical sort works
        return -1;
    });

    // Return top 3
    return scoredPosts.slice(0, 3).map((item) => item.post);
}
