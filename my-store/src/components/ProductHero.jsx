import "../styles/ProductHero.css";

export default function ProductHero() {
  const product = {
    company: "Lay's",
    name: "Magic Masala",
    rating: 4.8,
    reviews: 12843,
    category: "Packaged Snack",
    origin: "India",
    price: "₹20",
    veg: true,

    info: {
      company: "Lay's",
      origin: "India",
      introduced: "1995",
    },

    nutrition: [
      { title: "Calories", value: "160 kcal" },
      { title: "Protein", value: "2 g" },
      { title: "Carbs", value: "15 g" },
      { title: "Fat", value: "10 g" },
      { title: "Sugar", value: "1 g" },
      { title: "Sodium", value: "170 mg" },
      { title: "Serving", value: "30 g" },
    ],
  };

  return (
    <section className="product-details">

      <div className="header">

        <div>

          <p className="company">{product.company}</p>

          <h1>{product.name}</h1>

        </div>

        <div className="rating">

          <h2>⭐ {product.rating}</h2>

          <p>{product.reviews.toLocaleString()} Reviews</p>

        </div>

      </div>

      <div className="badges">

        <span>{product.category}</span>

        <span>🇮🇳 {product.origin}</span>

        <span>{product.price}</span>

        <span>{product.veg ? "🟢 Vegetarian" : "🔴 Non Vegetarian"}</span>

      </div>

      <div className="info-grid">

        <div className="info-card">
          <h4>Company</h4>
          <p>{product.info.company}</p>
        </div>

        <div className="info-card">
          <h4>Origin</h4>
          <p>{product.info.origin}</p>
        </div>

        <div className="info-card">
          <h4>Introduced</h4>
          <p>{product.info.introduced}</p>
        </div>

      </div>

      <div className="nutrition">

        <h3>Nutrition Facts</h3>

        <div className="nutrition-grid">

          {product.nutrition.map((item) => (

            <div className="nutrition-card" key={item.title}>

              <h2>{item.value}</h2>

              <p>{item.title}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}