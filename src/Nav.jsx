function Nav() {
  return (
    <section className="fixed top-0 left-0 w-[100%] h-[57px] px-6 py-3 border-b border-[#606060] justify-between items-center flex bg-black z-[10]">
      <div className="text-white text-base font-normal font-['Inter'] leading-snug">
        Andy Le
      </div>
      <div className="h-[45px] justify-start items-center gap-[50px] flex">
        <div className="w-[30px] h-[45px] flex-col justify-center items-center inline-flex">
          <img
            className="w-[30px] h-[30px]"
            src="linkedin.png"
            alt="LinkedIn"
          />
        </div>
        <div className="w-[30px] h-[45px] flex-col justify-center items-center inline-flex">
          <img className="w-[30px] h-[30px]" src="mail.png" alt="Mail" />
        </div>
        <div className="w-[30px] h-[45px] flex-col justify-center items-center inline-flex">
          <img className="w-[30px] h-[30px]" src="insta.png" alt="Instagram" />
        </div>
      </div>
    </section>
  );
}

export default Nav;
