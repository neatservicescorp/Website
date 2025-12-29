"use client";
import { Card, CardBody, CardFooter } from "@heroui/react";
import Image from "next/image";
import React, { useMemo } from "react";
import { BlogEntriesData } from "../blog/[id]/blogEntries";
import { useRouter } from "next/navigation";

export default function BlogPreview() {
  const router = useRouter();
  const entries = useMemo(
    () =>
      BlogEntriesData.sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }),
    []
  );

  const recentEntry = entries[0];
  const subEntries = entries.slice(1, 3);

  return (
    // <div className="w-full flex flex-row gap-5">
    //   <Card className="hidden lg:block h-full w-1/2">
    //     <CardBody className="h-2/3 p-0">
    //       <Image
    //         src={recentEntry.imageUrl}
    //         alt="blog_preview_1"
    //         width={700}
    //         height={700}
    //         className="w-full h-full object-cover"
    //       />
    //     </CardBody>
    //     <CardFooter className="h-1/3">
    //       <div className="w-full h-full text-black flex flex-col justify-between gap-2 p-2 px-4 relative">
    //         <h3 className="font-exotc350 text-3xl 2xl:text-4xl leading-8">
    //           {recentEntry.title}
    //         </h3>
    //         <p className="font-cocogoose text-sm">
    //           {recentEntry.startContent.slice(0, 150)}...
    //         </p>
    //         <button
    //           onClick={() => router.push(`/blog/${recentEntry.key}`)}
    //           className="self-end bg-transparent border-none p-0 hover:cursor-pointer"
    //           aria-label={`Read full article: ${recentEntry.title}`}
    //         >
    //           <p className="font-cocogoose text-sm hover:underline">
    //             Read more ➤
    //           </p>
    //         </button>
    //       </div>
    //     </CardFooter>
    //   </Card>
    //   <div className="flex flex-col w-full lg:w-1/2 gap-6">
    //     <Card className="w-full lg:hidden">
    //       <CardBody>
    //         <div className="flex flex-row h-full gap-7">
    //           <div className="w-[45%] h-full">
    //             <Image
    //               src={recentEntry.imageUrl}
    //               alt={`blog_preview_${recentEntry.key}`}
    //               width={500}
    //               height={500}
    //               className="w-full h-full object-cover rounded-lg"
    //             />
    //           </div>
    //           <div className="flex w-[55%] flex-col justify-between relative text-black lg:mt-5 gap-3">
    //             <h3 className="font-exotc350 text-2xl md:text-xl leading-6 xl:text-4xl md:leading-8">
    //               {recentEntry.title}
    //             </h3>
    //             <p className="font-cocogoose text-xs md:text-sm">
    //               {recentEntry.startContent.slice(0, 80)}...
    //             </p>
    //             <button
    //               onClick={() => router.push(`/blog/${recentEntry.key}`)}
    //               className="self-end bg-transparent border-none p-0 hover:cursor-pointer"
    //               aria-label={`Read full article: ${recentEntry.title}`}
    //             >
    //               <p className="font-cocogoose text-sm hover:underline">
    //                 Read more ➤
    //               </p>
    //             </button>
    //           </div>
    //         </div>
    //       </CardBody>
    //     </Card>
    //     {subEntries.map((entry, index) => (
    //       <Card key={index} className="w-full">
    //         <CardBody>
    //           <div className="flex flex-row h-full gap-7">
    //             <div className="w-[45%] h-full">
    //               <Image
    //                 src={entry.imageUrl}
    //                 alt={`blog_preview_${index}`}
    //                 width={500}
    //                 height={500}
    //                 className="w-full h-full object-cover rounded-lg"
    //               />
    //             </div>
    //             <div className="flex w-[55%] flex-col relative text-black lg:mt-5 gap-3">
    //               <h3 className="font-exotc350 text-2xl md:text-3xl leading-6 xl:text-4xl md:leading-8">
    //                 {entry.title}
    //               </h3>
    //               <p className="font-cocogoose text-xs md:text-sm">
    //                 {entry.startContent.slice(0, 80)}...
    //               </p>
    //               <button
    //                 onClick={() => router.push(`/blog/${entry.key}`)}
    //                 className="self-end bg-transparent border-none p-0 hover:cursor-pointer"
    //                 aria-label={`Read full article: ${entry.title}`}
    //               >
    //                 <p className="font-cocogoose text-sm hover:underline">
    //                   Read more ➤
    //                 </p>
    //               </button>
    //             </div>
    //           </div>
    //         </CardBody>
    //       </Card>
    //     ))}
    //   </div>
    // </div>
    <div className="grid grid-cols-2 grid-rows-3 md:grid-rows-2 gap-4">
      <Card className="col-span-2 md:col-span-1 md:row-span-2 h-[200px] md:h-auto">
        <CardBody className="p-3">
          <div className="flex flex-row md:flex-col h-full gap-4">
            <div className="h-full w-2/5 md:w-full">
              <Image
                src={recentEntry.imageUrl}
                alt={`blog_preview_${recentEntry.key}`}
                width={500}
                height={500}
                className="md:w-full h-full md:h-auto object-cover object-left rounded-lg"
              />
            </div>
            <div className="flex flex-col text-black w-3/5 md:w-full justify-between">
              <div className="flex flex-col gap-2.5">
                <h3 className="font-exotc350 leading-5 text-2xl lg:text-3xl lg:leading-6">
                  {recentEntry.title}
                </h3>
                <p className="font-cocogoose text-xs xl:text-base xl:leading-5">
                  {recentEntry.startContent.slice(0, 80)}...
                </p>
              </div>
              <button
                onClick={() => router.push(`/blog/${recentEntry.key}`)}
                className="bg-transparent border-none p-0 hover:cursor-pointer self-end"
                aria-label={`Read full article: ${recentEntry.title}`}
              >
                <p className="font-cocogoose text-xs lg:text-base hover:underline">
                  Read more ➤
                </p>
              </button>
            </div>
          </div>
        </CardBody>
      </Card>
      {subEntries.map((entry, index) => (
        <Card
          className="col-span-2 md:col-span-1 h-[200px] md:h-auto"
          key={index}
        >
          <CardBody className="p-3">
            <div className="flex h-full gap-4">
              <div className="h-full w-2/5">
                <Image
                  src={entry.imageUrl}
                  alt={`blog_preview_${index}`}
                  width={500}
                  height={500}
                  className="h-full object-cover object-left rounded-lg"
                />
              </div>
              <div className="flex flex-col text-black w-3/5 justify-between">
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-exotc350 leading-5 text-2xl lg:text-3xl lg:leading-6">
                    {entry.title}
                  </h3>
                  <p className="font-cocogoose text-xs xl:text-base xl:leading-5">
                    {entry.startContent.slice(0, 80)}...
                  </p>
                </div>
                <button
                  onClick={() => router.push(`/blog/${entry.key}`)}
                  className="bg-transparent border-none p-0 hover:cursor-pointer self-end"
                  aria-label={`Read full article: ${entry.title}`}
                >
                  <p className="font-cocogoose text-xs lg:text-base hover:underline">
                    Read more ➤
                  </p>
                </button>
              </div>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
