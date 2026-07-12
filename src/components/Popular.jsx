// src/components/PopularRoutes.jsx

import {
  ArrowRight,
  Clock3,
  MapPinned,
  Ticket,
} from "lucide-react";

const routes = [
  {
    from: "TODO: Origin City",
    to: "TODO: Destination City",
    duration: "TODO: Duration",
    price: "TODO: Starting Price",
    amenities: ["AC", "GPS", "Recliner"],
  },
  {
    from: "TODO: Origin City",
    to: "TODO: Destination City",
    duration: "TODO: Duration",
    price: "TODO: Starting Price",
    amenities: ["Sleeper", "Charging", "WiFi"],
  },
  {
    from: "TODO: Origin City",
    to: "TODO: Destination City",
    duration: "TODO: Duration",
    price: "TODO: Starting Price",
    amenities: ["Luxury", "GPS", "Water Bottle"],
  },
  {
    from: "TODO: Origin City",
    to: "TODO: Destination City",
    duration: "TODO: Duration",
    price: "TODO: Starting Price",
    amenities: ["AC", "Blanket", "Charging"],
  },
];

export default function PopularRoutes() {
  return (
    <section
      id="routes"
      className="bg-neutral-50 py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

          <div className="max-w-2xl">

            <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              Popular Routes
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-bold text-neutral-900">
              Explore Our Most
              <span className="text-amber-500"> Booked Routes</span>
            </h2>

            <p className="mt-6 text-lg text-neutral-600 leading-8">
              TODO: Replace this description with information
              about your frequently operated routes.
            </p>

          </div>

          <button className="self-start rounded-full border border-neutral-300 px-6 py-3 font-medium hover:bg-neutral-900 hover:text-white transition-all duration-300">
            View All Routes
          </button>

        </div>

        {/* Route Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {routes.map((route, index) => (

            <div
              key={index}
              className="group rounded-[32px] bg-white border border-neutral-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-8"
            >

              {/* Route */}

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-neutral-500">
                    From
                  </p>

                  <h3 className="text-2xl font-bold text-neutral-900">
                    {route.from}
                  </h3>

                </div>

                <ArrowRight
                  className="text-amber-500"
                  size={28}
                />

                <div className="text-right">

                  <p className="text-sm text-neutral-500">
                    To
                  </p>

                  <h3 className="text-2xl font-bold text-neutral-900">
                    {route.to}
                  </h3>

                </div>

              </div>

              {/* Divider */}

              <div className="my-8 border-t border-dashed border-neutral-300" />

              {/* Info */}

              <div className="grid grid-cols-2 gap-6">

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center">
                    <Clock3
                      size={22}
                      className="text-amber-600"
                    />
                  </div>

                  <div>

                    <p className="text-sm text-neutral-500">
                      Duration
                    </p>

                    <p className="font-semibold text-neutral-900">
                      {route.duration}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center">
                    <Ticket
                      size={22}
                      className="text-amber-600"
                    />
                  </div>

                  <div>

                    <p className="text-sm text-neutral-500">
                      Starting From
                    </p>

                    <p className="font-semibold text-neutral-900">
                      {route.price}
                    </p>

                  </div>

                </div>

              </div>

              {/* Amenities */}

              <div className="flex flex-wrap gap-3 mt-8">

                {route.amenities.map((item) => (

                  <span
                    key={item}
                    className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-700"
                  >
                    {item}
                  </span>

                ))}

              </div>

              {/* Footer */}

              <div className="flex items-center justify-between mt-10 pt-6 border-t border-neutral-200">

                <div className="flex items-center gap-2 text-neutral-600">

                  <MapPinned
                    size={18}
                    className="text-amber-500"
                  />

                  <span className="text-sm">
                    TODO: Route Availability
                  </span>

                </div>

                <button className="rounded-full bg-neutral-900 text-white px-5 py-3 hover:bg-amber-500 hover:text-black transition-all duration-300">
                  Book Now
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}