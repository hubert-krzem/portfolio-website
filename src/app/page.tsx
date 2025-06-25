import PolaroidBlob from "@/components/PolaroidBlob";

export default function Home() {
  return (
    <div className="text-black font-bold">
      {/* Hero section*/}
      <section className="relative bg-[url('/dublin-map.png')] bg-cover bg-center min-h-screen">
        {/* Container for Hero items */}
        <div className="max-w-6xl mx-auto h-full flex flex-col justify-between pt-[145px] text-4xl">

          <p>Hi, I'm Hubert Krzemieniewski</p>

          {/* Container holding polaroid and label text */}
          <div className="pt-25 flex justify-between items-center">
            <img
            src="/polaroid-headshot.png"
            alt="Project preview"
            className="relative z-10 w-1/3 h-auto rotate-345 hover:rotate-360 transition-transform duration-300 ease-in-out"
          />

          {/* Changing element with different titles */}
          <p>
            Web Developer {/* Changing element showing different titles */}
            <br></br>
            @ UCD Dublin Ireland
          </p>

          </div>
        </div>

        {/* Map fade out gradient */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
      </section>
      
      {/* Contents section*/}
      <section className="max-w-6xl mx-auto space-y-4 mt-10">
        <div className="flex flex-row">
          <div className="space-y-4"> {/* New div to create a flex box to contain elements in line */}
            <p> {/* top text */}
              I'm a third year Computer Science student at University College Dublin, Ireland.
              <br></br>
              Currently building sites, and personal projects.
            </p>

            <ul>
              <li>Big fan of Python.</li>
              <li>Confident in Java.</li>
              <li>Learning React.</li>
              <li>New to UI design in Figma.</li>
            </ul>

            <ul className="space-y-4">
              <li className="underline">
                <a href="about">Learn more about me →</a>
              </li>
              <li className="underline">
                <a href="portfolio">Check out my portfolio →</a>
              </li>
              <li className="underline">
                <a href="/Hubert_Krzemieniewski_CV.pdf">See my resume →</a>
              </li>
              <li className="underline">
                <a href="contact">Reach out, lets chat →</a>
              </li>
            </ul>
          </div>
          <div>
            <PolaroidBlob />
          </div>
        </div>
        
      </section>
    </div>
  );
}
