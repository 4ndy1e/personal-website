function Hobbies() {
  return (
    <section className="flex ">
      <div className="border-black w-[40%] pr-24 flex flex-col gap-24">
        <div>
          <p className="text-base font-normal font-['Inter'] text-[#b4b4b4] text-left">
            {" "}
            In my free time, I like to...{" "}
          </p>
          <br></br>
          <p className="activities"> Travel </p>
          <p className="activities"> Go to the gym </p>
          <p className="activities"> Visit the art museum </p>
          <p className="activities"> Watch cat videos </p>
        </div>
        <div>
          <p className="text-base font-normal font-['Inter'] text-[#b4b4b4] text-left">
            {" "}
            and of course...{" "}
          </p>
          <br></br>
          <p className="activities"> Design and develop :) </p>
        </div>
      </div>
      <Images />
    </section>
  );
}

function Images() {
  return (
    <div className="flex w-[60%] gap-8">
      <div className="w-7/10">
        <img src="vietnam.png" className="rounded-3xl" />
        <p className="imgCaption m-4"> Summer 2023 trip to Vietnam </p>
      </div>
      <div className="flex flex-col gap-8 w-3/10">
        <img src="hawaii.png" className="rounded-3xl" />
        <img src="lilypads.png" className="rounded-3xl w-2/3 h-1/3" />
      </div>
    </div>
  );
}

export default Hobbies;
