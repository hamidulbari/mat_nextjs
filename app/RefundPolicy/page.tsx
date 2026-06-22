const RefundPolicy: React.FC = () => {
  return (
    <>
      <section className="section-spacing">
        <div className="max-w-6xl  mx-auto">
          <div className="relative max-w-6xl mx-auto rounded-xl bg-[url('/images/afaafsdfas.webp')] bg-cover bg-no-repeat h-[150px] lg:h-[300px] p-10">
            <div className="absolute top-0 left-0 w-full  rounded-xl h-full  bg-[#00000063]"></div>
            <div className="content-wrapper text-white relative z-23">
              <h1>Refund Policy</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-[var(--light-background-color)]">
        <div className="max-w-6xl mx-auto">
          <div className="content-wrapper decription-content-details">
            <h2 className="primary-color">
              Secure and Flexible Payment Options
            </h2>
            <p>
              Candidates are required to pay a non-refundable registration fee
              of ₹ 2300/- (Rs Two Thousand Three Hundred only) either for PBT or
              CBT and ₹ 4000/- (Rs Four Thousand only) for both PBT & CBT. The
              fee once paid will not be refunded on any account nor would this
              fee be held in reserve for future exam/selection.
            </p>
            <ul>
              <li>
                The Fees once paid for MI Upgrade ₹ 118 (with taxes) per MI will
                not be refunded on any account nor would this fee be held in
                reserve for future exam/selection.
              </li>
              <li>
                In case of any applicant found to have paid more fee than
                prescribed, due to technical reason and on receiving the
                communication from the said applicant, the said extra payment,
                if found, shall be refunded to the same origin from which the
                payment is received.
              </li>
              <li>
                <strong>Note: </strong>Candidates who experience a deduction of
                the registration fee without the Registration Form being
                generated (failed registration) are required to apply again
                through the online registration portal before the last date of
                registration. Such candidates may submit a refund request for
                the failed transaction amount separately, as per the process
                detailed below.
              </li>
            </ul>
            <p>
              In case of any payment error due to network or connectivity
              issues, if your registration form is not generated and an amount
              of ₹2300/- or ₹4000/- has been debited from your account, the same
              will be refunded after reconciliation with the bank. Candidates
              are advised to reapply and promptly inform us about the failed
              registration by sending an email to mat@aima.in with the subject
              line “MAT REFUND”, mentioning the following details as specified
              below.
            </p>

            <ul>
              <li>
                <strong>Name of Candidate:</strong>
              </li>
              <li>
                <strong>Registered Email:</strong>
              </li>
              <li>
                <strong>Date of Birth:</strong>
              </li>
              <li>
                <strong>Name of Bank:</strong>
              </li>
              <li>
                <strong>A/C Holder Name:</strong>
              </li>
              <li>
                <strong>A/C Number:</strong>
              </li>
              <li>
                <strong>Debit or Credit Card No.:</strong>
              </li>
              <li>
                <strong>Transaction ID:</strong>
              </li>
              <li>
                <strong>Transaction Date:</strong>
              </li>
              <li>
                <strong>
                  Registration No. (if you re-register for MAT in the same
                  month):
                </strong>
              </li>
            </ul>

            <h2 className="primary-color">BO Clause:</h2>
            <p>
              We, as a merchant, shall be under no liability whatsoever in
              respect of any loss or damage arising directly or indirectly out
              of the decline of authorization for any Transaction, on Account of
              the Cardholder having exceeded the preset limit mutually agreed by
              us with our acquiring bank from time to time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;
