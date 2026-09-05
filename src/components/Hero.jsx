import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroVideo from "../assets/maharaja/maharaja-hero.mp4";
import HeroOrnament from "./HeroOrnament";
export default function Hero() {
  return (
    <>
    <section className="relative h-[590px] overflow-hidden bg-[#173728] text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#0d2d20]/65" />

<HeroOrnament />

        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-6 lg:px-10 xl:px-12">
          <div className="max-w-[980px] lg:-translate-x-4">
            <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.38em] text-[#d8b35e]">
              The Home Of Indian Food · London
            </p>

            <h1 className="font-qasira text-[52px] font-normal leading-[1] tracking-[-0.015em] text-white md:text-[64px] lg:text-[72px]">
              Authentic Cuisine in{" "}
              <span className="text-[#d8b35e]">London</span>
            </h1>

            <p className="mt-8 max-w-[700px] text-base leading-8 text-white/85 lg:text-[18px]">
              Whether for a business lunch, a candlelit dinner, or a drink after
              a long day, Maharaja of India is here to meet you - with the
              warmth, the spice, and the welcome of home.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex h-[56px] items-center justify-center bg-[#d4af5c] px-8 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#173728]"
              >
                Book A Table
              </Link>

              <a
                href="https://www.maharajacharingcross.co.uk"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[56px] items-center justify-center border border-white/65 px-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-white"
              >
                Click & Collect
              </a>

              <Link
                to="/menu"
                className="inline-flex h-[56px] items-center justify-center gap-3 border border-white/65 px-8 text-[11px] font-semibold uppercase tracking-[0.22em] text-white"
              >
                See Our Menu
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center md:flex">
          <span className="mb-3 block h-10 w-px bg-[#d8b35e]/70" />

          <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-[#d8b35e]">
            Discover
          </p>
        </div>
      </section>

      <section className="bg-[#123524] text-white">
        <div className="mx-auto grid h-[80px] max-w-[980px] grid-cols-2 items-center md:grid-cols-4">
          <div className="px-5 text-center md:border-r md:border-[#d8b35e]/35">
            <p className="font-qasira text-[17px] leading-none text-[#d8b35e]">
              Since 1960
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/65">
              Serving The West End
            </p>
          </div>

          <div className="px-5 text-center md:border-r md:border-[#d8b35e]/35">
            <p className="font-qasira text-[17px] leading-none text-[#d8b35e]">
              Two Locations
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/65">
              Charing Cross & Soho
            </p>
          </div>

          <div className="px-5 text-center md:border-r md:border-[#d8b35e]/35">
            <p className="font-qasira text-[17px] leading-none text-[#d8b35e]">
              Pre-Theatre
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/65">
              Three Courses From £25
            </p>
          </div>

          <div className="px-5 text-center">
            <p className="font-qasira text-[17px] leading-none text-[#d8b35e]">
              Open Late
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.22em] text-white/65">
              Until 2AM In Soho
            </p>
          </div>
        </div>
      </section>
    </>
  );
}