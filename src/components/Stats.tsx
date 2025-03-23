import Globe from "@/assets/globe.svg";
import HourGlass from "@/assets/hourglass.svg";
import NetworkChart from "@/assets/network-chart.svg";
import PieChart from "@/assets/pie-chart.svg";
import Image from "next/image";

const Stats = () => {
  const stats = [
    {
      image: PieChart,
      heading: "The Reality of Corporate Sustainability Efforts",
      text: (
        <>
          Only <strong>37%</strong> of companies have set net zero targets,
          revealing a significant sustainability gap
        </>
      ),
    },
    {
      image: Globe,
      heading: "The Importance of ESG Performance",
      text: (
        <>
          Companies excelling in ESG deliver returns <strong>3x</strong> higher
          than their peers, proving sustainability pays off
        </>
      ),
    },
    {
      image: HourGlass,
      heading: "Urgency for Action on Emissions",
      text: (
        <>
          Only <strong>18%</strong> of firms are reducing emissions fast enough
          to achieve net zero by 2050
        </>
      ),
    },
    {
      image: NetworkChart,
      heading: "Closing the Ambition-Action Gap",
      text: (
        <>
          It&apos;s crucial for businesses to align their goals with actionable
          sustainability strategies for <strong>real impact</strong>
        </>
      ),
    },
  ];

  return (
    <section>
      <div className="container mx-auto my-20 flex flex-col items-center justify-center px-6 text-center">
        <div className="md:w-[70%]">
          {/* tagline */}
          <p>Sustainability</p>

          {/* heading */}
          <h2 className="mt-4 font-sans text-4xl font-semibold lg:text-5xl">
            Bridging the Gap Between Ambition and Action
          </h2>

          {/* subheading */}
          <p className="mt-6 lg:text-lg">
            Corporate sustainability is more than a buzzword; it&apos;s a
            necessity. While most CEOs recognize their role in this mission,
            actual progress remains alarmingly slow.
          </p>
        </div>

        <div className="mt-20 flex flex-wrap justify-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="mx-4 my-8 flex w-72 flex-col items-center"
            >
              <Image src={stat.image} alt={""} width={48} height={48} />
              <h5 className="mt-6 font-sans text-xl font-medium lg:text-2xl">
                {stat.heading}
              </h5>
              <p className="mt-4">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
