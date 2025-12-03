"use client";

import Image from "next/image";
import { useState } from "react";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    contact: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      service: "",
      contact: "",
      message: "",
    });
  };

  const services = [
    "Crossing Rehabilitation",
    "Track Removal",
    "Maintenance Planning",
    "Rail Inspection",
    "Track Installation",
  ];

  const contactDetails = [
    {
      title: "Call Us 24/7",
      value: "+1 905 772-7272",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9018 2C17.8723 2 21.9018 6.02944 21.9018 11M13.9018 6C16.1109 6 17.9018 7.79086 17.9018 10M7.24671 16.7534C9.2507 18.7574 11.4084 20.0352 13.1772 20.8349C13.2655 20.8748 13.3097 20.8948 13.8132 21.0243C15.1391 21.3653 17.6373 20.9096 18.7574 20.1225C19.1827 19.8236 19.3657 19.6406 19.7317 19.2746C20.1073 18.899 20.2951 18.7112 20.415 18.5204C20.8238 17.8699 20.8238 17.0428 20.415 16.3923C20.2951 16.2015 20.1073 16.0137 19.7317 15.638L19.4638 15.3701C19.0953 15.0016 18.9111 14.8174 18.702 14.71C18.3935 14.5516 18.0397 14.5049 17.7007 14.5779C17.4709 14.6274 17.2452 14.7576 16.7938 15.0179L15.6928 15.6528C15.4607 15.7866 15.3447 15.8536 15.1765 15.8941C15.0549 15.9235 14.8453 15.9331 14.7216 15.915C14.5504 15.89 14.4584 15.8476 14.2742 15.7628C13.5274 15.419 12.2878 14.7069 10.9159 13.335C9.51376 11.9329 8.80085 10.6689 8.46591 9.928C8.38849 9.75675 8.34978 9.67112 8.32467 9.51017C8.30659 9.39425 8.31158 9.19573 8.33547 9.08087C8.36864 8.92139 8.42585 8.81011 8.54028 8.58755L9.1684 7.3659C9.43439 6.84854 9.56739 6.58987 9.60045 6.3268C9.63562 6.0469 9.59115 5.76275 9.47214 5.50698C9.36029 5.2666 9.15462 5.06092 8.74327 4.64958L8.36208 4.26839C7.98648 3.89278 7.79868 3.70498 7.60787 3.58509C6.95737 3.17636 6.13024 3.17636 5.47974 3.58509C5.28894 3.70498 5.10114 3.89278 4.72553 4.26839C4.35952 4.6344 4.17651 4.81741 3.87761 5.24275C3.0905 6.36287 2.63485 8.86107 2.97585 10.1869C3.10534 10.6904 3.12531 10.7346 3.16527 10.823C3.96491 12.5918 5.24272 14.7494 7.24671 16.7534Z" stroke="#16134A" strokeWidth="2" strokeLinecap="round" />
        </svg>

      ),
    },
    {
      title: "Send Us Mail",
      value: "jviolin@platinumtrack.ca",
      icon: (
        <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 2.5854L10.0076 9.20973C10.5746 9.71005 11.4254 9.71005 11.9924 9.20973L19.5 2.5854M4 17H18C19.6569 17 21 15.6569 21 14V4C21 2.34315 19.6569 1 18 1H4C2.34315 1 1 2.34315 1 4V14C1 15.6569 2.34315 17 4 17Z" stroke="#16134A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      ),
    },
    {
      title: "851 Haldimand",
      value: "Hwy#56 RR#1, York, ON N0A 1R0",
      icon: (
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.796 16C18.5617 16.4903 19 17.1056 19 17.7127C19 19.5537 14.9706 21 10 21C5.02944 21 1 19.5537 1 17.7127C1 17.1268 1.40819 16.5301 2.125 16.0517M17 8.15789C17 12.4791 13.1354 15.8125 11.1492 17.2403C10.8132 17.4819 10.6451 17.6027 10.3701 17.6727C10.167 17.7244 9.83297 17.7244 9.6299 17.6727C9.35488 17.6027 9.18685 17.4819 8.85078 17.2403C6.86456 15.8125 3 12.4791 3 8.15789C3 4.2047 6.13401 1 10 1C13.866 1 17 4.2047 17 8.15789ZM12 8C12 9.10457 11.1046 10 10 10C8.89543 10 8 9.10457 8 8C8 6.89543 8.89543 6 10 6C11.1046 6 12 6.89543 12 8Z" stroke="#16134A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

      ),
    },
  ];

  return (
    <>
    <section id="contact" className="relative py-36 overflow-hidden bg-white ">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/get-in-touch-bg.jpg"
          alt="Contact Background"
          fill
          className="object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/75 to-white/30 backdrop-blur" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTACT DETAILS */}
          <div className="space-y-10 mt-24">
            {contactDetails.map((detail, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className=" text-secondary mt-2">
                  {detail.icon}
                </div>
                <div>
                  <p className={`text-primary font-bold text-lg`}>
                    {detail.title}
                  </p>
                  <p className="text-secondary text-base  font-bold">
                    {detail.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT FORM + HEADINGS */}
          <div className="relative">
            {/* HEADER */}
            <div className="mb-10 text-right">
              <span className="inline-block py-1 bg-secondary px-3 text-sm md:text-lg font-semibold text-white mb-4">
                Let's Work Together
              </span>

              <p className="text-4xl md:text-5xl lg:text-7xl leading-15 font-black text-primary mb-4">
                GET IN TOUCH
              </p>

              <p className="text-lg md:text-2xl leading-7 font-semibold text-secondary capitalize">
                Welcome To Platinum Track Services! We're Eager To Assist You With Your Railway Needs.
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-sm font-semibold px-3">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border border-secondary rounded-full px-4 py-2 w-full bg-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-semibold px-3">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border border-secondary rounded-full px-4 py-2 w-full bg-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />

                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="text-sm font-semibold px-3">Services</label>
                  <select
                    name="service"
                    id="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="border border-secondary rounded-full px-4 py-2 w-full bg-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact" className="text-sm font-semibold px-3">Contact</label>
                  <input
                    type="tel"
                    name="contact"
                    placeholder="Contact Number"
                    value={formData.contact}
                    onChange={handleChange}
                    className="border border-secondary rounded-full px-4 py-2 w-full bg-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="text-sm font-semibold px-3">Message</label>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full border border-secondary rounded-2xl px-4 py-2 bg-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center space-x-2 bg-transparent border border-secondary shadow px-6 py-2 rounded-full text-secondary hover:bg-secondary hover:text-white transition"
                >
                  <span className="text-secondary font-semibold hover:text-white">
                    Send Message
                  </span>
                  <svg
                    width="21"
                    height="21"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 21 21"
                  >
                    <path d="M14.4785 10.4999L10.2094 14.769M14.4785 10.4999L10.2094 6.23082M14.4785 10.4999L6.99907 10.5M0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.5 16.0228 0.5 10.5Z" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <style jsx global>{`
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      textarea:-webkit-autofill,
      textarea:-webkit-autofill:hover,
      textarea:-webkit-autofill:focus,
      select:-webkit-autofill,
      select:-webkit-autofill:hover,
      select:-webkit-autofill:focus {
        -webkit-box-shadow: 0 0 0 1000px transparent inset !important;
        box-shadow: 0 0 0 1000px transparent inset !important;
        -webkit-text-fill-color: inherit !important;
        background-color: transparent !important;
        caret-color: inherit;
        transition: background-color 5000s ease-in-out 0s;
      }
    `}</style>
    </>
  );
}
