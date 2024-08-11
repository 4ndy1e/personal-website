import BlurFade from "./components/BlurFade";

function Projects() {
  return (
    <section className="h-[1000px] flex flex-col mx-[100px] max-w-[1280px] justify-center">
      <div className="flex w-full">
        <h2 className="text-6xl font-bold my-16">Latest Work.</h2>
      </div>

      <ProjectCards />
    </section>
  );
}

function ProjectCards() {
  return (
    <BlurFade delay={0.7} inView>
      <div className="flex flex-col">
        <div className="w-[595px] h-[693px] bg-[#e2e2e2] card">
          <h3 className="">Skribble.</h3>
        </div>
        <h4> SKRIBBLE</h4>
        <p className="projDesc"> Online Drawing Platform </p>
      </div>
    </BlurFade>
  );
}

export default Projects;
