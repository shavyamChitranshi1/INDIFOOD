import "../styles/SimilarFoods.css";

const foods = [
  {
    id: 1,
    name: "Lucknowi Biryani",
    rating: 4.8,
    image: "/images/lucknowi.png",
  },
  {
    id: 2,
    name: "Donne Biryani",
    rating: 4.7,
    image: "/images/donne.png",
  },
  {
    id: 3,
    name: "Ambur Biryani",
    rating: 4.6,
    image: "/images/ambur.png",
  },
  {
    id: 4,
    name: "Kolkata Biryani",
    rating: 4.8,
    image: "/images/kolkata.png",
  },
  {
    id: 5,
    name: "Malabar Biryani",
    rating: 4.7,
    image: "/images/malabar.png",
  },
];

export default function SimilarFoods() {
  return (
    <section className="similar-foods">

      <div className="similar-header">
        <div>
          <h2>Similar Foods</h2>
          <p>Discover dishes with a similar flavour profile.</p>
        </div>

        <button>View All →</button>
      </div>

      <div className="food-slider">

        {foods.map((food) => (

          <div className="food-card" key={food.id}>

            <div className="food-image">

              <img
                src={food.image}
                alt={food.name}
              />

            </div>

            <div className="food-info">

              <h3>{food.name}</h3>

              <span>⭐ {food.rating}</span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}