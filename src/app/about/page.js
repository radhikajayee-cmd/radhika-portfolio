import Image from "next/image";
const bg = "/background/contact-background.png";
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";
const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About | Radhika Jayee",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        fill
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold  text-6xl xs:text-7xl sm:text-8xl  lg:text-9xl text-accent">
            Radhika Jayee
          </h1>
          <p className="font-light text-foreground text-lg">
            Meet the developer and AI application engineer behind this portfolio
          </p>
        </div>
      </div>

      <section className="relative w-full py-16 px-4 sm:px-8 lg:px-16">
        <div className="mx-auto max-w-5xl rounded-3xl border border-accent/15 bg-background/90 p-10 shadow-2xl backdrop-blur-lg">
          <h2 className="text-3xl font-semibold text-accent">Profile Summary</h2>
          <p className="mt-4 text-base leading-8 text-foreground/80">
            I am a passionate Full Stack Python Developer and AI Application Engineer who designs and builds scalable software solutions with clean architecture and immersive UI.
          </p>
          <p className="mt-4 text-base leading-8 text-foreground/80">
            My work combines Python, Django, JavaScript, TypeScript, React, and modern frontend systems to create intelligent web apps, interactive gaming experiences, and AI-powered tools.
          </p>
          <p className="mt-4 text-base leading-8 text-foreground/80">
            I have delivered projects in AI assistants, browser games, luxury digital showcases, and face-recognition solutions that are both technically robust and visually compelling.
          </p>
        </div>
      </section>

      <AboutDetails />
    </>
  );
}
