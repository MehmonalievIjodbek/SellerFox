import "../src/styles/global.scss";
import "../src/styles/mobile.scss";
import About from "./Components/About";
import Advantages from "./Components/Advantages";
import BackToTop from "./Components/BackToTop";
import BeginCarousel from "./Components/Begin-Carousel";
import Brand from "./Components/Brand";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import InsideCard from "./Components/Inside-card";
import Main from "./Components/Main";
import MenuFooterMobile from "./Components/MenuFooterMobile";
import MonthOne from "./Components/Month-one";
import MoreCard from "./Components/MoreCard";
import OfferCard from "./Components/OfferCard";
import PriceCard from "./Components/Price-Card";

function App() {
  return (
    <>
      <Header />
      <MenuFooterMobile />

      <div className="container">
        <div style={{ paddingTop: "100px" }}>
          <Main />
          <Brand />
          <ContactUs />
          <InsideCard />
          <Advantages />
          <MoreCard />
          <About />
          <PriceCard />
          <MonthOne />
          <OfferCard />
        </div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
