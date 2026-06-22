const TermsAndConditions: React.FC = () => {
  return (
    <>
      <section className="section-spacing">
        <div className="max-w-6xl  mx-auto">
          <div className="relative max-w-6xl mx-auto rounded-xl bg-[url('/images/afaafsdfas.webp')] bg-cover bg-no-repeat h-[150px] lg:h-[300px] p-10">
            <div className="absolute top-0 left-0 w-full  rounded-xl h-full  bg-[#00000063]"></div>
            <div className="content-wrapper text-white relative z-23">
              <h1>Terms & Conditions</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="section-spacing bg-[var(--light-background-color)]">
        <div className="max-w-6xl mx-auto">
          <div className="content-wrapper decription-content-details">
            <h2 className="primary-color">
              All payments are subject to the following conditions:
            </h2>
            <ul>
              <li>
                The descriptions of programmes are as available in the AIMA web
                portal.
              </li>
              <li>
                All Fees quoted are in Indian Rupees. AIMA reserves the right to
                change the fees as per government directions.
              </li>
              <li>
                AIMA is not responsible for any delay in receipt of fee payment
                due to incorrect account number or incorrect personal details.
                The AIMA also cannot accept liability if payment is refused or
                declined by the credit/ debit card supplier for any reason.
              </li>
              <li>
                In no event will the AIMA be liable for any damages whatsoever
                arising out of the use, inability to use, or the results of use
                of this site, any websites linked to this site, or the materials
                or information contained at any or all such sites, whether based
                on warranty, contract, tort or any other legal theory and
                whether or not advised of the possibility of such damages.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
export default TermsAndConditions;
