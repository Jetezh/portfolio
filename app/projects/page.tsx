"use client";

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'motion/react';
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';

const projects = {
  portfolio: {
    title: "Vega Setiawan Portfolio",
    description: "First Portfolio of myself",
    details: "still progressing...",
    github: "https://github.com/Jetezh/portfolio",
  },
};

function ProjectsContent() {
  const searchParams = useSearchParams();
  const project = searchParams?.get('project') || null;
  const projectData = project ? projects[project as keyof typeof projects] : null;

  if (!projectData) {
    return (
      <div className="h-screen w-full lg:p-10 md:p-8 p-5 bg-[var(--bg-color)] text-[var(--primary-font-color)]">
        <div className="flex justify-start items-center">
          <Link href="/">
            <button
              className='flex flex-row items-center lg:gap-5 md:gap-3 gap-2 lg:text-[2rem] md:text-[1.5rem] text-[1rem] border-2 border-[var(--accent-color)] rounded-full lg:px-6 px-4 py-2 hover:bg-[var(--accent-color)] hover:text-[var(--bg-color)] hover:cursor-pointer transition-all duration-300'>
              <FaArrowLeft />
              Back to Home
            </button>
          </Link>
        </div>
        <div className="w-full lg:py-8 py-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-xl">The requested project could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full lg:p-10 md:p-8 p-5 bg-[var(--bg-color)] text-[var(--primary-font-color)]">
      <div className="flex justify-start items-center">
        <Link href="/">
          <button
            className='flex flex-row items-center lg:gap-5 md:gap-3 gap-2 lg:text-[2rem] md:text-[1.5rem] text-[1rem] border-2 border-[var(--accent-color)] rounded-full lg:px-6 px-4 py-2 hover:bg-[var(--accent-color)] hover:text-[var(--bg-color)] hover:cursor-pointer transition-all duration-300'>
            <FaArrowLeft />
            Back to Home
          </button>
        </Link>
      </div>
      <div className="w-full lg:py-8 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full mx-auto"
        >
          <h1 className="lg:text-[4rem] md:text-[2.5rem] text-[1.5rem] text-center font-bold mb-4">{projectData.title}</h1>
          <p className="lg:text-[2rem] md:text-[1.5rem] text-[1rem] mb-6">{projectData.description}</p>
          <div className="lg:text-[2rem] md:text-[1.5rem] text-[1rem] prose prose-lg">
            <p>{projectData.details}</p>
          </div>
          {projectData.github && (
            <div className="mt-4">
              <a 
                href={projectData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent-color)] hover:underline"
              >
                View on GitHub
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Suspense fallback={
      <div className="h-screen w-full flex items-center justify-center bg-[var(--bg-color)] text-[var(--primary-font-color)]">
        <div className="text-2xl">Loading...</div>
      </div>
    }>
      <ProjectsContent />
    </Suspense>
  );
}