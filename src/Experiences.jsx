import BlurFade from "./components/BlurFade";

function Experiences() {
  return (
    <div className="my-96 flex flex-col">
      <h2 className="text-7xl font-bold my-16 text-left">Experience.</h2>
      <BlurFade delay={0.5} inView>
        <Work
          name="Activate"
          role="Frontend Software Engineer"
          date="May 2024 - Aug 2024"
        />
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <Work
          name="Iron Mountain"
          role="Computer Technician"
          date="May 2024 - Aug 2024"
        />
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <Work
          name="Tutor Doctor"
          role="Computer Science & Math Tutor"
          date="Dec 2023 - June 2024"
        />
      </BlurFade>
      <BlurFade delay={0.5} inView>
        <Work
          name="West-MEC"
          role="Electrical Apprentice"
          date="Aug 2022 - May 2023"
        />
      </BlurFade>
    </div>
  );
}

function Work({ name, role, date, description }) {
  return (
    <div className="flex justify-between my-12">
      <div className="flex flex-col text-left">
        <h5>{name}</h5>
        <p className="text-[#B4B4B4]">{role}</p>
      </div>

      <div>
        <p className="text-xl text-[#B4B4B4]">{date}</p>
      </div>
    </div>
  );
}

export default Experiences;