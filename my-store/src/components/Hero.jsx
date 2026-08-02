import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../styles/hero.css";

import ThreeScene from "./ThreeScene";

import { useNavigate } from "react-router-dom";

const slides = [
  {
    category: "Dishes",
    model: "/models/abc2f51773224d109f8f35ad433642fa.glb",
    title: "Discover Every Dish Worth Travelling For",
    description:
      "Explore iconic dishes from around the world.",
    button: "Explore Dishes",
    route: "/products?category=dishes",
  },

  {
    category: "Packaged Food",
    model: "/models/abc2f51773224d109f8f35ad433642fa.glb",
    title: "Every Snack Has A Personality",
    description:
      "Discover packaged foods loved by millions.",
    button: "Explore Packaged Food",
    route: "/products?category=packaged-food",
  },

  {
    category: "Drinks",
    model: "/models/monster.glb",
    title: "Find Your Perfect Sip",
    description:
      "Compare beverages from around the world.",
    button: "Explore Drinks",
    route: "/products?category=drinks",
  },

  {
    category: "Desserts",
    model: "/models/coca-cola.glb",
    title: "Life's Too Short To Skip Dessert",
    description:
      "Discover desserts with community reviews.",
    button: "Explore Desserts",
    route: "/products?category=desserts",
  },
];
export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={900}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <section className="hero">
              <div className="hero-left">
                <ThreeScene modelPath={slide.model} />
              </div>

              <div className="hero-right">
                <span className="hero-category">
                  {slide.category}
                </span>

                <h1>{slide.title}</h1>

                <p>{slide.description}</p>

                <button
                  className="hero-btn"
                  onClick={() => navigate(slide.route)}
                >
                  {slide.button}
                </button>

                <div className="craving-section">
                  <h3>🔥 I'm craving...</h3>

                  <div className="craving-grid">
                    <button>🌶 Spicy</button>

                    <button>🍫 Sweet</button>

                    <button>🥤 Refreshing</button>

                    <button>🧀 Cheesy</button>

                    <button>🥔 Crunchy</button>

                    <button>🍋 Tangy</button>

                    <button>🥩 Savoury</button>

                    <button>☕ Bitter</button>
                  </div>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}