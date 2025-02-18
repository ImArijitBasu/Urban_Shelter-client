import React from "react";
import Title from "../../Components/Title";
import ContactSupport from "../../Shared/ContactSupport";

const Support = () => {
  return (
    <div>
      <Title heading={"connect with us"}></Title>
      <div className="container mx-auto py-10">
        <p className="text-accent capitalize text-xl my-3 font-bold">frequently asked questions</p>
        <div className="space-y-2">
          {/* accordion */}
          <div className="collapse collapse-arrow bg-primary dark:bg-primary-light text-neutral-white">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              How do I book an apartment?
            </div>
            <div className="collapse-content">
              <p>
                To book an apartment, you need to first sign up and log in. Once
                logged in, you can browse available apartments and proceed with
                booking.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-primary dark:bg-primary-light text-neutral-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What are the payment methods available?
            </div>
            <div className="collapse-content">
              <p>
                We accept payments through bank transfer, credit/debit cards,
                and online payment systems like PayPal.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-primary dark:bg-primary-light text-neutral-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How can I cancel my booking?
            </div>
            <div className="collapse-content">
              <p>
                To cancel your booking, log into your account, go to your
                booking history, and click on the 'Cancel' option next to the
                relevant booking.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-primary dark:bg-primary-light text-neutral-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What if I have an issue with the apartment?
            </div>
            <div className="collapse-content">
              <p>
                If you're facing any issues with the apartment, contact our
                support team via the support page, and we will assist you in
                resolving the matter as soon as possible.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-primary dark:bg-primary-light text-neutral-white">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Is there a late fee for rent payments?
            </div>
            <div className="collapse-content">
              <p>
                Yes, a late fee will be charged if the rent is not paid by the
                due date. The fee depends on the apartment agreement terms.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <ContactSupport></ContactSupport>
      </div>
    </div>
  );
};

export default Support;
