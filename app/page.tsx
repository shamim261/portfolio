import About from "./_components/About";
import Footer from "./_components/Footer";
import Intro from "./_components/Intro";
import Navbar from "./_components/Navbar";
import Projects from "./_components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="sm:max-w-5xl sm:mx-auto">
        <Intro />
        <About />
        {/* <Experience /> */}
        <Projects />
        <Footer />
      </main>
    </>
  );
}
