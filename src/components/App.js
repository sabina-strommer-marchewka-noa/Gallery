import { useEffect, useState } from "react";
import Carousel from "./Carousel/Carousel";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=50&api_key=DEMO_KEY&page=1"
      );
      const data = await res.json();
      const images = data.photos
        .map((item) => ({ id: item.id, src: item.img_src, alt: item.earth }))
        .slice(0, 5);
      setData(images);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <div className="wrapper">
        <Carousel data={data} />
      </div>
    </div>
  );
}

export default App;
