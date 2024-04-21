import AboutMe from "./AboutMe";
import ConcernTreat from "./ConcernTreat";
import Experience from "./Experience";
import Reviews from "./Reviews";

function LeftSection() {
  return (
    <div className="flex flex-col gap-6">
      <AboutMe />
      <ConcernTreat />
      <Experience />
      <Reviews />
    </div>
  );
}

export default LeftSection;
