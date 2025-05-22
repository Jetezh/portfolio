"use client";

import React from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'motion/react';
import { Button } from '@heroui/react';
import { FaArrowLeft } from "react-icons/fa";
import Link from 'next/link';

const projects = {
  upni: {
    title: "UPNI",
    description: "University Project Management System",
    details: "A comprehensive project management system for universities...",
    github: "https://github.com/Jetezh/upni",
  },
};

export default function Projects() {
  const searchParams = useSearchParams();
  const project = searchParams?.get('project') || null;

  const projectData = project ? projects[project as keyof typeof projects] : null;

  return (
    <div className="h-screen w-full bg-[var(--bg-color)] text-[var(--primary-font-color)]">
      <div className="flex justify-center items-center">
        <Link href="/">
          <Button
            size='lg'
            radius='sm'
            variant='ghost'
            className='flex flex-row gap-5 text-[4rem] hover:cursor-pointer'>
            <FaArrowLeft />
            Back to Home
          </Button>
        </Link>
      </div>
      <div className="container mx-auto px-4 py-8">
        {projectData ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full mx-auto"
          >
            <h1 className="text-[5rem] font-bold mb-4">{projectData.title}</h1>
            <p className="text-xl mb-6">{projectData.description}</p>
            <div className="prose prose-lg">
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
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4">Projects</h1>
            <p className="text-xl">Select a project to view its details</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}