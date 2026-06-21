const RegisterSection: React.FC = () => {
  return (
    <>
      <section className="section-spacing bg-[var(--primary-color)] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-[50px] items-center grid-cols-1">
            <div className="item lg:order-1 order-2">
              <div className="conten-wrapper">
                <h2>New Candidate</h2>
                <p>
                  Create your account by registering with a valid email and
                  mobile number. Verify them with OTP to access dashboard.
                </p>

                <a href="#" className="btn-secondary">
                  Register Now
                </a>
              </div>
            </div>
            <div className="item lg:order-2 order-1">
              <div className="conten-wrapper">
                <h2>Existing Candidate</h2>
                <p>
                  Simply log in with your registered email and password to
                  continue your application or check your status.
                </p>

                <a href="#" className="btn-secondary">
                  Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default RegisterSection;
