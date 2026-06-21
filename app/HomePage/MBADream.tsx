import { ReactNode } from "react";
type Props = {
  children?: ReactNode;
};
const MBADream: React.FC<Props> = ({ children }) => {
  return (
    <>
      <section className="section-spacing bg-[var(--light-background-color)]">
        <div className="max-w-6xl mx-auto">
          <div className=" md:text-center md:mb-10 mb-15">
            <h2>MAT Turning MBA Dreams into Reality</h2>
            <p>
              MAT is built around flexibility and choice, making it one of the
              most candidate-friendly management entrance exams.
            </p>
          </div>
        </div>
        <div className="max-w-6xl mx-auto bg-[url('/images/mbadreambg.webp')] bg-cover bg-no-repeat rounded-lg bg-bottom lg:min-h-[500px] min-h-[400px] flex items-end p-5">
          {children}
        </div>
      </section>
    </>
  );
};

export default MBADream;
