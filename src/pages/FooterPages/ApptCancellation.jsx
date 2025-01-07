import React from "react";

const ApptCancellation = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-10 md:px-8 lg:px-12 py-4 mt-20 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Appointment Cancellation Policy</h1>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">1. Appointment Changes or Cancellations</h2>
        <p className="mb-4">
          We kindly ask for at least <strong>24 hours' notice</strong> if you need to cancel or reschedule your appointment. 
          Cancellations made less than 24 hours before the appointment time may result in a <strong> cancellation fee</strong> 
          equivalent to 50% of the service cost.
        </p>
        <hr className="border-t border-gray-300 mb-6" />
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">2. No-Show Policy</h2>
        <p className="mb-4">
          If you fail to show up for your appointment without prior notice, this will be considered a <strong>no-show</strong>.
          No-shows will be charged <strong>100% of the service cost</strong> and may require prepayment for future bookings.
        </p>
        <hr className="border-t border-gray-300 mb-6" />
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">3. Late Arrivals</h2>
        <p className="mb-4">
          We allow a <strong>15-minute grace period</strong> for late arrivals. If you arrive beyond the grace period, we may need
          to reschedule your appointment, and a cancellation fee may apply. Please note that arriving late may reduce the time 
          available for your service, but the full service price will still apply.
        </p>
        <hr className="border-t border-gray-300 mb-6" />
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">4. How to Cancel or Reschedule</h2>
        <p className="mb-4">
          <strong>Online:</strong> Cancel or reschedule your appointment through our booking platform. <br />
          <strong>Instagram:</strong> Send a dm to the mc.thebarbe IG account<br />
        </p>
        <hr className="border-t border-gray-300 mb-6" />
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">5. Emergency Situations</h2>
        <p className="mb-4">
          We understand that emergencies happen. If you have an unavoidable reason for canceling or rescheduling within the 
          24-hour window, please contact us as soon as possible. Exceptions to the policy may be made at management's discretion.
        </p>
        <hr className="border-t border-gray-300 mb-6" />
      </div>
      
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-2">6. Why This Policy Is Important</h2>
        <p>
          Our barbers dedicate time to each appointment to provide you with the best experience. Late cancellations or no-shows 
          prevent us from filling the slot with another client. This policy ensures fairness to both our barbers and our valued 
          clients.
        </p>
      </div>
      
      <p className="mt-6">
        Thank you for your understanding and cooperation! If you have any questions about our cancellation policy, feel free to 
        contact us.
      </p>
   
    </div>
 
  );
};

export default ApptCancellation;
