import ThreeScene from "./ThreeScene";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="left">

        <ThreeScene />

      </div>

      <div className="right">

        <h1>
          Premium 3D Shopping Experience
        </h1>

        <p>

          Explore our collection of high-quality
          products in an immersive 3D environment.
          Rotate, zoom and inspect products before
          purchasing.

        </p>

        <button>
          Explore Products
        </button>

      </div>

    </section>
  );
}
  

export default Hero;