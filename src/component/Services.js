import React from 'react';

const Services = () => {
  return (
    <section className="services-section">
      <h2>Our Services</h2>
      <div className="service">
        <img src="data:image/png;base64,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" alt="Money Transfer Icon" />
        <h3>Individual Money Transfers</h3>
        <p>Secure and fast money transfers for individuals.</p>
      </div>
      <div className="service">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHBvhsUAOw-48X0EVF8hFmFgEqc05AlO0dnw&usqp=CAU" alt="Business Payments Icon" />
        <h3>Business Payments</h3>
        <p>Simplify cross-border payments for businesses.</p>
      </div>
      <div className="service">
        <img src="https://cdn1.iconfinder.com/data/icons/online-services-filledoultline/64/track-online_tracking-online_payment-business_and_finance-commerce_and_shopping-512.png" alt="Payment Tracking Icon" />
        <h3>Real-Time Payment Tracking</h3>
        <p>Track your payments in real-time for peace of mind.</p>
      </div>
    </section>
  );
};

export default Services;