import Header from "@/components/Header";
import React from "react";
import meet from "@/assets/images/robo-meeting.png";
import meetTeam from "@/assets/images/robo-team.png";
import meetPaint from "@/assets/images/robo-painting.png";
import apolloChat from "@/assets/images/apollo-chat.png";
import athenaBot from "@/assets/images/athena-bot.png";
import apolloBg from "@/assets/images/apollo-lg.png";
import apollo from "@/assets/images/apollo-footer.png";
import teamActivity from "@/assets/images/team-activity.png";
import agile from "@/assets/images/agile-model.png";
import artimes from "@/assets/images/artimes-footer.png";
import tasks from "@/assets/images/tasks.png";
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
      <div className="px-5 md:px-0 md:w-[70%] mx-auto">
        <Image src={apolloBg} alt="athena" className="w-full" />
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
          className={`text-white font-bold text-[27px] md:text-[43px] my-5 ${firaSans.className}`}
        >
          Introduction to Apollo
        </h1>

        <p
          className={`text-[#E6E6E6] text-base xl1:text-lg 2xl:text-xl pb-4 md:pb-8 ${firaSans.className}`}
        >
          Imagine a world where managing your projects is as simple as having a
          conversation. With Apollo, that world is already here.
        </p>
        <p
          className={`text-[#E6E6E6] text-base xl1:text-lg 2xl:text-xl pb-4 md:pb-8 ${firaSans.className}`}
        >
          Apollo empowers product managers to engage with their projects in
          Natural Language, making complex tasks feel effortless. From tracking
          progress across resources & sprints to generating detailed reports and
          presentations, Apollo transforms the way product managers and
          developers work together.
        </p>
        <h1
          className={`text-[#E6E6E6] mt-4 md:mt-8 font-medium text-2xl xl1:text-[35px] ${firaSans.className}`}
        >
          How Apollo stands out
        </h1>
        <h4
          className={`text-[#E6E6E6] mt-4 md:mt-8 font-medium text-lg xl1:text-xl ${firaSans.className}`}
        >
          Real-Time Insights
        </h4>
        <p
          className={`text-[#B0B0B0] mt-0 md:mt-8 text-base xl1:text-xl ${firaSans.className}`}
        >
          Apollo keeps you in the know with real-time updates on team progress,
          providing instant visibility into potential bottlenecks or
          inefficiencies. Apollo’s AI identifies insights that human observation
          might overlook, offering actionable recommendations to resolve issues
          before they escalate.
        </p>
        <Image src={meet} alt="meet" className="mt-5" />
        <h4
          className={`text-[#E6E6E6] mt-4 md:mt-8 font-medium text-lg xl1:text-xl ${firaSans.className}`}
        >
          Optimized Workflow Management
        </h4>
        <p
          className={`text-[#B0B0B0] mt-0 md:mt-8 text-base xl1:text-xl ${firaSans.className}`}
        >
          Struggling with workflow bottlenecks? Tell Apollo to optimize your
          workflows using real-time data, and watch as it redefines efficiency.
          Whether it’s allocating resources smarter or fine-tuning task
          prioritization, Apollo ensures your team operates at its best.
        </p>
        <Image src={meetTeam} alt="meetTeam" className="mt-5" />
        <h4
          className={`text-[#E6E6E6] mt-4 md:mt-8 font-medium text-lg xl1:text-xl ${firaSans.className}`}
        >
          Data-Driven Decision Making
        </h4>
        <p
          className={`text-[#B0B0B0] mt-0 md:mt-8 text-base xl1:text-xl ${firaSans.className}`}
        >
          With Apollo, reports and presentations are no longer a chore. It
          compiles real-time insights into professional-grade summaries,
          enabling you to make confident, data-backed decisions and keep
          stakeholders informed with ease.
        </p>
        <Image src={meetPaint} alt="meetPaint" className="mt-5" />
        <h1
          className={`text-[#E6E6E6] mt-4 md:mt-10 font-medium text-2xl xl1:text-[35px] md:pb-8 ${firaSans.className}`}
        >
          Use Cases
        </h1>
        <div className={`text-[#E6E6E6] ${firaSans.className} mt-4 md:mt-8`}>
          <p className="text-base md:text-[20px] mt-5">
            Imagine you’re managing a high-stakes project, and the details are
            quickly spiraling into chaos. Deadlines are looming, team workloads
            are unclear, and progress updates are fragmented. This is where
            Apollo steps in, turning complexity into clarity.
          </p>
          <p className="text-base md:text-[20px] mt-5">
            <span className="font-semibold">Your Challenge: </span>
            The team needs a detailed status update to realign efforts, but
            manually creating performance reports, tracking workloads, and
            identifying bottlenecks feels like an insurmountable task.
          </p>
          <p className="text-base md:text-[20px] mt-5">
            <span className="font-semibold">Apollo’s Solution: </span>
            With just a simple prompt, you ask Apollo for a comprehensive
            project report.
          </p>
        </div>
        <Image src={apolloChat} alt="apolloChat" className="mt-5" />
        <p className="text-base md:text-[20px] mt-5 text-[#B0B0B0]">
          <span className="font-semibold text-[#E6E6E6]">
            · Task Breakdown:{" "}
          </span>
          Apollo responds with a curated list of team members, their assigned
          tasks, current status, and expected completion dates. It also provides
          an organized summary of completed, ongoing, and pending tasks.
        </p>
        <Image src={teamActivity} alt="teamActivity" className="mt-5" />
        <p className="text-base md:text-[20px] mt-5 text-[#B0B0B0]">
          <span className="font-semibold text-[#E6E6E6]">
            · Actionable Insights:{" "}
          </span>
          Beyond tracking, Apollo suggests next steps to streamline workflows,
          ensuring maximum efficiency and eliminating delays.
        </p>
        <Image src={agile} alt="agile" className="mt-5" />
        <p
          className={`text-[#E6E6E6] ${firaSans.className} text-base md:text-xl mt-8`}
        >
          Need more specifics? Ask Apollo,{" "}
          <span className="font-semibold italic">
            “Which employees are available to take on additional tasks?”
          </span>
        </p>
        <p
          className={`text-[#E6E6E6] ${firaSans.className} text-base md:text-xl mt-8`}
        >
          <span className="font-semibold ">· Tailored Insights: </span>
          Apollo analyzes team workload, presenting a breakdown of total tasks
          assigned, completed, and in progress for each team member.
        </p>
        <p
          className={`text-[#E6E6E6] ${firaSans.className} text-base md:text-xl mt-8`}
        >
          <span className="font-semibold ">· Best Recommendations: </span>
          It concludes with actionable advice, helping you delegate tasks to the
          right people without overwhelming anyone.
        </p>
        <Image src={tasks} alt="tasks" className="my-5" />
        <p
          className={`text-[#E6E6E6] text-base md:text-xl ${firaSans.className}`}
        >
          But Apollo doesn’t stop at internal operations. It’s just as adept at
          client-facing deliverables.
        </p>
        <p
          className={`text-[#E6E6E6] text-base md:text-xl ${firaSans.className} my-5`}
        >
          Let’s say a client requests a{" "}
          <span className="font-semibold">
            Business Requirements Document (BRD)
          </span>{" "}
          for a critical project. You simply ask Apollo to craft it.
        </p>
        <p
          className={`text-[#E6E6E6] text-base md:text-xl ${firaSans.className} my-5`}
        >
          <span className="font-semibold">· End-to-End Creation:</span> Apollo
          drafts a polished BRD, complete with an executive summary, project
          objectives, scope of work, functional and non-functional requirements,
          a detailed timeline, budget estimate, and a professional conclusion.
        </p>
        <p
          className={`text-[#E6E6E6] text-base md:text-xl ${firaSans.className} my-5`}
        >
          <span className="font-semibold">· Ready-to-Present:</span> The
          document is structured, comprehensive, and ready to impress your
          clients.
        </p>
        <p
          className={`text-[#E6E6E6] text-base md:text-xl ${firaSans.className} my-5`}
        >
          In a fast-paced business world, staying organized and efficient is
          non-negotiable. Apollo offers a glimpse into a smarter way of
          working—one where every decision is informed, every action is
          optimized, and every outcome is elevated. It’s your strategic ally,
          helping you handle every aspect of project management with unmatched
          precision and ensures that your projects move forward without a hitch.
        </p>
        <p
          className={`text-[#E6E6E6] text-base md:text-[20px] font-semibold italic ${firaSans.className} my-5`}
        >
          Are you ready to transform your project management?
        </p>

        <div className={`${firaSans.className} mt-14 text-2xl md:text-[35px]`}>
          <h4 className="font-medium text-white">More From Artus</h4>
          <div className="block md:flex mt-5 gap-10">
            <Link
              href={"/research/intoroduction-to-artimes"}
              className="w-full md:w-2/4 block"
            >
              <Image src={artimes} alt="artimes" className="rounded-t-2xl" />
              <p className="text-white text-base md:text-xl font-semibold my-5 text-center">
                Introduction to Artemis
              </p>
            </Link>
            <Link
              href={"/research/intoroduction-to-athena"}
              className="w-full md:w-2/4 block"
            >
              <Image src={athenaBot} alt="artimes" className="rounded-t-2xl" />
              <p className="text-white text-base md:text-xl font-semibold my-5 text-center">
                Introduction to Athena
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
