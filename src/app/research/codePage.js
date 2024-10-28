import BlogBanner from "@/components/BlogBanner";
import DownloadPapers from "@/components/DownloadPapers";
import Header from "@/components/Header";
import ResearchPaper from "@/components/ResearchPaper";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <BlogBanner />
      <ResearchPaper />
      <DownloadPapers />
    </div>
  );
};

export default page;
