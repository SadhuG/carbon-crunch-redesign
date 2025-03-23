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
          Only 37% of companies have set net zero targets, revealing a
          significant sustainability gap
        </>
      ),
    },
    {
      image: Globe,
      heading: "The Importance of ESG Performance",
      text: (
        <>
          Companies excelling in ESG deliver returns three times higher than
          their peers, proving sustainability pays off
        </>
      ),
    },
    {
      image: HourGlass,
      heading: "Urgency for Action on Emissions",
      text: (
        <>
          Only 18% of firms are reducing emissions fast enough to achieve net
          zero by 2050
        </>
      ),
    },
    {
      image: NetworkChart,
      heading: "Closing the Ambition-Action Gap",
      text: (
        <>
          It's crucial for businesses to align their goals with actionable
          sustainability strategies for real impact
        </>
      ),
    },
  ];

  return (
    <section>
      <div className="container mx-auto my-20 flex flex-col items-center justify-center text-center">
        <div className="w-[70%]">
          {/* tagline */}
          <p>Sustainability</p>

          {/* heading */}
          <h2 className="mt-4 text-5xl">
            Bridging the Gap Between Ambition and Action
          </h2>

          {/* subheading */}
          <p className="mt-6 text-lg">
            Corporate sustainability is more than a buzzword; it's a necessity.
            While most CEOs recognize their role in this mission, actual
            progress remains alarmingly slow.
          </p>
        </div>

        <div className="mt-20 flex flex-wrap justify-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="mx-4 my-8 flex w-72 flex-col items-center"
            >
              <Image
                className="fill-current text-blue-500"
                src={stat.image}
                alt={""}
                width={48}
                height={48}
              />
              <h5 className="mt-6 text-2xl">{stat.heading}</h5>
              <p className="mt-4">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
