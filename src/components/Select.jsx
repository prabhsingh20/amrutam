function Select({ name, id, children, className }) {
  return (
    <select
      name={name}
      id={id}
      className={`rounded-lg px-5 py-2 text-[#767676] outline-none ${className}`}
    >
      {children}
    </select>
  );
}

export default Select;
