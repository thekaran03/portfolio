import ServiceUi from "../ui/ServiceUi";
import Heading from "../ui/Heading";

export default function Services() {
  const expertiseItems = [
    "Web Development",
    "Web3",
    "Web Design",
    "UI/UX Design",
  ];

  const toolBoxItems = [
    "MERN",
    "JavaScript",
    "NodeJS",
    "Git/Github",
    "GSAP",
    "TailwindCSS",
    "ShadCN",
    "Figma",
  ];

  return (
    <section id="services" className="my-[10%]" aria-label="services">
      <Heading title="Experties" />
      <div className="space-y-14">
        <ServiceUi
          title="my experties."
          description="I focus on all things design and web related. With each of my
          experties, my goal is to build an impactful and elevating
          digital experience for everyone."
          items={expertiseItems}
        />
        <ServiceUi
          title="my digital tool box."
          description="These are my go to tech stack to make any projects happen. I am always eager of learning more about my current stack, and new technologies that could expand my horizons."
          items={toolBoxItems}
        />
      </div>
    </section>
  );
}
