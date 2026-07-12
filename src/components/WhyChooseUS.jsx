// src/components/WhyChooseUs.jsx

import {
  ShieldCheck,
  Bus,
  Clock3,
  BadgeDollarSign,
  MapPinned,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    title: "Safe & Secure Journey",
    description:
      "TODO: Replace with safety information.",
    icon: ShieldCheck,
  },
  {
    title: "Luxury Coaches",
    description:
      "TODO: Replace with fleet details.",
    icon: Bus,
  },
  {
    title: "Always On Time",
    description:
      "TODO: Replace punctuality information.",
    icon: Clock3,
  },
  {
    title: "Affordable Pricing",
    description:
      "TODO: Replace pricing information.",
    icon: BadgeDollarSign,
  },
  {
    title: "GPS Tracking",
    description:
      "TODO: Replace GPS tracking details.",
    icon: MapPinned,
  },
  {
    title: "24×7 Customer Support",
    description:
      "TODO: Replace support details.",
    icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden py-28 bg-slate-800"
    >
      {/* Background Glow */}

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-amber-500/20 blur-[130px] rounded-full animate-pulse" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-yellow-300/10 blur-[170px] rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex rounded-full bg-amber-500/10 border border-amber-400/20 px-4 py-2 text-amber-400 text-sm font-semibold backdrop-blur-lg">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-5xl font-bold text-white leading-tight">

            Experience Premium
            <br />

            <span className="text-amber-400">
              Bus Transportation
            </span>

          </h2>


        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className={`
                group
                relative
                overflow-hidden
                rounded-[34px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                p-8
                transition-all
                duration-700
                hover:-translate-y-4
                hover:border-amber-400/50
                hover:shadow-[0_25px_60px_rgba(251,191,36,0.25)]
                ${index === 1 || index === 4 ? "lg:translate-y-12" : ""}
                `}
              >

                {/* Glow */}

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">

                  <div className="absolute -right-10 -top-10 w-44 h-44 bg-amber-400/20 rounded-full blur-3xl" />

                </div>

                {/* Icon */}

                <div className="
                    relative
                    w-16
                    h-16
                    rounded-2xl
                    bg-amber-500/10
                    border
                    border-amber-500/20
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-500
                    group-hover:bg-amber-500
                    group-hover:rotate-6
                    group-hover:scale-110
                ">

                  <Icon
                    size={30}
                    className="
                    text-amber-400
                    transition
                    duration-500
                    group-hover:text-black
                    "
                  />

                </div>

                {/* Content */}

                <h3 className="mt-8 text-2xl font-bold text-white">

                  {item.title}

                </h3>

                <p className="mt-5 text-neutral-400 leading-8">

                  {item.description}

                </p>

                {/* Bottom */}

                <div className="flex justify-between items-center mt-10">

                  <span className="text-sm tracking-widest text-neutral-500 uppercase">

                    Premium Service

                  </span>

                  <div
                    className="
                    w-12
                    h-12
                    rounded-full
                    bg-white/10
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-500
                    group-hover:bg-amber-500
                    group-hover:rotate-45
                  "
                  >

                    <ArrowUpRight
                      className="
                      text-white
                      group-hover:text-black
                      transition
                      "
                    />

                  </div>

                </div>

              </div>

            );

          })}

        </div>

        {/* Bottom Banner */}

        <div className="mt-28 rounded-[40px] overflow-hidden relative border border-white/10">

          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300" />

          <div className="relative z-10 p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-8">

            <div>

              <p className="uppercase tracking-[5px] text-black/70 text-sm font-semibold">

                Trusted Travel Partner

              </p>

              <h3 className="mt-4 text-4xl font-bold text-black">

                Ready For Your Next Journey?

              </h3>

              <p className="mt-5 max-w-2xl text-black/70 leading-8">

                TODO:
                Replace with booking message or
                company slogan.

              </p>

            </div>

            <button
              className="
              bg-black
              text-white
              rounded-full
              px-8
              py-4
              font-semibold
              transition-all
              duration-500
              hover:scale-110
              hover:rotate-2
              hover:shadow-2xl
              "
            >

              Book Your Trip

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}