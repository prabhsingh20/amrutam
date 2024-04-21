import CardList from "./CardList";

const data = [
  {
    id: 1,
    img: "/img/Ellipse.png",
    personName: "Dr. Prerna Narang",
    infertility: "Male-Female Inferlity",
    experience: "7 years of Experience",
    language: "Speaks: English, Hindi, Marathi",
    video: "Video consultation ",
    chat: "Chat consultation ",
    videoPrice: "₹800",
    chatPrice: "Free",
  },
  {
    id: 2,
    img: "/img/Ellipse.png",
    personName: "Dr. Prerna Narang",
    infertility: "Male-Female Inferlity",
    experience: "7 years of Experience",
    language: "Speaks: English, Hindi, Marathi",
    video: "Video consultation ",
    chat: "Chat consultation ",
    videoPrice: "₹800",
    chatPrice: "Free",
  },
  {
    id: 3,
    img: "/img/Ellipse.png",
    personName: "Dr. Prerna Narang",
    infertility: "Male-Female Inferlity",
    experience: "7 years of Experience",
    language: "Speaks: English, Hindi, Marathi",
    video: "Video consultation ",
    chat: "Chat consultation ",
    videoPrice: "₹800",
    chatPrice: "Free",
  },
];

function CardsSection() {
  return (
    <ul className="m-10 flex items-center justify-center gap-6">
      {data.map((card) => (
        <CardList card={card} key={card.id} />
      ))}
    </ul>
  );
}

export default CardsSection;
