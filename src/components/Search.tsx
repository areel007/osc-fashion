export const Search = () => {
  return (
    <div className="flex items-center gap-[10px] border border-gray-500 px-[10px] rounded">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[16px] h-[16px] text-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input type="text" placeholder="Search..." className="py-[10px] outline-none" />
    </div>
  );
};
