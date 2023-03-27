interface SearchTermProps {
  removeTerm: () => void;
  term: string;
}

const SearchTerm = ({ removeTerm, term }: SearchTermProps) => {
  return (
    <>
      <div className="flex flex-row border border-grey-500 rounded-full h-fit z-10 ">
        <p className="px-[5px]">{term}</p>
        <button className="bg-[grey] hover:bg-[#737373] rounded-full px-[5px] z-0" onClick={removeTerm}>X</button>
      </div>
    </>
  );
};
export default SearchTerm;
