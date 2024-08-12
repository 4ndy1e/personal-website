import BlurFade from "./components/BlurFade";

function Projects() {
  return (
    <section className="flex flex-col items-center my-96">
      <div className="flex flex-col">
        <h2 className="text-7xl font-bold my-16 text-left">Latest Work.</h2>
        <div className="flex gap-8">
          <ProjectCards />
        </div>
      </div>
    </section>
  );
}

function ProjectCards() {
  return (
    <section className="flex flex-col gap-8">
      <div className="flex gap-8 max-w-[1500px]">
        <BlurFade delay={0.5} inView className="w-2/3">
          <div className="flex flex-col">
            <a href="https://skribble-five.vercel.app/" target="_blank">
              <div className="bg-[#e2e2e2] card">
                <h3 className="skribbleGrad">Skribble.</h3>
              </div>
            </a>
            <h4> SKRIBBLE</h4>
            <p className="projDesc"> Online Drawing Platform </p>
          </div>
        </BlurFade>
        <BlurFade delay={0.5 + 0.1} inView className="w-1/3">
          <div className="flex flex-col">
            <a href="https://github.com/Smit2553/Fiber" target="_blank">
              <div className="bg-[#FFA800] card">
                <img
                  src="avacado.png"
                  alt="avacado"
                  className="aspect-square w-[85%] max-w-[300px]"
                />
                <h3 className="text-white text-6xl">FIBER</h3>
              </div>
            </a>
            <h4> FIBER</h4>
            <p className="projDesc"> AI Powered Food Rating App </p>
          </div>
        </BlurFade>
      </div>

      <div className="flex gap-8 max-w-[1500px]">
        <BlurFade delay={0.5} inView className="w-2/5">
          <div className="flex flex-col">
            <a
              href="https://board-game-cafe-website.vercel.app/"
              target="_blank"
            >
              <div className="bg-[#DEEAD5] card">
                <img
                  src="sip&play.png"
                  alt="sip"
                  className="aspect-square w-[90%]"
                />
              </div>
            </a>
            <h4> SIP & PLAY</h4>
            <p className="projDesc"> 1st UI / UX Design </p>
          </div>
        </BlurFade>
        <BlurFade delay={0.5 + 0.1} inView className="w-3/5">
          <a href="https://4ndy1e.github.io/protein-pal/" target="_blank">
            <div className="flex flex-col">
              <div className="bg-white card">
                <h3 className="text-black font-[times]">
                  Protein<span className="text-[#FF6347]">Pal</span>
                </h3>
              </div>
              <h4> PROTEINPAL</h4>
              <p className="projDesc"> Recipe Page Frontend </p>
            </div>
          </a>
        </BlurFade>
      </div>
      <div className="flex gap-8 max-w-[1500px]">
        <BlurFade delay={0.5} inView className="w-full">
          <a href="https://calculator-iota-one-98.vercel.app/">
            <div className="flex flex-col">
              <img
                src="calculator.png"
                alt="calc"
                className="rounded-[50px] hover:shadow-2xl"
              />
              <h4> CALCULATOR</h4>
              <p className="projDesc"> Basic 4 function calculator </p>
            </div>
          </a>
        </BlurFade>
      </div>
    </section>
  );
}

export default Projects;
