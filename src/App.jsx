import "./App.css";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Hero from "./components/Hero";
import Steps from "./components/Steps";
import Benefits from "./components/Benefits";
import FAQs from "./components/FAQs";
import CTAsection from "./components/CTAsection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="min-h-screen">
        <Announcement />
        <Navbar />
        <Hero />
        <Steps />
        <Benefits />
        <FAQs />
        <CTAsection />
        <Footer />
      </main>
    </>
  );
}

export default App;
