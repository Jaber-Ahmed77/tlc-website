import CertificateCard from "@/components/shared/CertificateCard";
import InnerLayout from "@/components/shared/InnerLayout";
import { useTranslations } from "use-intl";

export default function CertificatesPage() {

  const t = useTranslations("common");

  const links = [
    { id: 1, title: "home", url: "/" },
    { id: 2, title: "Certificates" },
  ];

  const counterData = {
    mainTitle: t("achievements.mainTitle"),
    data: [
      { id: 1, title: t("achievements.achievement-1"), count: 200 },
      { id: 2, title: t("achievements.achievement-2"), count: 140 },
      { id: 3, title: t("achievements.achievement-3"), count: 50 },
      { id: 4, title: t("achievements.achievement-4"), count: 5 },
    ],
  };

  const certificates = [
    { id: 1, url: "/certificate.jpg" },
    { id: 2, url: "/certificate.jpg" },
    { id: 3, url: "/certificate.jpg" },
    { id: 4, url: "/certificate.jpg" },
    { id: 5, url: "/certificate.jpg" },
    { id: 6, url: "/certificate.jpg" },
    { id: 7, url: "/certificate.jpg" },
    { id: 8, url: "/certificate.jpg" },
    { id: 9, url: "/certificate.jpg" },
    { id: 10, url: "/certificate.jpg" },
    { id: 11, url: "/certificate.jpg" },
    { id: 12, url: "/certificate.jpg" },
    { id: 13, url: "/certificate.jpg" },
    { id: 14, url: "/certificate.jpg" },
    { id: 15, url: "/certificate.jpg" },
    { id: 16, url: "/certificate.jpg" },
    { id: 17, url: "/certificate.jpg" },
    { id: 18, url: "/certificate.jpg" },
    { id: 19, url: "/certificate.jpg" },
    { id: 20, url: "/certificate.jpg" },
  ];

  return (
    <InnerLayout
      links={links}
      counterData={counterData}
      grid="grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-3 gap-x-7"
    >
      {certificates.map((certificate) => (
        <CertificateCard key={certificate.id} certificate={certificate} />
      ))}
    </InnerLayout>
  );
}
