import Image from "next/image";
import heroImg from "../../public/images/adfk.avif";
const MBADreams: React.FC = () => {
  const requiredField = [
    "A valid Email ID",
    "Scanned Photo",
    "Scanned Signature",
    "Personal & Educational Qualification Details",
    "Debit / Credit card, Net Banking or UPI",
  ];
  return (
    <>
      <section className="section-spacing bg-[var(--light-background-color)]">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-[50px] items-center grid-cols-1">
            <div className="item lg:order-1 order-2">
              <div className="conten-wrapper">
                <h2 className="primary-color">
                  MAT Turning MBA Dreams into Reality
                </h2>
                <p>
                  MAT is built around flexibility and choice, making it one of
                  the most candidate-friendly management entrance exams.
                </p>

                <strong className="text-black">
                  What You Require for Registration
                </strong>

                <div className="ui-list mt-5 flex flex-row flex-wrap gap-2.5">
                  {requiredField.map((data, index) => (
                    <span
                      key={index}
                      className="inline-block px-4 cursor-pointer py-2 transition-global bg-[var(--border-color)] primary-color hover:!text-white hover:bg-[var(--primary-color)] rounded "
                    >
                      {data}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="item lg:order-2 order-1">
              <Image
                src={heroImg}
                alt="Registration Process of MAT Exam"
                className="w-full h-full object-cover rounded-lg shadow"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MBADreams;
