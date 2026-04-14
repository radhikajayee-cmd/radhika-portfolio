import Link from "next/link";

export const metadata = {
  title: "Resume | Radhika Jayee",
};

export default function ResumePage() {
  return (
    <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
      <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-11/12 lg:w-3/4 px-4">
        <h1 className="text-accent font-semibold text-center text-4xl capitalize">
          resume
        </h1>
        <p className="text-center font-light text-sm xs:text-base text-foreground/80">
          View or download my resume below.
        </p>
        <div className="w-full rounded-2xl border border-accent/20 bg-background/80 p-6 text-center shadow-lg">
          <p className="text-foreground/80 mb-4">
            If the embedded preview does not load, use the download link below.
          </p>
          <div className="h-[80vh] w-full overflow-hidden rounded-2xl border border-accent/10">
            <iframe
              src="/Radhika_Jayee_Resume.pdf"
              title="Resume PDF"
              className="w-full h-full"
            />
          </div>
          <Link
            href="/Radhika_Jayee_Resume.pdf"
            target="_blank"
            className="mt-4 inline-block rounded-full bg-accent px-6 py-3 text-background font-semibold hover:bg-yellow-300"
          >
            Download Resume PDF
          </Link>
        </div>
      </div>
    </article>
  );
}
