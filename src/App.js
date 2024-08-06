import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QrCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
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
      <LightDarkMode />
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
    </div>
  );
}

export default App;
