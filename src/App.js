import AmazeNft from "./Components/AmazeNft/AmazeNft";
import Collections from "./Components/Collections/Collections";
import Discover from "./Components/Discover/Discover";
import Featured from "./Components/Featured/Featured";
import Banner from "./Components/HeroBanner/Banner";
import SignUp from "./Components/SignUp/SignUp";
import "./Styles/App.css";

function App() {
  return (
    <>
      <Banner />
      <AmazeNft />
      <Collections />
      <Featured />
      <SignUp />
      <Discover />
    </>
  );
}

export default App;
