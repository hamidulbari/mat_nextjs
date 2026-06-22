const Disclaimers: React.FC = () => {
  return (
    <>
      <section className="section-spacing">
        <div className="max-w-6xl  mx-auto">
          <div className="relative max-w-6xl mx-auto rounded-xl bg-[url('/images/afaafsdfas.webp')] bg-cover bg-no-repeat h-[150px] lg:h-[300px] p-10">
            <div className="absolute top-0 left-0 w-full  rounded-xl h-full  bg-[#00000063]"></div>
            <div className="content-wrapper text-white relative z-23">
              <h1>Disclaimer</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="section-spacing bg-[var(--light-background-color)]">
        <div className="max-w-6xl mx-auto">
          <div className="content-wrapper decription-content-details">
            <p>
              All the information on this website is published in good faith and
              for general information purpose only. www.aima.in does not make
              any warranties about the completeness, reliability and accuracy of
              this information. The information provided is for general
              information or educational purposes and is not substitute for
              professional advice. Any action you take upon the information you
              find on this website is strictly at your own risk. AIMA will not
              be liable for any losses and/or damages in connection with the use
              of our website.
            </p>

            <p>
              From our website, you can visit other websites by following
              hyperlinks to such external sites. While we strive to provide only
              quality links to useful and ethical websites, we have no control
              over the content and nature of these sites. These links to other
              websites do not imply a recommendation for all the content found
              on these sites. We don’t warrant, endorse, guarantee or assume
              responsibility for the accuracy or reliability of any information
              or product offered on such third party website, banner or
              advertising. Site owners and content may change without notice and
              may occur before we have the opportunity to remove a link which
              may have gone ‘bad’.
            </p>

            <p>
              The site may contain testimonials by users. These testimonials
              reflect the real life experiences and opinions of such users.
              However, the experience are personal and may not necessarily be
              representative of all user nor indicative of standard on the
              touchstone of best standards prevalent in the industry. Individual
              user may vary and we don’t represent that all users shall have
              same experiences.
            </p>
            <p>
              Please be also aware that when you leave our website, other sites
              may have different privacy policies and terms which are beyond our
              control. Please be sure to check the Privacy Policies of these
              sites as well as their “Terms of Service” before engaging in any
              business or uploading any information.
            </p>
            <h2 className="primary-color">Consent</h2>
            <p>
              By using our website, you hereby consent to our disclaimer and
              agree to its terms.
            </p>
            <h2 className="primary-color">Update</h2>
            <p>
              Whenever we update, amend or make any changes to this document,
              those changes will be prominently posted here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Disclaimers;
