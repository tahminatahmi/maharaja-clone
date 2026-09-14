import { ShoppingBag, ChefHat, Soup } from "lucide-react";

const features = [
  {
    icon: ShoppingBag,
    title: "Order Your Food",
    text: "Click & Collect from Charing Cross, or call ahead - your favourite dishes, ready when you are.",
  },
  {
    icon: ChefHat,
    title: "Finest Chefs Around",
    text: "A kitchen brigade with decades of regional Indian cooking between them, working together every service.",
  },
  {
    icon: Soup,
    title: "Delicious Recipes",
    text: "Family recipes, rare spices, and the same standards every plate. Authentic from the first bite to the last.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20 text-center lg:pt-20 lg:pb-24">
      <div className="site-container">
        <p className="text-[12px] font-semibold uppercase tracking-[0.38em] text-[#c9a451]">
          Our Promise
        </p>

        <h2 className="mt-5 font-qasira text-[42px] font-normal leading-none tracking-[-0.02em] text-[#173728] sm:text-[48px] lg:text-[50px]">
          Why Guests Come Back
        </h2>

        <div className="mt-14 grid gap-14 md:grid-cols-3 md:gap-8 lg:mt-14 lg:gap-14">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="mx-auto max-w-[420px]">
              <div className="mx-auto flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[#d2aa50] text-[#d2aa50]">
                <Icon size={28} strokeWidth={1.5} />
              </div>

              <h3 className="mt-6 font-qasira text-[24px] font-normal leading-none text-[#173728]">
                {title}
              </h3>

              <p className="mt-4 text-[18px] leading-[1.75] text-[#272421]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}