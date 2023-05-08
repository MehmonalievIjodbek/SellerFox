import "../src/styles/global.scss";
import "../src/styles/mobile.scss";
import BeginCarousel from "./Components/Begin-Carousel";
import Brand from "./Components/Brand";
import ContactUs from "./Components/ContactUs";
import Header from "./Components/Header";
import Main from "./Components/Main";

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
          hi
        </div>
      </div>
    </>
  );
}

export default App;
