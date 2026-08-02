import "../styles/CommunityStats.css";

export default function CommunityStats() {

    const stats = [

        {
            value:"⭐ 4.8",
            label:"Average Rating"
        },

        {
            value:"12.8K",
            label:"Reviews"
        },

        {
            value:"98%",
            label:"Would Recommend"
        },

        {
            value:"34K",
            label:"Views"
        }

    ];

    return(

        <section className="community">

            <div className="community-header">

                <h2>Community Stats</h2>

                <p>
                    A quick snapshot of community engagement.
                </p>

            </div>

            <div className="stats-grid">

                {

                    stats.map((stat)=>(

                        <div
                            className="stat-card"
                            key={stat.label}
                        >

                            <h1>{stat.value}</h1>

                            <p>{stat.label}</p>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}