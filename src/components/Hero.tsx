import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

// images
import handIcon from "@/assets/hand-icon.png";
import heroImage from "@/assets/hero-image.png";

const Hero = () => {
  return (
    // hero section
    <section className="flex h-full w-full items-center justify-center">
      <div className="container mx-auto mt-18 mb-16 flex flex-col items-center justify-center">
        {/* gradient background */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(40,179,10,0.3),rgba(40,179,10,0))]"></div>

        {/* hero text wrapper */}
        <div className="flex flex-col items-center justify-center">
          {/* tagline */}
          <div className="flex w-fit items-center space-x-1 rounded-full bg-[#070708] py-2 pr-5 pl-2 text-sm font-medium text-white">
            <Image
              src={handIcon}
              alt="Hand Waving Icon"
              width={24}
              height={24}
            />
            <p>Let’s Save our Environment</p>
          </div>

          {/* main page heading */}
          <h1 className="mt-3 text-4xl font-bold md:text-center lg:text-6xl">
            Streamline Your Sustainability Reporting With{" "}
            <span className="text-primary-green-darkest text-nowrap">
              CARBON CRUNCH
            </span>
          </h1>

          {/* sub-heading */}

          <p className="mt-6 text-center text-xl">
            <span className="text-primary-green-darkest font-bold">95%</span>{" "}
            Accurate Carbon Calculations Trusted by Industry Leaders
          </p>

          {/* CTA */}
          <div className="mt-10 flex space-x-4">
            <Button variant={"secondary"} size={"tall"}>
              Free Calculator
            </Button>
            <Button size={"tall"}>Book Demo</Button>
          </div>
        </div>

        {/* hero image */}
        <div className="mt-15">
          <Image src={heroImage} alt={""} quality={100} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
