import ThreeScene from "./ThreeScene";
import "../styles/hero.css";
import { div } from "three/src/nodes/math/OperatorNode.js";
import 'react-multi-carousel/lib/styles.css';

import CarouselModule from "react-multi-carousel";

const Carousel = CarouselModule.default;
function Hero() {
  console.log(Carousel);
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
  return (
    <div>
   <Carousel responsive={responsive}>
  <div>
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
  </div>
  <div>
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
  </div>
  <div>
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
  </div>
  <div>Item 4</div>
</Carousel>
</div>
  );
}
  

export default Hero;