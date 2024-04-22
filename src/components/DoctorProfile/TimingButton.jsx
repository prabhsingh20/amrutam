function TimingButton({ children, onClick, className }) {
  return (
    <button
      className={`rounded-3xl border-[1px] border-[#EBEBEB] px-4 py-5 text-base font-normal text-[#131313] duration-100 ease-in hover:bg-[#3A643B] hover:text-[#fff] ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default TimingButton;
