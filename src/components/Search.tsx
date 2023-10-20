import { useSearch } from "../hooks/useSearch";

export const Search = () => {
  const textInput = useSearch()?.textInput
  const handleChange = useSearch()?.handleChange
  const handleSubmit = useSearch()?.handleSubmit

  return (
    <div className="flex items-center gap-[10px] border border-gray-500 px-[10px] rounded">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-[16px] h-[16px] text-gray-500"
        onClick={handleSubmit}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>

      <input type="text" value={textInput} onChange={handleChange} placeholder="Search..." className="py-[10px] outline-none bg-transparent w-full" />
    </div>
  );
};
