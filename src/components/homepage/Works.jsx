import ibgroup from "/src/assets/images/ib-group-desktop.webp";
import memento from "/src/assets/images/memento-desktop.webp";
import acc from "/src/assets/images/acc-square.webp";
import daddy from "/src/assets/images/godaddy-desktop.webp";
import sunnyside from "/src/assets/images/sunnyside-desktop.webp";
import Projects from "../ui/Projects";
import Heading from "../ui/Heading";

export default function Works({ forwardedRef }) {
  return (
    <section
      ref={forwardedRef}
      id="works"
      className="nav-change overflow-hidden my-[10%]"
    >
     <Heading title="Projects" />
      <div className="mt-10 grid grid-cols-1 gap-16 gap-y-10 md:grid-cols-12">
        {/* Project #1 */}
        <div className="col-span-1 pt-0 md:col-span-7 md:pt-16">
          <Projects
            link="https://social-instasnap.netlify.app/"
            img={memento}
            alt="Instasnap(Social Wepapp)"
            name="instasnap"
            type="Web Design • Frontend Development"
            year="2024"
            tools="Reactjs • TailwindCSS/ShadCN • TypeScript • Appwrite"
          />
        </div>
        {/* Project #2 */}
        <div className=" col-span-1 md:col-span-12">
          <Projects
            link="https://musical-stroopwafel-1c2327.netlify.app/landing.html"
            img={ibgroup}
            alt="revamped parker.com"
            name="revamped parker.com"
            type="Web Design • Frontend Development"
            year="2024"
            tools="HTML • TailwindCSS • JavaScript • GSAP"

          />
        </div>
        <div className="col-span-1 pt-0 md:col-span-5 md:pt-80">
          <Projects
            link="https://realbusinessaccountants.netlify.app"
            img={acc}
            alt="musicova"
            name="musicova"
            type="Web Design • Frontend Development"
            year="2024"
            tools="HTML • CSS • JavaScript • Figma"
          />
        </div>
        <div className="col-span-1 h-fit pt-0 md:col-span-8 md:pt-20">
          <Projects
            link="https://godaddyuiclone.netlify.app"
            img={daddy}
            alt="Weather-forecast"
            name="Weather-forecast"
            type="Frontend Development"
            year="2024"
            tools="HTML • CSS • JavaScript"
          />
        </div>
        <div className="col-span-1 h-fit md:col-span-4">
        <Projects
            link="https://sunnysidechallenge.netlify.app"
            img={sunnyside}
            alt="qr generator"
            name="qr generator"
            type="Frontend Development"
            year="2022"
            tools="HTML • CSS • JavaScript"
          />
         
        </div>
      </div>
    </section>
  );
}
