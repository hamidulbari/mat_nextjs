const HeroSection: React.FC = () => {
  return (
    <>
      <section className="section-spacing text-white">
        <div className="relative max-w-6xl mx-auto rounded-xl bg-[url('/images/building.webp')] bg-cover bg-no-repeat h-[400px] lg:h-[600px] p-10">
          <div className="absolute top-0 left-0 w-full  rounded-xl h-full  bg-[#00000063]"></div>
          <div className="grid lg:grid-cols-2 grid-cols-1 relative z-[1221]">
            <div className="item">
              <div className="content-wrapper">
                <h1>
                  Participating <br /> B-Schools
                </h1>
                <p>
                  MAT scores are accepted by over 600 top and reputed B-Schools
                  across India, making it the most preferred entrance exam for
                  MBA and PGDM admissions.
                </p>
              </div>
            </div>
            <div className="item"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
