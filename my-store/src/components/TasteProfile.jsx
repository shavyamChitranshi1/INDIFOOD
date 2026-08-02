import "../styles/TasteProfile.css";

const profile = [
  {
    title: "Spiciness",
    value: 8,
    emoji: "🌶️",
  },
  {
    title: "Sweetness",
    value: 2,
    emoji: "🍯",
  },
  {
    title: "Tanginess",
    value: 4,
    emoji: "🍋",
  },
  {
    title: "Creaminess",
    value: 6,
    emoji: "🥛",
  },
  {
    title: "Richness",
    value: 9,
    emoji: "🍖",
  },
  {
    title: "Smokiness",
    value: 5,
    emoji: "🔥",
  },
];

export default function TasteProfile() {

  return (

    <section className="taste-profile">

      <div className="taste-header">

        <h2>Taste Profile</h2>

        <p>
          Community rated flavour intensity.
        </p>

      </div>

      <div className="taste-list">

        {profile.map((item) => (

          <div
            className="taste-item"
            key={item.title}
          >

            <div className="taste-title">

              <span>{item.emoji}</span>

              <p>{item.title}</p>

            </div>

            <div className="bar">

              <div
                className="fill"
                style={{
                  width: `${item.value * 10}%`,
                }}
              />

            </div>

            <span className="score">
              {item.value}/10
            </span>

          </div>

        ))}

      </div>

    </section>

  );

}