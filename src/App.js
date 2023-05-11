import "../src/styles/global.scss";
import "../src/styles/mobile.scss";
import About from "./Components/About";
import Advantages from "./Components/Advantages";
import BeginCarousel from "./Components/Begin-Carousel";
import Brand from "./Components/Brand";
import ContactUs from "./Components/ContactUs";
import Header from "./Components/Header";
import InsideCard from "./Components/Inside-card";
import Main from "./Components/Main";
import MonthOne from "./Components/Month-one";
import MoreCard from "./Components/MoreCard";
import PriceCard from "./Components/Price-Card";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div style={{ paddingTop: "10px" }}>
          <Main />
          <Brand />
          <ContactUs />
          <BeginCarousel />
          <InsideCard />
          <Advantages />
          <MoreCard />
          <About />
          <PriceCard />
          <MonthOne />
        </div>
      </div>
    </>
  );
}

export default App;
