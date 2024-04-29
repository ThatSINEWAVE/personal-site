"use client";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function Example() {
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
                Hey there! Welcome to my corner of the web, where my passion for coding collides with my love for pushing boundaries.
                I spend my days turning concepts into reality, using Python and JavaScript to cook up some pretty cool stuff for the web.
                I'm the mastermind behind a dynamic company focused on Online Stores & Digital Marketing Solutions.
                Oh, and I also dabble in real estate, merging market insights with tech savvy to shake things up in property ventures.
                When I'm not immersed in code, you'll likely find me gaming and tracking down bugs like hidden treasures.
                It's my way of unwinding and gaining fresh insights into software and game development.
                My coding philosophy? It's all about crafting fun and quirky projects that not only entertain but also come in handy.
                I love diving into experimental projects, where I let my imagination run wild, coding up whatever sparks my curiosity.
                I've whipped up countless mini-apps, each a testament to the joy of creating something from scratch, fueled by pure imagination.
                So, that's me in a nutshell! Stick around, and let's ride this wave together.
                Feel free to browse through my projects and hit me up if you have any questions or want to team up on something awesome!
                Thanks for stopping by!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}