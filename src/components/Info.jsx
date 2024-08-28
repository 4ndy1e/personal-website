function Info() {
  return (
    <section className="flex items-center">
      <div className="border-black w-[40%] pr-24">
        <p className="aboutSect text-[#b4b4b4]"> Info. </p>
        <br></br>
        <p className="aboutDesc">
          I am currently a undergraduate student with a passion for
          <strong> design and software development</strong>.
        </p>
        <br></br>
        <p className="aboutDesc">
          With both of these passions, I gained experience being a{" "}
          <strong>UI/UX designer and web developer</strong>! I enjoy the process
          of mapping all of my designs and ideas onto various design interfaces
          and translating these designs into a website through code. The process
          of troubleshooting, adjusting, and implementing designs into scalable
          and usable applications is astounding to me.
        </p>
        <br></br>
        <p className="aboutDesc">
          The biggest reason why I am pursing a career in tech is because of the
          evolving architecture. I love being able to constantly improve and
          evolve day by day. There’s always so much do learn and do, with
          endless opportunities to grow!
        </p>
      </div>
      <Images />
    </section>
  );
}

function Images() {
  return (
    <div className="flex w-[60%] items-center gap-8">
      <div className="w-3/5">
        <img src="snow1.jpg" className="rounded-3xl"></img>
        <p className="imgCaption m-4"> Snow in Northern Arizona</p>
      </div>
      <div className="flex flex-col gap-8 w-2/5">
        <img src="snow2.jpg" className="rounded-3xl" />
        <img src="snow3.jpg" className="rounded-3xl" />
      </div>
    </div>
  );
}

export default Info;
