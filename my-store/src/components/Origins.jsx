import "../styles/Origins.css";

export default function Origins() {

    const origin = {

        place:"Hyderabad, Telangana",

        year:"18th Century",

        description:
        "Created in the royal kitchens of the Nizams, Hyderabadi Biryani blends Persian cooking techniques with Indian spices, becoming one of the country's most celebrated dishes."

    };

    return(

        <section className="origins">

            <div className="origin-header">

                <h2>Origins & Culture</h2>

                <p>
                    Discover where this dish comes from.
                </p>

            </div>

            <div className="origin-content">

                <div className="map-placeholder">

                    <h3>🗺️ Interactive Map</h3>

                    <p>
                        Coming Soon
                    </p>

                </div>

                <div className="origin-info">

                    <div className="origin-card">

                        <span>Origin</span>

                        <h3>{origin.place}</h3>

                    </div>

                    <div className="origin-card">

                        <span>First Introduced</span>

                        <h3>{origin.year}</h3>

                    </div>

                    <div className="story">

                        <h3>Story</h3>

                        <p>

                            {origin.description}

                        </p>

                    </div>

                </div>

            </div>

        </section>

    );

}