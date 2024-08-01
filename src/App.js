import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import QrCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div className="App">
      <Accordion />
      <RandomColor />
      <StarRating NoOfStars={10} />
      <ImageSlider url={"https://picsum.photos/v2/list"} page={2} limit={10} />
      <LoadMoreData />
      <TreeView menus={menus} />
      <QrCodeGenerator />
    </div>
  );
}

export default App;
