import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion, useReducedMotion } from "framer-motion";

// EmailJS config (public keys are safe for frontend usage)
const EMAILJS_SERVICE_ID = "service_omgk452";
const EMAILJS_TEMPLATE_ID = "template_7p52584";
const EMAILJS_PUBLIC_KEY = "Ytl72TKXvj-HQbJaa6";



const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;

  try {
    await emailjs.sendForm(
      "service_omgk452",
      "template_7p52584",
      form,
      "PhNcpRIVyw8NMcdVZ"
    );

    alert("✅ Inquiry Sent Successfully!");

    form.reset();

  } catch (error) {
    console.error("EmailJS Error:", error);

    alert(
      "❌ Failed to send inquiry. " +
      (error?.text || "Please try again.")
    );
  }
};
const ContactFooter = () => {
  const reduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const micro = reduceMotion
    ? {}
    : {
        y: [0, -6, 0],
        transition: { duration: 10, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
      };

  return (
    <motion.section
      id="contact"
      className="bg-slate-950 text-white pt-20"
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">
          <p className="text-orange-400 font-semibold tracking-widest uppercase">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let's Plan Your Next Journey
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Whether you're planning a family vacation, honeymoon, group trip,
            or solo adventure, we're here to help you create unforgettable
            travel experiences.
          </p>
        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left */}

          <div>

            <h3 className="text-3xl font-bold mb-8">
              Get In Touch
            </h3>

            <div className="space-y-8">

              <div className="flex gap-5">
                <div className="bg-orange-500 p-3 rounded-xl">
                  <MapPin size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Office Address
                  </h4>

                  <p className="text-gray-400">
                    Akbarpur, Kanpur Dehat,
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-orange-500 p-3 rounded-xl">
                  <Phone size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Phone
                  </h4>
                  <a
                    href="tel:+919415797892"
                    className="contact-link text-gray-400 hover:text-amber-400 transition-colors duration-200 relative group flex items-center gap-2"
                    title="Click to call"
                  >
                    <span>+91 9415797892</span>
                    <span className="opacity-0 group-hover:opacity-100 bg-amber-500 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded-full transition-opacity duration-300 ml-2 shadow-sm pointer-events-none">
                      Click to call
                    </span>
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-orange-500 p-3 rounded-xl">
                  <Mail size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Email
                  </h4>

                  <p className="text-gray-400">
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Subodhawasthi8008@gmail.com">
                      Subodhawasthi8008@gmail.com
                    </a>                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="bg-orange-500 p-3 rounded-xl">
                  <Clock size={22} />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Working Hours
                  </h4>

                  <p className="text-gray-400">
                    Monday - Sunday
                    <br />
                    9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Contact Form */}

          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl">

            <form className="space-y-6" onSubmit={handleSubmit}>

  <input
    type="text"
    name="name"
    placeholder="Your Name"
    className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-500"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-500"
    required
  />

  <input
    type="tel"
    name="phone"
    placeholder="Phone Number"
    className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-500"
    required
  />

  <input
    type="text"
    name="from"
    placeholder="Departure City"
    className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-500"
  />

  <input
    type="text"
    name="destination"
    placeholder="Destination"
    className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-500"
  />

  <input
    type="date"
    name="travel_date"
    className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-500"
  />

  <input
    type="number"
    name="travelers"
    placeholder="Number of Travelers"
    min="1"
    className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-500"
  />

  <textarea
    rows="5"
    name="message"
    placeholder="Your Message"
    className="w-full bg-slate-800 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-orange-500 resize-none"
  ></textarea>

  <button
    type="submit"
    className="flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 duration-300 px-8 py-4 rounded-xl font-semibold w-full"
  >
    Send Message
    <Send size={18} />
  </button>

</form>

          </div>

        </div>

        {/* Footer */}

        <div className="border-t border-slate-800 mt-20 py-10">

          <div className="grid md:grid-cols-4 gap-10">

            {/* Logo */}

            <div>

              <h3 className="text-2xl font-bold">
                Travel<span className="text-orange-500">.</span>
              </h3>

              <p className="text-gray-400 mt-5 leading-7">
                Explore breathtaking destinations with comfort,
                affordability and unforgettable experiences.
              </p>

            </div>

            {/* Links */}

            <div>

              <h4 className="font-semibold text-lg mb-5">
                Quick Links
              </h4>

              <ul className="space-y-3 text-gray-400">

                <li><a href="#">Home</a></li>
                <li><a href="#">Destinations</a></li>
                <li><a href="#">Packages</a></li>
                <li><a href="#">Testimonials</a></li>

              </ul>

            </div>

            {/* Services */}

            <div>

              <h4 className="font-semibold text-lg mb-5">
                Services
              </h4>

              <ul className="space-y-3 text-gray-400">

                <li>Holiday Packages</li>
                <li>Night Bookings</li>
                <li>Cab Services</li>
                <li>Daily Traveller</li>

              </ul>

            </div>

            {/* Social */}

            <div>

              <h4 className="font-semibold text-lg mb-5">
                Follow Us
              </h4>

              <div className="flex gap-4">

                <button className="bg-slate-800 hover:bg-orange-500 duration-300 p-3 rounded-full">
                  <FaFacebookF size={18} />
                </button>

                <button className="bg-slate-800 hover:bg-orange-500 duration-300 p-3 rounded-full">
                  <FaInstagram size={18} />
                </button>

                <button className="bg-slate-800 hover:bg-orange-500 duration-300 p-3 rounded-full">
                  <FaTwitter size={18} />
                </button>

              </div>

            </div>

          </div>

          <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">

            <p>
              © {new Date().getFullYear()} Travel. All Rights Reserved.
            </p>

            <div className="flex gap-6">

              <a href="#">Privacy Policy</a>

              <a href="#">Terms & Conditions</a>

            </div>

          </div>

        </div>

      </div>
    </motion.section  >
  );
};

export default ContactFooter;