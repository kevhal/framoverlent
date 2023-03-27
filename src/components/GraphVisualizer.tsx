import { ResponsiveBar } from "@nivo/bar";
import { useState } from "react";
import { TagCloud } from "react-tagcloud";

interface GraphVisualizerProps {
  data: string[][];
  searchTerms: string[];
}

const GraphVisualizer = ({ data, searchTerms }: GraphVisualizerProps) => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const graphs = ["Søketermgraf", "Ordsky"];

  const renderVisualization = () => {
    switch (selectedTab) {
      case 0:
        return (
          <ResponsiveBar
            data={searchTerms.map((term) => ({
              searchTerm: term,
              adsWithTerm: data.filter((ad) => ad.technologies.includes(term)).length,
            }))}
            keys={["adsWithTerm"]}
            indexBy="searchTerm"
            margin={{ bottom: 50, left: 60 }}
            padding={0.4}
            valueScale={{ type: "linear" }}
            colors="#3182CE"
            animate={true}
            enableLabel={false}
            axisTop={null}
            axisRight={null}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "degrees",
              legendPosition: "middle",
              legendOffset: -40,
            }}
          />
        );
      case 1:
        return (
          <TagCloud
            maxSize={100}
            minSize={1}
            tags={searchTerms.map((term) => ({
              value: term,
              count: data.filter((document) => document.technologies.includes(term)).length,
            }))}
          />
        );
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Velg visualisering {selectedTab}</h1>
      <div className="flex flex-row">
        {graphs.map((graph, idx) => (
          <button
            className="border px-2 py-1 rounded-full"
            key={idx}
            onClick={() => setSelectedTab(idx)}
          >
            {graph}
          </button>
        ))}
      </div>
      {renderVisualization()}
    </div>
  );
};
export default GraphVisualizer;
