import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Stats from "@/components/Stats";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="mx-auto">
        <header>
          <Navbar />
          <Hero />
        </header>
        <main className="mx-auto max-w-[1536px]">
          <Stats />
        </main>
      </div>
    </>
  );
};

export default Home;
