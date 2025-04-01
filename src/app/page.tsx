"use client";

import Navbar from "@/components/Navbar";
import { ChevronDoubleDownIcon, CalendarIcon } from "@heroicons/react/16/solid";
import { useRef } from "react";

import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2020",
    title: "Started Learning Programming",
    description: "Began my journey with Python and JavaScript.",
  },
  {
    year: "2021",
    title: "Built First Full-Stack App",
    description: "Created a MERN stack application.",
  },
  {
    year: "2022",
    title: "Joined a Tech Community",
    description: "Started contributing to open source projects.",
  },
  {
    year: "2023",
    title: "Started Freelancing",
    description: "Worked on various client projects.",
  },
  {
    year: "2024",
    title: "Building SaaS Products",
    description: "Working on my own startup idea.",
  },
];

const Timeline = () => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 py-10">
      <h2 className="mb-10 text-3xl font-bold">My Timeline</h2>
      <div className="relative w-3/4">
        <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gray-300"></div>
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            // viewport={{ once: true }}
            className={`mb-10 flex w-full items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            <div className="w-1/2 rounded-lg bg-white p-4 shadow-lg">
              <h3 className="text-xl font-semibold">{item.year}</h3>
              <h4 className="text-lg font-medium text-gray-700">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div className="flex h-screen flex-col">
        <Navbar />
        <main className="custom-main relative flex flex-1 flex-col items-center bg-black bg-gradient-to-b from-gray-950 to-gray-800">
          <div className="absolute inset-0 z-0 h-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:10px_10px]"></div>

          <div className="z-10 mt-28 flex w-1/2 flex-col items-center justify-center gap-7 text-white">
            <p className="bg-gradient-to-t from-blue-300 via-blue-200 to-white bg-clip-text pb-1 text-center text-6xl font-bold text-transparent">
              Plan smarter, deliver better, Effortlessly and Efficiently with
              Sprintline
            </p>

            <span className="px-24 text-center text-2xl font-semibold tracking-wide text-blue-100">
              Empower your team with a seamless sprint management system
              designed to keep projects on track and collaboration effortless.
            </span>
            <div className="mt-1 flex gap-4">
              <button className="cursor-pointer rounded-4xl bg-gray-950 px-4 py-2 text-2xl text-white">
                Get Started
              </button>
              <button className="cursor-pointer rounded-4xl bg-gray-950 px-4 py-2 text-2xl text-white">
                Watch Demo
              </button>
            </div>
          </div>

          <div
            role="button"
            className="mt-9 flex cursor-pointer flex-col items-center"
          >
            <span className="text-lg text-gray-400">Scroll Down</span>
            <ChevronDoubleDownIcon
              onClick={() =>
                sectionRef.current?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="mt-2 h-10 w-10 animate-bounce text-gray-400"
            />
          </div>
        </main>
      </div>

      <div
        ref={sectionRef}
        className="flex h-fit flex-col items-center justify-center gap-10 bg-gray-900 p-12 pt-22 text-amber-50"
      >
        <h1 className="bg-gradient-to-t from-blue-300 via-blue-200 to-white bg-clip-text text-center text-5xl font-bold text-transparent">
          Revolutionize The Way You Manage Projects
        </h1>
        <p className="w-2/3 px-24 text-center text-lg font-semibold tracking-wide text-blue-100">
          Explore the boundless possibilities with Sprintline - where every
          project is visible, manageable, and aligned for success.
        </p>

        <div className="flex h-auto w-full justify-between gap-4 rounded-xl p-4">
          <div className="flex w-full flex-col gap-3 rounded-lg border-1 border-blue-300 bg-gradient-to-br from-gray-950 to-gray-800 p-4 py-10 shadow-[0px_0px_8px_1px_rgba(255,255,255,.4)] transition-all duration-300 ease-in-out hover:-translate-y-4">
            <div className="grow-0">
              <CalendarIcon className="w-18 text-blue-100" />
            </div>
            <h2 className="`text`-2xl font-semibold">Smart Calendar</h2>
            <p className="text-[18px] tracking-wide">
              Track sprints, deadlines, and meetings in one place. Get a clear
              overview of your progress with a dynamic calendar.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 rounded-lg border-1 border-blue-300 bg-gradient-to-br from-gray-950 to-gray-800 p-4 py-10 shadow-[0px_0px_8px_1px_rgba(255,255,255,.4)] transition-all duration-300 ease-in-out hover:-translate-y-4">
            <div className="grow-0">
              <CalendarIcon className="w-18 text-blue-100" />
            </div>
            <h2 className="text-2xl font-semibold">Real-time Communication</h2>
            <p className="text-[18px] tracking-wide">
              Discuss tasks, share updates, and collaborate with your team in
              real-time. Keep everyone in sync without delays.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 rounded-lg border-1 border-blue-300 bg-gradient-to-br from-gray-950 to-gray-800 p-4 py-10 shadow-[0px_0px_8px_1px_rgba(255,255,255,.4)] transition-all duration-300 ease-in-out hover:-translate-y-4">
            <div className="grow-0">
              <CalendarIcon className="w-18 text-blue-100" />
            </div>
            <h2 className="text-2xl font-semibold">Team Collaboration</h2>
            <p className="text-[18px] tracking-wide">
              Assign tasks, leave comments, and get instant updates. Sprintline
              keeps your team connected and efficient.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 rounded-lg border-1 border-blue-300 bg-gradient-to-br from-gray-950 to-gray-800 p-4 py-10 shadow-[0px_0px_8px_1px_rgba(255,255,255,.4)] transition-all duration-300 ease-in-out hover:-translate-y-4">
            <div className="grow-0">
              <CalendarIcon className="w-18 text-blue-100" />
            </div>
            <h2 className="text-2xl font-semibold">Workflow Automation</h2>
            <p className="text-[18px] tracking-wide">
              Automate repetitive tasks, set up custom workflows, and let
              Sprintline handle the busywork—so you can focus on what matters.
            </p>
          </div>
        </div>
      </div>
      <div className="h-[400px] border border-amber-50 bg-gray-900 pt-10">
        <h1 className="bg-gradient-to-t from-blue-300 via-blue-200 to-white bg-clip-text text-center text-5xl font-bold text-transparent">
          How it Works
        </h1>
      </div>
      <Timeline />
    </>
  );
}
