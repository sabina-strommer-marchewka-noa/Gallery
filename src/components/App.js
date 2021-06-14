import data from "../data";
import Carousel from "./Carousel/Carousel";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Carousel data={data} />
      </div>
    </div>
  );
}

export default App;
