"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-1 lg:gap-16">
          <Card>
            <div className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16">
              <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
                About Me
              </h2>
              <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                Hi there! I'm a passionate developer with a keen interest in
                creating innovative solutions. I love exploring new technologies
                and constantly expanding my knowledge. When I'm not coding,
                you'll find me indulging in my hobbies or spending time with
                loved ones.
              </p>
              <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
                Feel free to explore my projects and don't hesitate to reach out
                if you have any questions or opportunities for collaboration.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}