import React from "react";
import Image from "next/image";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Full Stack Python Developer & AI Application Engineer
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            I build intelligent web applications, AI-powered tools, and immersive
            user experiences using Python, Django, JavaScript, and modern
            frontend technologies. My portfolio blends clean architecture,
            responsive design, and interactive systems to deliver scalable,
            visually engaging solutions for digital brands and technical
            platforms.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            12+ <sub className="font-semibold text-base">projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            Open <sub className="font-semibold text-base">to work</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-accent/80">
            Top Languages
          </p>
          <Image
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=radhikajayee-cmd&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="GitHub top languages for Radhika Jayee"
            width={800}
            height={240}
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-accent/80">
            GitHub Stats
          </p>
          <Image
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=radhikajayee-cmd&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="GitHub profile statistics for Radhika Jayee"
            width={800}
            height={240}
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-accent/80">
            Skills & Tools
          </p>
          <Image
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=python,django,js,ts,html,css,react,git,github,tailwind,nextjs,nodejs,figma,aws,linux`}
            alt="Radhika Jayee Skills"
            width={800}
            height={200}
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-accent/80">
            Streak & Projects
          </p>
          <Image
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=radhikajayee-cmd&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="GitHub streak stats for Radhika Jayee"
            width={800}
            height={220}
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-accent/80">
            Featured Project
          </p>
          <Link
            href="https://github.com/radhikajayee-cmd/KageX"
            target="_blank"
            className="w-full"
          >
            <Image
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=radhikajayee-cmd&repo=KageX&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="Pinned GitHub repository for Radhika Jayee"
              width={800}
              height={280}
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
