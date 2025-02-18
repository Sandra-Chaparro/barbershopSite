import React from 'react';

export default function FAQ() {
  return (
    <div className="relative w-full bg-white px-6 pt-6 pb-8 mt-20 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-4xl sm:rounded-lg sm:px-10">
      <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
          <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">FAQ</h2>
          <p className="mt-3 text-xl text-[#0A1931] md:text-xl font-[700]">
            Frequently asked questions
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
          <FAQItem 
            question="Do I need an appointment, or do you accept walk-ins?"
            answer="We highly recommend booking an appointment to ensure your spot and minimize your wait time. However, if a barber has availability, we are happy to accommodate walk-ins on a first-come, first-served basis. To guarantee your preferred time, we encourage scheduling in advance through our online booking system."
          />
          <FAQItem 
            question="What payment methods do you accept?"
            answer="We accept cash, debit/credit cards, Applepay, and SamsungPay."
          />
          <FAQItem 
            question="How do I book an appointment?"
            answer={
              <>
                Select the service you are interested in from this link that takes you to the booking page:{" "}
                <a 
                  href="https://book.squareup.com/appointments/dfgljw70mpc8dx/location/9PV6DKFGH39H7/services" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "blue" }}
                >
                  Link to book appointment Page
                </a>.
              </>
            }
          />
          <FAQItem 
            question="Can I cancel or reschedule my appointment?"
            answer={
              <>
              Yes, you can contact the barber through message in the square appointment site where the appointment was created, call to the barbershop at: (469) 675-3183, or send a dm in IG: {" "} 
             <a
              href="https://www.instagram.com/mc.thebarber/"
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: "blue" }}
             >
                Link to IG
             </a>
              </>
            }
          />
          <FAQItem 
            question="What measures do you take to ensure cleanliness?"
            answer="We prioritize the health and safety of our clients and staff by maintaining the highest standards of cleanliness. All tools and equipment are sanitized and disinfected after each use, following industry guidelines. Our workstations are cleaned regularly throughout the day, and we use disposable or single-use items whenever possible, such as neck strips and blades."
          />
          <FAQItem 
            question="What happens if I'm late for my appointment?"
            answer="There is a grace period of 15 min, if the client doesnt arrive by that time you will need to reschedule and forfeit."
          />
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }) {
  return (
    <div className="py-5">
      <details className="group">
        <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
          <span className="text-[#0A1931] font-[600]">{question}</span>
          <span className="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        <p className="group-open:animate-fadeIn mt-3 text-[#0A1931]">{answer}</p>
      </details>
    </div>
  );
}
