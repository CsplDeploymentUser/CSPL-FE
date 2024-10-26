"use client";
import { SelectedWorkProjectsApi } from "@/apis/HomepageApi";
import React, { useEffect, useState } from "react";
import { MoveRight } from "lucide-react";
import Link from "next/link";

type Props = { ActiveTabId: string };

const SelectedWorkTabImages = ({ ActiveTabId }: Props) => {
  const [projectImages, setProjectsImages] = useState<any>();
  const displayedImages = projectImages?.selectedworktabs?.slice(0, 6);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  useEffect(() => {
    const FetchImages = async () => {
      try {
        const ProjectImagesResponse = await SelectedWorkProjectsApi(
          ActiveTabId
        );
        setProjectsImages(ProjectImagesResponse);
      } catch (e) {
        console.log(e);
      }
    };
    FetchImages();
  }, [ActiveTabId]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 md:gap-8 gap-4 px-4">
      {displayedImages?.map((project: any, index: number) => (
        <div
          key={index}
          className="relative overflow-hidden  shadow-xl "
          onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
          onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index on mouse leave
        >
          {/* <Image
              src={imageUrl}
              alt={altText}
              width={600}
              height={400}
              className="w-full h-auto transition-transform duration-300 ease-in-out transform hover:scale-110"
            /> */}
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${project?.image}`}
            alt={project?.image_alternate_text}
            className="w-full h-[250px] object-cover rounded-lg  shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          {hoveredIndex === index && (
            <div className="absolute inset-0 rounded-lg flex items-center justify-center bg-black bg-opacity-60 transition-opacity duration-300">
              <Link
                href={project?.link}
                className="text-lg font-semibold bg-secondary text-black px-3 py-1 flex gap-3 justify-center items-center rounded-md"
              >
                <p> {project?.button_text}</p>
                <MoveRight />
              </Link>
            </div>
          )}
          {index === displayedImages.length - 1 && (
            <div className="absolute bottom-0 right-0 inline-flex items-center justify-center overflow-hidden text-white bg-[#f4f5f2] rounded-tl-[2rem] border-2 w-20 h-20">
              <Link href={"/"}>
                {" "}
                <span className="flex items-center justify-center w-12 h-12 bg-black rounded-full">
                  <MoveRight />
                </span>{" "}
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SelectedWorkTabImages;
