function Button({ children, onClick, className }) {
  return (
    <button
      className={` rounded-xl px-5 py-2 text-xl font-medium  ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
