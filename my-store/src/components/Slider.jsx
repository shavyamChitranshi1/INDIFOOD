import { useParams } from "react-router-dom";
import "../styles/Slider.css";

const flavours = [
  { name: "Spicy", value: 50 },
  { name: "Sweet", value: 40 },
  { name: "Tangy", value: 60 },
  { name: "Smoky", value: 20 },
];

function Slider() {
  const { id } = useParams();

  return (
    <>


      <div className="flavour-card">
        <h2 className="flavour-heading">Flavour</h2>

        {flavours.map((item) => (
          <div className="flavour-item" key={item.name}>
            <div className="flavour-info">
              <span className="flavour-name">{item.name}</span>
              <span className="flavour-percent">{item.value}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Slider;