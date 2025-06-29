import Image from "next/image";
import Accordion from "./components/Accordion";
import { CTACard } from "./components/CTACard";

export default async function Home() {
  
  return (
    <div className="max-w-[1200px] m-auto grid items-center gap-12 justify-items-center p-4 md:p-8 pb-20 sm:p-20 font-[family-name:var(--font-noto-sans)]">
      <section className="intro-copy-container flex flex-col items-center gap-4">
        <h1 className="intro-subhead text-3xl text-center font-semibold">Frequently Asked Questions</h1>
        <h2 className="intro-heading text-center ">Get All Your Questions Answered</h2>
      </section>
      <section className="w-full">
        <Accordion />
      </section>
      <footer className="w-full">
        <CTACard heading="Can’t find the answer you’re looking for?" text="Reach out to our customer support team." buttonLabel="Get In Touch"/>
      </footer>
    </div>
  );
}
