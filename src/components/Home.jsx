"use client";

import React, { useState } from "react";
import { Button } from "@mui/material";
import { Github, Linkedin, Mail, Twitter, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Contact from "./Contact";

// Import your images
import soniPainting from "./../images/sonipainting.png";
import invoicer from "./../images/invoicer.png";
import resturantApp from "./../images/thaichilli.png";

export default function Portfolio() {
  const [showFullScreenAvatar, setShowFullScreenAvatar] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const projects = [
    {
      title: "Soni Painting Services",
      image: soniPainting,
      description:
        "A website for a painting service business. Built using MERN stack (React, Express, MongoDB, Node.js) with features like user login, reviews, ratings, services listing, and an online quotation generator.",
      projectUrl: "https://sonipainting.com/",
      codeUrl: "https://github.com/sahzadahmad246/sonipainting",
    },
    {
      title: "Invoicer",
      image: invoicer,
      description:
        "A billing generation app for shopkeepers built with MERN stack. It allows shop owners to list products and generate invoices by selecting from the product list.",
      projectUrl: "https://invoicer-1c55.onrender.com/",
      codeUrl: "https://github.com/sahzadahmad246/invoicer",
    },
    {
      title: "Thai Chilli Food Ordering",
      image: resturantApp,
      description:
        "A food ordering app with an admin panel for managing orders and updating order statuses. Built using MERN stack for efficient order management.",
      projectUrl: "https://resfront.onrender.com/",
      codeUrl: "https://github.com/sahzadahmad246/resfront",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <motion.div {...fadeInUp}>
          <button
            onClick={() => setShowFullScreenAvatar(true)}
            className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-full"
            aria-label="View full-size avatar"
          >
            <img
              src="https://avatars.githubusercontent.com/u/124631079?s=400&v=4"
              alt="Shahzad Ahmad"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-8 hover:opacity-80 transition-opacity"
            />
          </button>
          <h1 className="text-4xl font-bold mb-4">Shahzad Ahmad</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Frontend Developer
          </p>
          <div className="flex justify-center space-x-4">
            {/* Social Buttons */}
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  window.open("https://github.com/sahzadahmad246", "_blank")
                }
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  window.open("https://x.com/shahzadahmad246", "_blank")
                }
                aria-label="Twitter Profile"
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/shahzad-ahmad-a41865185?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                    "_blank"
                  )
                }
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                onClick={() =>
                  (window.location.href = "mailto:sahzadahmad246@gmail.com")
                }
                aria-label="Email Contact"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* About Me Section */}
      <motion.section
        className="py-20 bg-secondary"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            I'm a passionate frontend developer with experience in building web
            applications. I love creating elegant solutions to complex problems
            and am always eager to learn new technologies.
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind",
              "Bootstrap",
              "Git",
              "GitHub",
              "MUI",
              "MongoDB",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="bg-secondary rounded-lg p-4 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Copyright Footer */}
      <footer className="py-4 text-center bg-background">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Shahzad Ahmad. All rights reserved.
        </p>
      </footer>

      {/* Full Screen Avatar */}
      <AnimatePresence>
        {showFullScreenAvatar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setShowFullScreenAvatar(false)}
          >
            <div className="relative">
              <Button
                variant="secondary"
                size="icon"
                className="absolute bottom-2 right-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowFullScreenAvatar(false);
                }}
                aria-label="Close full-screen avatar"
              >
                <X className="h-6 w-6 text-white text-center" />
              </Button>
              <motion.img
                src="https://avatars.githubusercontent.com/u/124631079?s=400&v=4"
                alt="Shahzad Ahmad"
                className="max-w-full max-h-[90vh] rounded-lg"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
