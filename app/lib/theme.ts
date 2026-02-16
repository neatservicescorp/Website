
export type Theme = "light" | "dark";

// Server-side function to get theme from pathname (no hooks needed)
export const getThemeFromPath = (pathname: string): Theme => {
    const themeMap: Record<string, Theme> = {
        "/": "dark",
        "/services": "light",
        "/projects": "light",
        "/reviews": "dark",
        "/contact": "dark",
        "/blog": "light",
    };

    return themeMap[pathname] || "light";
};
