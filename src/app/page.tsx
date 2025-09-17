import About from "./components/About";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Enterprises from "./components/Enterprises";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <About />
        <Contact />
        <Enterprises />
      </main>
      <Footer />
    </div>
  );
}
