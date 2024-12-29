"use client";

import Btn from "./../ui/btns/Btn";
import { useState } from "react";
import CertificateCard from "../shared/CertificateCard";
import UseMediaModal from "../shared/UseMediaModal";

const btns = [
  {
    id: 1,
    title: "Turnkey services for Fiber-to-the-Home",
    imgs: {
      1: "/works/w-1.webp",
      2: "/works/w-2.webp",
      3: "/works/w-3.jpg",
    },
  },
  {
    id: 2,
    title: "Remote Fiber Testing Systems",
    imgs: {
      1: "/works/w-4.webp",
    },
  },
  {
    id: 3,
    title: "5G Fixed Access Networks",
    imgs: {
      1: "/works/w-5.webp",
      2: "/works/w-6.png",
      3: "/works/w-7.jpg",
    },
  },
];

export default function WorkSection() {
  const [currentBtn, setCurrentBtn] = useState(1);

  return (
    <section className="w-full flex flex-col gap-8">
      <div className="w-full lg:w-fit mx-auto flex gap-4 overflow-x-auto scroll-shape">

        {btns.map((btn) => (
          <Btn
            key={btn.id}
            onClick={() => setCurrentBtn(btn.id)}
            bg={`text-xs md:px-6 md:py-2 md:text-base w-fit ${
              currentBtn === btn.id
                ? "bg-blueShades-300 text-white"
                : "bg-white text-blueShades-300"
            }`}
            color="border border-gray-200 font-bold"
            text={btn.title}
            rounded="rounded-lg"
            hover="hover:bg-secondary hover:text-white"
          />
        ))}
      </div>

      <div className="w-full">
        <UseMediaModal imgs={btns[currentBtn - 1].imgs} type="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-y-3 gap-x-7">
            {Object.keys(btns[currentBtn - 1].imgs).map((key) => (
              <CertificateCard
                key={key}
                certificate={{ url: btns[currentBtn - 1].imgs[key] }}
              />
            ))}
          </div>
        </UseMediaModal>
      </div>
    </section>
  );
}