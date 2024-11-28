import Intro from "./_components/Intro";
import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <Intro />
      </main>
    </>
  );
}
