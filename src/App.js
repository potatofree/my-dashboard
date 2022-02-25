import "@progress/kendo-theme-material/dist/all.css";
import { TileLayout } from "@progress/kendo-react-layout";
import { useState } from "react";
import "./App.css";

const WidgetOne = () => <div>Widget one</div>;
const WidgetTwo = () => <div>Widget two</div>;

const initialPositions = [
  {
    col: 1,
    colSpan: 2,
    rowSpan: 2,
  },
  {
    col: 3,
    colSpan: 1,
    rowSpan: 1,
  },
];


function App() {
  const [positions, setPositions] = useState(initialPositions);

  const widgets = [
   	{
      header: "There will be the weather cast",
      body: <WidgetOne />,
    },
    {
      header: "Here should be my todo",
      body: <WidgetTwo />,
    },
  ];

  const handleReposition = e => {
    setPositions(e.value);
  };

  return (
    <div className="App">
      <h1>Jobs dashboard</h1>
      <TileLayout
        className="tileLayout"
        columns={4}
        rowHeight={255}
        gap={{ rows: 10, columns: 10 }}
        positions={positions}
        items={widgets}
        onReposition={handleReposition}
      />
    </div>
  );
}

export default App;
