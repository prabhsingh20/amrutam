import AppointFee from "./AppointFee";
import EveningTiming from "./EveningTiming";
import MorningTiming from "./MorningTiming";
import Session from "./Session";
import Slot from "./Slot";

function Box() {
  return (
    <section className="rounded-3xl border-[1px] border-[#E8E8E8] px-8 py-10">
      <AppointFee />
      <Session />
      <Slot />
      <MorningTiming />
      <EveningTiming />
    </section>
  );
}

export default Box;
