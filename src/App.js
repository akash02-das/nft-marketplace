import AmazeNft from "./Components/AmazeNft/AmazeNft";
import Collections from "./Components/Collections/Collections";
import Featured from "./Components/Featured/Featured";
import Banner from "./Components/HeroBanner/Banner";
import "./Styles/App.css";

function App() {
  return (
    <>
      <Banner />
      <AmazeNft />
      <Collections />
      <Featured />
    </>
  );
}

export default App;
