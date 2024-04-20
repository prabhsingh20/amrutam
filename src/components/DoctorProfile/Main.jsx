import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function Main() {
  return (
    <main className="grid grid-cols-2 gap-4 px-14 py-5">
      <LeftSection />
      <RightSection />
    </main>
  );
}

export default Main;
