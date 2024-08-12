function Experiences() {
  return (
    <div className="mt-64 flex flex-col">
      <h2 className="text-7xl font-bold my-16 text-left">Experience.</h2>
      <Work
        name="Activate"
        role="Frontend Software Engineer"
        date="May 2024 - Aug 2024"
      />
      <Work
        name="Iron Mountain"
        role="Computer Technician"
        date="May 2024 - Aug 2024"
      />
      <Work
        name="Tutor Doctor"
        role="Computer Science & Math Tutor"
        date="Dec 2023 - June 2024"
      />
      <Work
        name="West-MEC"
        role="Electrical Apprentice"
        date="Aug 2022 - May 2023"
      />
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
