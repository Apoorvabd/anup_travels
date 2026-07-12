// src/components/FleetGallery.jsx

import { ArrowUpRight } from "lucide-react";

const filters = [
  "All",
  "Luxury Coaches",
  "Sleeper",
  "Mini Bus",
  "Tempo Traveller",
];

const fleet = [
  {
    title: "Luxury Coach",
    category: "Premium",
    image: "/images/fleet-1.jpg",
    large: true,
  },
  {
    title: "Sleeper Bus",
    category: "Sleeper",
    image: "/images/fleet-2.jpg",
  },
  {
    title: "Tourist Coach",
    category: "Luxury",
    image: "/images/fleet-3.jpg",
  },
  {
    title: "Tempo Traveller",
    category: "Traveller",
    image: "/images/fleet-4.jpg",
    large: true,
  },
  {
    title: "Mini Bus",
    category: "Mini",
    image: "/images/fleet-5.jpg",
  },
  {
    title: "Executive Coach",
    category: "Premium",
    image: "/images/fleet-6.jpg",
  },
];

export default function FleetGallery() {
  return (
    <section
      id="fleet"
      className="py-24 lg:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold">
            Our Fleet
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-neutral-900">
            Travel In Comfort &
            <span className="text-amber-500"> Style</span>
          </h2>

          <p className="mt-6 text-lg text-neutral-600 leading-8">
            TODO: Replace this description with details about
            your luxury buses, amenities and transportation
            services.
          </p>

        </div>

        {/* Filters */}

        <div className="flex flex-wrap justify-center gap-4 mt-14">

          {filters.map((item, index) => (

            <button
              key={item}
              className={`rounded-full px-6 py-3 transition-all duration-300 font-medium ${
                index === 0
                  ? "bg-amber-500 text-black"
                  : "bg-neutral-100 hover:bg-neutral-900 hover:text-white"
              }`}
            >
              {item}
            </button>

          ))}

        </div>

        {/* Gallery */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {fleet.map((item, index) => (

            <div
              key={index}
              className={`group relative overflow-hidden rounded-[32px] shadow-xl ${
                item.large ? "lg:row-span-2" : ""
              }`}
            >

              <img
                src={item.image}
                alt={item.title}
                className={`w-full object-cover transition duration-700 group-hover:scale-110 ${
                  item.large ? "h-[700px]" : "h-[340px]"
                }`}
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100" />

              {/* Content */}

              <div className="absolute bottom-0 left-0 right-0 p-8">

                <span className="inline-flex rounded-full bg-white/20 backdrop-blur-lg px-4 py-2 text-white text-sm">
                  {item.category}
                </span>

                <div className="flex items-end justify-between mt-5">

                  <div>

                    <h3 className="text-3xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="text-white/80 mt-2">
                      TODO: Replace fleet details.
                    </p>

                  </div>

                  <div className="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">

                    <ArrowUpRight className="text-black" />

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}