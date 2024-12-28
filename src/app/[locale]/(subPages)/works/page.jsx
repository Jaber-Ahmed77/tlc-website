import InnerLayout from "@/components/shared/InnerLayout";
import WorkSection from "@/components/work/WorkSection";
import React from "react";

const links = [
  { id: 1, title: "HOME", url: "/" },
  { id: 2, title: "Career" },
];

const counterData = {
  mainTitle:
    "We have twenty years of great experience of various type industries",
  data: [
    { id: 1, title: "Project Completed Last 5 Years", count: 937 },
    { id: 2, title: "government project", count: 327 },
    { id: 3, title: "Service Introduction", count: 704 },
    { id: 4, title: "different job location", count: 39 },
  ],
};

export default function page() {
  return (
    <InnerLayout links={links} counterData={counterData}>
      <WorkSection />
    </InnerLayout>
  );
}
