import {
  ShieldCheck,
  BusFront,
  Clock3,
  MapPinned,
  Headphones,
  BadgeIndianRupee,
} from "lucide-react";

const features = [
  {
    title: "Comfortable Coaches",
    description:
      "Well-maintained luxury buses with spacious seating and modern interiors.",
    icon: BusFront,
  },
  {
    title: "Safety First",
    description:
      "Experienced drivers and regularly inspected vehicles for a safe journey.",
    icon: ShieldCheck,
  },
  {
    title: "Always On Time",
    description:
      "We value your time with punctual departures and timely arrivals.",
    icon: Clock3,
  },
  {
    title: "Wide Route Network",
    description:
      "Serving multiple destinations with reliable travel solutions.",
    icon: MapPinned,
  },
  {
    title: "24×7 Support",
    description:
      "Friendly customer support available whenever you need assistance.",
    icon: Headphones,
  },
  {
    title: "Affordable Pricing",
    description:
      "Premium travel experience without premium pricing.",
    icon: BadgeIndianRupee,
  },
];

const Features = () => {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[6px] text-amber-500">

            WHY CHOOSE US

          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">

            Travel With Confidence

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">

            {/* TODO */}

            We combine comfort, reliability, and customer satisfaction to
            provide an exceptional travel experience for every passenger.

          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-amber-400 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 transition-all duration-300 group-hover:bg-amber-400">

                  <Icon
                    size={32}
                    className="text-amber-500 group-hover:text-black"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-semibold text-gray-900">

                  {item.title}

                </h3>

                <p className="mt-4 leading-8 text-gray-600">

                  {item.description}

                </p>

                <div className="mt-8 flex items-center font-semibold text-amber-500">

                  Learn More

                  <span className="ml-2 transition-all duration-300 group-hover:translate-x-2">

                    →

                  </span>

                </div>

              </div>

            );
          })}
        </div>

      </div>

    </section>
  );
};

export default Features;