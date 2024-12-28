import InnerLayout from "@/components/shared/InnerLayout";
import Accordion from "@/components/ui/Accordion";
import CareerForm from "@/components/ui/forms/CareerForm";

const links = [
  { id: 1, title: "HOME", url: "/" },
  { id: 2, title: "Health And Safety" },
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

const AccordionData = [
  {
    id: 1,
    title: "Control review",
    desc: "HR Officer for Raissi",
  },
  {
    id: 2,
    title: "Sales Manager",
    desc: "Sales Manager at Raissi Company",
  },
  {
    id: 3,
    title: "Customer Receptionist",
    desc: "Customer Receptionist at Raissi Company",
  },
];

export default function Career() {
  return (
    <InnerLayout links={links} counterData={counterData}>
      <section className="w-full flex gap-4 flex-col-reverse md:flex-row">
        <div className="flex-1">
          <CareerForm data={AccordionData} />
        </div>
        <div className="flex-1 w-full flex flex-col gap-2">
          {AccordionData.map((item) => (
            <Accordion data={item} key={item.id} />
          ))}
        </div>{" "}
      </section>
    </InnerLayout>
  );
}
