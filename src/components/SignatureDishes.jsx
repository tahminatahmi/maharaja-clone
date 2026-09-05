import tandooriImg from "../assets/maharaja/photography/june-43.avif";
import butterChickenImg from "../assets/maharaja/photography/june-17-butter.webp";
import roganJoshImg from "../assets/maharaja/photography/june-58.webp";

const dishes = [
  {
    title: "Tandoori Mixed Grill",
    region: "Punjab",
    description:
      "Marinated overnight, fired in the clay oven - chicken tikka, seekh kebab, lamb chop. Smoke-kissed and aromatic.",
    image: tandooriImg,
  },
  {
    title: "Butter Chicken",
    region: "Delhi",
    description:
      "Slow-cooked in a tomato cream sauce with fenugreek and a whisper of cardamom. The dish that defined a generation.",
    image: butterChickenImg,
  },
  {
    title: "Lamb Rogan Josh",
    region: "Kashmir",
    description:
      "Tender lamb shoulder, braised low and slow in Kashmiri chillies, ginger, and yoghurt. A Mughal-era classic.",
    image: roganJoshImg,
  },
];

export default function SignatureDishes() {
  return (
    <section className="relative overflow-hidden bg-[#08271b] px-6 py-24 text-white lg:py-28">
      {/* Faded background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: `url(${tandooriImg})`,
        }}
      />

      {/* Strong dark green overlay */}
      <div className="absolute inset-0 bg-[#08271b]/92" />

      <div className="relative z-10 mx-auto max-w-[1260px] text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.38em] text-[#d5b15f]">
          Signature Dishes
        </p>

        <h2 className="mt-5 font-qasira text-[42px] font-normal leading-none tracking-[-0.02em] text-[#f5efe7] sm:text-[48px] lg:text-[52px]">
          Crafted in Our Kitchens
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {dishes.map((dish) => (
            <article
              key={dish.title}
              className="overflow-hidden rounded-[8px] border border-[#c9a451]/55 bg-[#102b1d]/95"
            >
              <img
                src={dish.image}
                alt={dish.title}
                className="h-[290px] w-full object-cover"
              />

              <div className="px-8 py-8 text-center">
                <h3 className="font-qasira text-[25px] font-normal leading-none text-[#f5efe7]">
                  {dish.title}
                </h3>

                <p className="mt-4 text-[12px] font-medium uppercase tracking-[0.28em] text-[#d5b15f]">
                  {dish.region}
                </p>

                <p className="mt-7 text-[18px] leading-[1.75] text-white/75">
                  {dish.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}