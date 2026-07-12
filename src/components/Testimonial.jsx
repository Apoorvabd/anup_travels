// src/components/Testimonials.jsx

import { Star, Quote, ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    name: "Apoorv Chaturvedi",
    role: "Regular Traveler",
    image: "favicon.svg",
    review:
      "We booked a bus for our family trip, and the entire experience was smooth from booking to the destination. The bus was clean, comfortable, and the staff was very cooperative",
    featured: true,
  },
  {
    name: "Priya Sharma",
    role: "Business Traveler",
    image: "i2.jpg",
    review:
      "Professional drivers, punctual service, and well-maintained buses. Highly recommended for group travel and family tours",
  },
  {
    name: "AsianPaints Ltd",
    role: "Corporate Client",
    image: "i4.jpg",
    review:
      "Our Company hired Anoop Tour & Travels for a corporate outing. The journey was safe, comfortable, and everything was managed perfectly",
  },
  {
    name: "Aman Trivedi",
    role: "Tourist",
    image: "i1.png",
    review:
      "Excellent service with affordable pricing. The booking process was simple and the journey was enjoyable..",
  },
];

const Stars = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className="fill-amber-400 text-amber-400"
      />
    ))}
  </div>
);

export default function Testimonials() {
  const featured = testimonials.find((t) => t.featured);
  const others = testimonials.filter((t) => !t.featured);

  return (
    <section
      id="testimonials"
      className="relative object-cover  w-full bg-slate-800/20 py-28 "
    >
      {/* Background Glow */}

      <div className="absolute -top-32 left-0 w-80 h-80 bg-amber-200 blur-[130px] opacity-60 rounded-full" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 blur-[150px] opacity-70 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="mt-2 text-4xl lg:text-5xl font-bold text-neutral-300">
            Thousands Of Happy
            <span className="text-amber-500 lg:text-6xl"> Travelers</span>
          </h2>

          <p className="mt-6 text-lg text-neutral-600 leading-8">
            
          </p>

        </div>

        {/* Layout */}

        <div className="grid lg:grid-cols-5 gap-8 mt-20">

          {/* Featured Card */}

          <div className="lg:col-span-2">
            <div
              className="
              group
              relative
              h-full
              overflow-hidden
              rounded-[36px]
              bg-neutral-900
              p-10
              transition-all
              duration-700
              hover:-translate-y-3
              hover:shadow-[0_35px_80px_rgba(251,191,36,0.25)]
            "
            >
              {/* Glow */}

              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber-500/20 blur-[90px]" />

              <Quote
                size={60}
                className="text-amber-400 opacity-70"
              />

              <div className="mt-8">
                <Stars />
              </div>

              <p className="mt-8 text-lg leading-9 text-neutral-100">
                "{featured.review}"
              </p>

              <div className="mt-10 flex items-center gap-4">

                <img
                  src={featured.image}
                  alt={featured.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-amber-400"
                />

                <div>

                  <h4 className="text-white font-bold text-lg">
                    {featured.name}
                  </h4>

                  <p className="text-neutral-100">
                    {featured.role}
                  </p>

                </div>

              </div>

              <div
                className="
                absolute
                bottom-8
                right-8
                w-12
                h-12
                rounded-full
                bg-white/10
                backdrop-blur-lg
                flex
                items-center
                justify-center
                transition-all
                duration-500
                group-hover:bg-amber-500
                group-hover:rotate-45
              "
              >
                <ArrowUpRight className="text-white group-hover:text-black transition" />
              </div>

            </div>

          </div>

          {/* Small Cards */}

          <div className="lg:col-span-3 grid md:grid-cols-2 gap-8">

            {others.map((item, index) => (

              <div
                key={index}
                className="
                group
                rounded-[32px]
                border
                border-neutral-200
                bg-neutral-900/90
                backdrop-blur-xl
                p-8
                transition-all
                duration-700
                hover:-translate-y-3
                hover:shadow-2xl
                hover:border-amber-300
              "
              >

                <div className="flex justify-between items-start">

                  <img
                    src={item.image}
                    alt={item.name}
                    className=" w-16 h-16 rounded-full object-cover transition duration-500 group-hover:scale-110 "
                  />
                  <p className="text-white">{item.name}</p>

                  <Quote
                    size={36}
                    className="text-amber-300 opacity-60"
                  />

                </div>

                <div className="mt-6">
                  <Stars />
                </div>

<p className="mt-6 text-neutral-200 leading-8">
                  "{item.review}"
                </p>

<div className="mt-8 pt-6 border-t border-neutral-200">

                  <h4 className="font-bold text-lg text-neutral-900">
                    {item.name}
                  </h4>

<p className="text-yellow-100 font-semibold">
                    {item.role}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* Bottom Trust Strip */}

        <div
          className="
          mt-24
          rounded-[36px]
          bg-gradient-to-r
          from-amber-400
          via-yellow-400
          to-amber-300
          p-10
          lg:p-14
          shadow-2xl
        "
        >

          <div className="grid md:grid-cols-4 gap-8 text-center">

            <div>

              <h3 className="text-4xl font-bold text-black">
                12+
              </h3>

              <p className="mt-2 text-black/70">
                Years Experience
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold text-black">
                456+
              </h3>

              <p className="mt-2 text-black/70">
                Successful Trips
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold text-black">
                4000+
              </h3>

              <p className="mt-2 text-black/70">
                Happy Travelers
              </p>

            </div>

            <div>

              <h3 className="text-4xl font-bold text-black">
                4.9★
              </h3>

              <p className="mt-2 text-black/70">
                Average Rating
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}