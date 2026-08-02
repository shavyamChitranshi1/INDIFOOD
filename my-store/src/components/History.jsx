import "../styles//HistoryMap.css";
import Navbar from "../components/Navbar";

function History() {
  return (
  <>
    <Navbar />
    <div className="history-map">

      <div className="history-section">
        <h2>History of Origin</h2>

        <p>
          Crafted with inspiration from traditional recipes passed through
          generations, this flavour reflects a balance of carefully selected
          spices and authentic ingredients. Every bite captures a rich blend
          of aromas, creating a familiar taste that has remained popular for
          decades.
        </p>

        <p>
          Over the years, the recipe has evolved while preserving its original
          character. The combination of herbs, seasonings, and natural flavours
          continues to deliver a satisfying experience enjoyed by millions
          around the world.
        </p>
      </div>

      <div className="map-section">
        <h2>Map Location</h2>

        <div className="map-placeholder">
          {/* Google Maps will be added here later */}
        </div>
      </div>

    </div>
    </>
  );
}

export default History;