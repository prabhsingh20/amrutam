import { useNavigate } from "react-router-dom";
import Button from "../Button";

function CardList({ card }) {
  const navigate = useNavigate();

  const {
    img,
    personName,
    infertility,
    experience,
    language,
    video,
    videoPrice,
    chat,
    chatPrice,
  } = card;
  return (
    <li
      className=" relative rounded-3xl border-[1px] border-[#E3E3E3]  bg-[#FFF7E2] px-6 py-5 shadow-md
    "
    >
      <div className="flex w-[300px] flex-col items-center justify-center">
        <img src={img} alt="doctor image" className=" inline-flex" />
        <p className="absolute top-[150px] rounded-full bg-black px-2 py-1 text-sm font-normal text-white">
          4.5⭐
        </p>
        <h3 className="mt-5 text-3xl  font-medium text-[#2E2F2E]">
          {personName}
        </h3>
        <div className="mt-2 flex flex-col gap-2 px-8">
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#3A643B]">
              pill
            </span>
            <p className="text-base font-normal text-[#646665]">
              {infertility}
            </p>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#3A643B]">
              school
            </span>
            <p className="text-base font-normal text-[#646665]">{experience}</p>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#3A643B]">
              chat
            </span>

            <p className="text-base font-normal text-[#646665]">{language}</p>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <p className="rounded-xl  border-[1px] border-[#3a643b54] p-1 text-center text-sm leading-6">
            {video}
            <span className="font-medium text-[#3A643B]">{videoPrice}</span>
          </p>
          <p className="rounded-xl  border-[1px] border-[#3a643b54] p-1 text-center text-sm leading-6">
            {chat}
            <span className="font-medium text-[#3A643B]">{chatPrice}</span>
          </p>
        </div>
      </div>
      <Button
        onClick={() => navigate("doctorprofile")}
        className="mt-6 w-full border-[1px] border-[#3A643B] bg-[#fff] text-base font-normal text-[#3A643B]"
      >
        View Profile
      </Button>
      <Button className="mt-2 w-full bg-[#3A643B] text-base font-normal  text-[#fff]">
        Book a consultation
      </Button>
    </li>
  );
}

export default CardList;
