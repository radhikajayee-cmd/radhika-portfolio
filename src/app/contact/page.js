import Image from "next/image";
const bg = "/background/contact-background.png";
import Form from "@/components/contact/Form";

export const metadata = {
  title: "Contact | Radhika Jayee",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
        fill
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            summon the wizard
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Share your ideas for AI applications, interactive web experiences,
            or software projects. Use the form below to get in touch with me,
            and I will respond with the next steps for your build or collaboration.
          </p>
          <div className="w-full md:w-3/4 rounded-2xl border border-accent/20 bg-background/80 p-6 text-center shadow-lg">
            <p className="font-semibold text-lg text-foreground">
              Contact me directly
            </p>
            <p className="mt-3 text-sm text-foreground/80">
              Email: <a href="mailto:radhikajayee@gmail.com" className="text-accent hover:text-white">radhikajayee@gmail.com</a>
            </p>
            <p className="mt-1 text-sm text-foreground/80">
              Phone: <a href="tel:+919141919859" className="text-accent hover:text-white">+91 91419 9859</a>
            </p>
            <p className="mt-3 text-sm text-foreground/70">
              You can also view or download my resume from the top menu Resume button or on the Resume page.
            </p>
          </div>
        </div>
        <Form />
      </article>
    </>
  );
}
