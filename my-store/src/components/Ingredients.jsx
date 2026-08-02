import "../styles/Ingredients.css";

export default function Ingredients() {
  const ingredients = {
    top: [
      { icon: "🟡", name: "Saffron" },
      { icon: "🧅", name: "Fried Onion" },
      { icon: "🌿", name: "Mint" },
    ],

    heart: [
      { icon: "🍗", name: "Chicken" },
      { icon: "🍚", name: "Basmati Rice" },
      { icon: "🥣", name: "Yogurt" },
    ],

    base: [
      { icon: "🌿", name: "Cardamom" },
      { icon: "🪵", name: "Cinnamon" },
      { icon: "🌱", name: "Cloves" },
    ],
  };

  return (
    <section className="ingredients-section">

      <div className="ingredients-header">
        <h2>Ingredients</h2>
        <p>The flavour profile that defines this dish.</p>
      </div>

      <div className="ingredients-grid">

        <div className="ingredient-card">

          <h3>Top Notes</h3>

          <div className="ingredient-list">

            {ingredients.top.map((item) => (
              <div className="ingredient-chip" key={item.name}>
                <span>{item.icon}</span>
                <p>{item.name}</p>
              </div>
            ))}

          </div>

        </div>

        <div className="ingredient-card">

          <h3>Heart Notes</h3>

          <div className="ingredient-list">

            {ingredients.heart.map((item) => (
              <div className="ingredient-chip" key={item.name}>
                <span>{item.icon}</span>
                <p>{item.name}</p>
              </div>
            ))}

          </div>

        </div>

        <div className="ingredient-card">

          <h3>Base Notes</h3>

          <div className="ingredient-list">

            {ingredients.base.map((item) => (
              <div className="ingredient-chip" key={item.name}>
                <span>{item.icon}</span>
                <p>{item.name}</p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}