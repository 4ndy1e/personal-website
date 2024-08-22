function Education() {
  return (
    <section className="w-full flex flex-col gap-8 ">
      <div className="flex bg gap-24 items-center">
        <img src="westCampus.jpeg" className="rounded-3xl w-1/2" />
        <div className="w-1/2 px-8">
          <div className="mb-36">
            <p className="aboutSect"> Arizona State University</p>
            <p className="text-left text-black text-sm font-bold font-['Inter']">
              Ira A. Fulton Schools of Engineering
            </p>
          </div>
          <p className="text-left text-[#b4b4b4]">
            I am currently an undergraduate student at ASU pursing a{" "}
            <span className="text-black">
              Bachelors of Science in Computer Science - Software Engineering
            </span>{" "}
            averaging a <span className="text-black">4.15 GPA</span>.
          </p>
        </div>
      </div>
      <div className="flex w-full gap-8 box-border">
        <img src="asu2023.jpeg" className="w-1/3 rounded-3xl" />
        <img src="oldmain.jpg" className="w-2/5 rounded-3xl" />
      </div>
    </section>
  );
}

export default Education;
