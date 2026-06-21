const BSchoolNotification: React.FC = () => {
  return (
    <>
      <section className="section-spacing">
        <div className="max-w-6xl mx-auto">
          <div className="title-section lg:text-center  ">
            <h1 className="primary-color">Find Your Zone Notification</h1>
            <p>
              Select your region to view the latest B-School Notification.
              Whether you’re from the North, South, East, or West, or applying
              from abroad, simply click on your zone to download the relevant
              PDF. Stay updated with important dates, eligibility details, and
              announcements tailored to your area.
            </p>
          </div>

          <div className="button flex flex-row mt-10 flex-wrap gap-4 items-center justify-center">
            <a href="#" className="btn-primary">
              East
            </a>
            <a href="#" className="btn-primary">
              West
            </a>
            <a href="#" className="btn-primary">
              North
            </a>
            <a href="#" className="btn-primary">
              South
            </a>
            <a href="#" className="btn-primary">
              International
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default BSchoolNotification;
