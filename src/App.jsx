import "./App.css";
import viajar_01 from "./assets/viajar-01.jpg";
import viajar_02 from "./assets/viajar-02.jpg";
import viajar_03 from "./assets/viajar-03.jpg";
import Hero from "./components/Hero/Hero";
import Slider from "./components/Slider/Slider";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

const navbarLinks = [
  { url: "/", title: "Home" },
  { url: "/", title: "Viajes" },
  { url: "/", title: "Promos" },
];

function App() {
  return (
    <div className="App">
      <NavBar navbarLinks={navbarLinks} />
      <Hero imageSrc={viajar_01} />
      <Slider
        imageSrc={viajar_02}
        title={"Se un Explorador!"}
        subtitle={
          "Nuestra plataforma ofrece una amplia variedad de lugares únicos para visitar."
        }
      />
      <Slider
        imageSrc={viajar_03}
        title={"Recuerdos para toda la vida!"}
        subtitle={"Las vacaciones soñadas están solo a un click de distancia."}
        flipped={true}
      />
      <Footer />
    </div>
  );
}

export default App;
