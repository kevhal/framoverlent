import { getDummyData } from "@/utils";
import { ResponsiveBar } from "@nivo/bar";
import { useEffect, useState } from "react";
import { TagCloud } from "react-tagcloud";
import GraphVisualizer from "./GraphVisualizer";
import SearchTerm from "./SearchTerm";
import useSWR from 'swr'


const SearchTermAdder = () => {
    const [data, setData] = useState<string[][]>([]);
    const [searchTerms, setSearchTerms] = useState<string[]>([
    "React",
    "Angular",
    "Vue",
  ]);
  const [term, setTerm] = useState<string>("");
  const removeTerm = (idx: number) => {
    setSearchTerms(searchTerms.filter((_, i) => i !== idx));
  };

  const addTerm = () => {
    setSearchTerms([...searchTerms, term]);
    setTerm("");
  };

  //const { data, error, isLoading } = useSWR('/api/user', fetcher)

  useEffect(() => {
    fetch('http://192.168.1.182:8080/technologies')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  return (

    <>
      <div className="flex flex-col items-center h-full">

        <GraphVisualizer data={data}  searchTerms={searchTerms}/> 
        <h1>Legg til søketerm</h1>
        <div className="flex flex-row">
          <input value={term} onChange={(e) => setTerm(e.target.value)}></input>
          <button onClick={() => addTerm()} className="bg-matrix text-white">
            Legg til term
          </button>
        </div>
        {searchTerms.map((term, idx) => (
          <SearchTerm
            key={idx}
            term={term}
            removeTerm={() => removeTerm(idx)}
          />
        ))}
      </div>
    </>
  );
};
export default SearchTermAdder;
