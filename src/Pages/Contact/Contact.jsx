import React from "react";
import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";

import googleImg from "../../assets/contact/Rectangle 38.png";

// Reusable ContactInfo Component
const ContactInfo = ({ title, address, phone, email }) => (
  <div className="my-4 py-3">
    <h1 className="text-3xl font-lato font-medium text-success">{title}</h1>
    <p className="font-lato mt-4">{address}</p>
    <p className="font-lato mt-1">{phone}</p>
    <p className="font-lato mt-1">{email}</p>
    <button className="btn btn-success btn-hover mt-4 py-2 px-4 rounded-md text-white font-medium border-0">
      <span className="flex gap-2 items-center">
        <GoLocation /> View map
      </span>
    </button>
  </div>
);

// Reusable Contact Form Component
const ContactForm = () => (
  <form className="lg:w-[700px] w-full mt-8">
    <div className="md:flex gap-4 mt-4">
      <input
        className="w-full h-11 pl-3 rounded-md border border-gray-300 mb-3"
        type="text"
        placeholder="Your Name"
        required
      />
      <input
        className="w-full border border-gray-300 h-11 pl-3 rounded-md mb-3"
        type="email"
        placeholder="Your Email"
        required
      />
    </div>
    <div className="md:flex gap-4 mt-4">
      <input
        className="w-full h-11 pl-3 rounded-md border border-gray-300 mb-3"
        type="tel"
        placeholder="Your Phone"
        required
      />
      <input
        className="w-full border border-gray-300 h-11 pl-3 rounded-md mb-3"
        type="text"
        placeholder="Subject"
        required
      />
    </div>
    <textarea
      className="w-full h-32 pl-3 border border-gray-300 rounded-md mb-3"
      placeholder="Message"
      required
    ></textarea>
    <button
      type="submit"
      className=" p-3 px-4 bg-gray-800 hover:bg-success rounded-md text-white font-semibold ease-in duration-300"
    >
      Send Message
    </button>
  </form>
);

// Contact Section Component
const ContactDetailsSection = () => (
  <div className="mt-12">
    <h1 className="text-success font-lato">How can we help you?</h1>
    <div className="lg:flex lg:justify-between w-full mt-10 gap-8">
      <div>
        <h1 className="text-3xl font-lato">Let us know how</h1>
        <h1 className="text-3xl font-lato mt-3">we can help you</h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div>
        <h1 className="text-xl font-lato">01. Visit Feedback</h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <h1 className="text-success mt-4">03. Billing Inquiries</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div>
        <h1 className="text-xl font-lato">02. Employer Services</h1>
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <h1 className="text-success mt-4">04. General Inquiries</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
);

// Google Map Component
const GoogleMap = () => (
  <div className="mt-12">
    <img src={googleImg} alt="Google Map" className="w-full rounded-md" />
  </div>
);

// Main Contact Component
const Contact = () => {
  return (
    <div className="my-12 mx-8">
      {/* Contact Details Section */}
      <ContactDetailsSection />

      {/* Google Map */}
      <GoogleMap />

      {/* Office, Studio, and Shop */}
      <div className="mt-14 lg:flex w-full gap-24">
        <ContactInfo
          title="Office"
          address="205 North Michigan Avenue, Suite 810, Chicago, 60601, USA"
          phone="(123) 456-7890"
          email="contact@Evara.com"
        />
        <ContactInfo
          title="Studio"
          address="205 North Michigan Avenue, Suite 810, Chicago, 60601, USA"
          phone="(123) 456-7890"
          email="contact@Evara.com"
        />
        <ContactInfo
          title="Shop"
          address="205 North Michigan Avenue, Suite 810, Chicago, 60601, USA"
          phone="(123) 456-7890"
          email="contact@Evara.com"
        />
      </div>

      {/* Contact Form Section */}
      <div className="mt-16">
        <h1 className="text-2xl font-semibold text-success">Contact form</h1>
        <h1 className="lg:text-6xl text-4xl font-bold text-gray-900 mt-2">
          Drop Us a Line
        </h1>
        <p className="mt-3 text-gray-600 text-xl">
          Your email address will not be published. Required fields are marked *
        </p>

        <div className="lg:flex w-full gap-16 mt-8">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Image */}
          <div>
            <img
              className="w-[350px] h-[350px]"
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/contact-2.png"
              alt="Contact Us"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
