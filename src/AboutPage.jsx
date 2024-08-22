import Nav from "./components/Nav";
import Info from "./components/info";

function AboutPage() {
  return (
    <section className="flex flex-col mx-[5vw] max-sm:mx-[10vw] items-center mt-48">
      <Nav />
      <div className=" bg-slate-200 w-full mb-48">
        <h1 className="text-black text-left"> Hi, I'm Andy...</h1>
      </div>
      <Info />
      <div className="bg-slate-300 w-full">
        <p> Eduction. </p>
      </div>
      <Info />
    </section>
  );
}

export default AboutPage;
