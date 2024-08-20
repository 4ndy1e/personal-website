function Nav() {
  return (
    <section className="fixed top-0 left-0 w-full h-[57px] px-6 py-3 border-b border-[#606060] justify-between items-center flex bg-black z-[10]">
      <div className="text-white text-base font-normal font-['Inter'] leading-snug">
        <img src="4L.png" className="h-[50px] apsect-square" />
      </div>
      <div className="h-[45px] justify-start items-center gap-[50px] flex">
        <div className="w-[30px] h-[45px] flex-col justify-center items-center inline-flex">
          <a href="home">
            <img className="w-[30px] h-[30px]" src="work.png" alt="Work" />
          </a>
        </div>
        <div className="w-[30px] h-[45px] flex-col justify-center items-center inline-flex">
          <a href="about">
            <img className="w-[30px] h-[30px]" src="profile.png" alt="About" />
          </a>
        </div>
        <div className="w-[30px] h-[45px] flex-col justify-center items-center inline-flex">
          <a href="https://www.linkedin.com/in/4ndyle/" target="_blank">
            <img
              className="w-[30px] h-[30px]"
              src="linkedin.png"
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Nav;
