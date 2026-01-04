import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation, Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/mousewheel";

const Banner = () => {
  const [loading, setLoading] = useState(true);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        // public folder JSON (Vite): use absolute path like /banner.json [web:108]
        const res = await fetch("/bannerData.json");
        const json = await res.json();
        setSlides(json || []);
      } catch (e) {
        console.error(e);
        setSlides([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!slides.length) return <p>No slides found</p>;

  return (
    <section className="w-[92vw] sm:w-[88vw] lg:w-[80vw] mx-auto mt-5 lg:mt-10">
      {/* Max height 60–70% of screen (responsive) */}
      <div className="relative overflow-hidden rounded-2xl h-[60vh] md:h-[65vh] lg:h-[70vh]">
        <Swiper
          modules={[Mousewheel, Pagination, Navigation, Autoplay, A11y]}
          // Mousewheel control (module + option) [web:132]
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          // Interactive controls
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={slides.length > 1}
          className="h-full"
        >
          {slides.map((s) => (
            <SwiperSlide key={s.id}>
              <div className="relative w-full h-full">
                <img
                  src={s.imageSrc}
                  alt={s.altText || "Banner"}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-transparent" />

                {/* CTA + text */}
                <div className="absolute inset-0 flex items-center">
                  <div className="px-4 sm:px-10 max-w-xl text-white">
                    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                      {s.title || "Manage bills smarter"}
                    </h1>
                    <p className="mt-3 text-sm sm:text-base lg:text-lg opacity-90">
                      {s.subtitle || "Track, add, and review bills quickly with a clean dashboard."}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <a href={s.primaryHref || "/bills/all-bills"} className="btn btn-primary">
                        {s.primaryCta || "Explore bills"}
                      </a>
                      <a href={s.secondaryHref || "/bills/add-bills"} className="btn btn-outline text-white border-white/70 hover:bg-white hover:text-black">
                        {s.secondaryCta || "Add a bill"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Visual hint to next section (scroll down) */}
        <a
          href="#next-section"
          className="absolute left-1/2 -translate-x-1/2 bottom-3 sm:bottom-5 btn btn-circle btn-ghost bg-black/30 hover:bg-black/40 text-white border border-white/20"
          aria-label="Scroll to next section"
          title="Scroll"
        >
          ↓
        </a>
      </div>
    </section>
  );
};

export default Banner;
