import Header from "@/components/Header";
import React from "react";
import athena from "@/assets/images/athena-lg.png";
import proactiveIntelligence from "@/assets/images/proactive-intelligence.png";
import strategicClarity from "@/assets/images/strategic-clarity.png";
import acceleratedDiscovery from "@/assets/images/accelerated-discovery.png";
import thinkAi from "@/assets/images/thing-ai.png";
import diveDeeper from "@/assets/images/dive-deeper-blog.png";
import apollo from "@/assets/images/apollo-footer.png";
import artimes from "@/assets/images/artimes-footer.png";
import user from "@/assets/images/user-read.png";
import read from "@/assets/images/read.png";
import Image from "next/image";
import { Fira_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Link from "next/link";

const firaSans = Fira_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const page = () => {
  return (
    <div className="bg-black w-full">
      <Header />
      <div className="w-full px-5 md:px-0 md:w-[70%] mx-auto">
        <Image src={athena} alt="athena" className="w-full" />
        <div className="flex items-center gap-3 mt-3">
          <Image src={user} className="w-11 md:w-[52px] h-11 md:h-[52px]" />
          <div>
            <p className="text-white text-xl md:text-[27px] font-light">
              Yashika Vahi
            </p>
            <div className="flex items-center gap-2">
              <Image src={read} alt="read" className="w-4 md:w-5 h-4 md:h-5" />
              <p className="text-white text-sm md:text-base">5 min read</p>
            </div>
          </div>
        </div>
        <h1
          className={`text-white font-bold text-[27px] md:text-[43px] mt-5 ${firaSans.className}`}
        >
          Introduction to Athena
        </h1>
        <p
          className={`text-[#E6E6E6] text-base xl1:text-lg 2xl:text-xl pt-4 md:pt-8 pb-4 md:pb-8 ${firaSans.className}`}
        >
          Product development often feels like navigating a maze blindfolded.
        </p>
        <p
          className={`text-[#E6E6E6] text-base xl1:text-lg 2xl:text-x pb-8 ${firaSans.className}`}
        >
          If you miss a step, you could have to deal with costly mistakes,
          delays, or even the dreadful project remodel. This becomes
          considerably more challenging when you're breaking into unfamiliar
          domains, such as developing a unique software or product for a field
          you know little about. It can seem tough to know what questions to
          ask, and even harder to determine features that are well-informed. But
          what if you had a mentor—a reliable ally—to help you make decisions
          that were more rapid, more informed, and more in line with your
          values? Meet Athena, ARTUS’s latest innovation, designed to
          revolutionize the way you strategize and plan software.
        </p>
        <p
          className={`text-[#E6E6E6] text-base xl1:text-lg 2xl:text-x pb-8 ${firaSans.className}`}
        >
          Athena isn’t just another tool; it’s a brainstorming agent tailored
          for managers and engineering leads striving to stay ahead. In the
          intricate dance of product development, Athena ensures your every move
          aligns with your ultimate goals, helping you avoid the missteps that
          often result from rushed or uninformed choices.
        </p>
        <h2
          className={`text-white ${firaSans.className} font-bold text-[24px] pb-4`}
        >
          Proactive Intelligence
        </h2>
        <Image src={proactiveIntelligence} alt="Proactive Intelligence" />
        <p
          className={`text-[#E6E6E6] text-[16px] md:text-lg mt-4 xl1:text-xl ${firaSans.className}`}
        >
          Imagine skipping hours of research and endless debates over product
          decisions. Athena steps in with actionable insights, offering not just
          recommendations but foresight into potential requirements during
          development. By anticipating challenges and aligning your choices with
          long-term goals, Athena helps you prevent costly overhauls and delays
          down the line. It’s like having a strategic advisor who ensures your
          plans are future-proof from the start.
        </p>
        <h2
          className={`text-white ${firaSans.className} font-bold text-[24px] mt-10 pb-4`}
        >
          Strategic Clarity
        </h2>
        <Image src={strategicClarity} alt="strategicClarity" />
        <p
          className={`text-[#E6E6E6] text-[16px] md:text-lg mt-4 xl1:text-xl ${firaSans.className}`}
        >
          Whether you’re shaping initial ideas or refining the final roadmap,
          Athena acts as your compass, cutting through the noise and simplifying
          complexity. It collaborates with you to craft strategies that align
          seamlessly with your project's overarching goals, ensuring every
          choice is intentional and contributes meaningfully to your long-term
          success.
        </p>
        <h2
          className={`text-white ${firaSans.className} font-bold text-[24px] mt-20 pb-4`}
        >
          Accelerated Discovery
        </h2>
        <Image src={acceleratedDiscovery} alt="acceleratedDiscovery" />
        <p
          className={`text-[#E6E6E6] text-lg mt-4 xl1:text-xl ${firaSans.className}`}
        >
          In a fast-moving world, time is your greatest asset—and Athena ensures
          you make the most of it. By analyzing your inputs and breaking down
          complex product requirements into clear, actionable options, Athena
          significantly reduces the time spent brainstorming and planning.
          Instead of wading through overwhelming possibilities, you can focus on
          selecting from well-researched, practical suggestions that align with
          your vision. Whether it’s identifying the best tools, outlining user
          scenarios, or designing workflows, Athena transforms time-intensive
          discovery into a streamlined, efficient process.
        </p>
        <p
          className={`mt-10 text-[22px] md:text-[25px] italic font-medium ${firaSans.className} text-[#E6E6E6]`}
        >
          When considering user scenarios, Athena doesn’t just ask,{" "}
          <span className="font-semibold">
            “What use cases are you targeting?”
          </span>
          —it helps you brainstorm options tailored to your vision:
        </p>
        <div className="mt-10">
          <h4
            className={`text-[#E6E6E6] font-bold text-[16px] md:text-xl ${firaSans.className}`}
          >
            For businesses:
          </h4>
          <p
            className={`text-[#E6E6E6] mt-2 text-[16px] md:text-xl ${firaSans.className}`}
          >
            Suggests offering comparative charts that could showcase features,
            pricing, and user reviews for easy decision-making.
          </p>
          <h4
            className={`text-[#E6E6E6] font-bold text-[16px] md:text-xl mt-6 ${firaSans.className}`}
          >
            For researchers:
          </h4>
          <p
            className={`text-[#E6E6E6] mt-2 text-[16px] md:text-xl ${firaSans.className}`}
          >
            Recommends including detailed descriptions and insights to evaluate
            tool effectiveness.
          </p>
          <h4
            className={`text-[#E6E6E6] font-bold text-[16px] md:text-xl mt-6 ${firaSans.className}`}
          >
            For general users:
          </h4>
          <p
            className={`text-[#E6E6E6] mt-2 text-[16px] md:text-xl ${firaSans.className}`}
          >
            Proposes creating custom dashboards that allow tracking updates and
            favorite tools with ease.
          </p>
          <p
            className={`text-[#E6E6E6] my-8 text-[16px] md:text-xl ${firaSans.className}`}
          >
            Athena equips you with thoughtful suggestions, leaving you in
            control to pick what aligns with your goals.
          </p>
        </div>
        <div>
          <h4
            className={`text-[#E6E6E6] text-[24px] font-semibold mb-5 mt-10 ${firaSans.className}`}
          >
            When debating frontend development tools, Athena dives into
            specifics to streamline your decisions:
          </h4>
          <p
            className={`${firaSans.className} text-[#E6E6E6] text-[16px] md:text-[20px]`}
          >
            · Suggests exploring React for its dynamic, component-based
            framework that supports modern development needs.
          </p>
          <p
            className={`${firaSans.className} text-[#E6E6E6] text-[16px] md:text-[20px]`}
          >
            · Recommends Bootstrap for its pre-designed, responsive design
            elements that can save time.
          </p>
          <p className="text-[#E6E6E6] text-[16px] md:text-[20px] mt-6">
            Athena narrows down the options, empowering you to choose the tools
            best suited to your project.
          </p>
          <Image src={thinkAi} alt="thinkAi" className="mt-8" />
        </div>
        <div className={`text-[#E6E6E6] ${firaSans.className} mt-8`}>
          <h4 className="text-[22px] md:text-[24px] font-semibold">
            For search result displays, Athena provides insightful ideas to
            shape your user experience:
          </h4>
          <p
            className={`${firaSans.className} text-[#E6E6E6] mt-5 text-[16px] md:text-[20px]`}
          >
            · Proposes highlighting pricing, key features, and user ratings to
            facilitate quick comparison.
          </p>
          <p
            className={`${firaSans.className} text-[#E6E6E6] text-[16px] md:text-[20px]`}
          >
            · Suggests adding a "recommended for you" section that personalizes
            results based on user preferences.
          </p>
          <p className="text-[#E6E6E6] text-[16px] md:text-[20px] mt-6">
            Athena offers clarity, ensuring you can tailor the display to your
            audience’s needs.
          </p>
          <Image src={diveDeeper} alt="diveDeeper" className="mt-8" />
        </div>
        <div className={`text-[#E6E6E6] ${firaSans.className} mt-8`}>
          <h4 className="font-semibold text-xl md:text-[24px]">
            Even the mobile experience is handled with care, with Athena
            presenting thoughtful possibilities:
          </h4>
          <p className="text-[16px] md:text-[20px] mt-5">
            <span className="font-semibold">Recommends a hybrid approach</span>
            —combining a responsive web design with a dedicated mobile app for
            accessibility and user engagement. Suggests incorporating
            personalized notifications and alerts to keep users updated on
            relevant information.
          </p>
          <p className="text-[16px] md:text-[20px] mt-5">
            <span className="font-semibold">
              Athena provides a foundation of informed options,{" "}
            </span>
            allowing you to build a mobile experience that resonates with your
            users.
          </p>
          <p className="text-[16px] md:text-[20px] mt-5">
            <span className="font-semibold">What sets Athena apart is</span>
            its ability to respond dynamically. If a question feels unclear or a
            recommendation needs deeper explanation, Athena unpacks the “why”
            behind its suggestions, ensuring you understand the relevance and
            intent. It simplifies complexity without compromising on depth.
          </p>
          <p className="text-[16px] md:text-[20px] mt-5">
            Imagine the hours of research, indecision, and potential missteps
            Athena can save you. By transforming vague ideas into actionable
            plans, it allows you to focus on what matters—bringing your vision
            to life.
          </p>
          <p className="text-[16px] md:text-[20px] mt-5">
            <span className="font-semibold">
              Start your journey with Athena.{" "}
            </span>
            Not just to plan faster but to plan smarter.
          </p>
        </div>
        <div className={`${firaSans.className} mt-14 text-2xl md:text-[35px]`}>
          <h4 className="font-medium text-white">More From Artus</h4>
          <div className="block md:flex mt-5 gap-10">
            <Link
              href={"/research/intoroduction-to-apollo"}
              className="md:w-2/4 block"
            >
              <Image src={apollo} alt="apollo" className="rounded-t-2xl" />
              <p className="text-white text-base md:text-xl font-semibold my-5 text-center">
                Introduction to Apollo
              </p>
            </Link>
            <Link
              href={"/research/intoroduction-to-artimes"}
              className="md:w-2/4 block"
            >
              <Image src={artimes} alt="artimes" className="rounded-t-2xl" />
              <p className="text-white text-base md:text-xl font-semibold my-5 text-center">
                Introduction to Artemis
              </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
