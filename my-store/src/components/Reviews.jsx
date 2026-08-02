import "../styles/Reviews.css";

export default function Reviews() {

  const reviews = [

    {
      id: 1,
      name: "Shavyam",
      rating: 5,
      text: "The aroma was incredible. The saffron and mint balanced everything perfectly.",
      helpful: 152
    },

    {
      id: 2,
      name: "Rahul",
      rating: 4,
      text: "Loved the flavour but it was slightly oily for my liking.",
      helpful: 93
    }

  ];

  return (

    <section className="reviews">
      <div className="img-info" style={{display:"flex"}} >
        <div className="reviews-header">

          <h2>Community Reviews</h2>

          <h1>⭐ 4.8</h1>

          <p>Based on 12,843 Reviews</p>

        </div>

        <div className="rating-bars">

          <div><span>★★★★★</span><progress value="72" max="100"></progress><span>72%</span></div>

          <div><span>★★★★☆</span><progress value="18" max="100"></progress><span>18%</span></div>

          <div><span>★★★☆☆</span><progress value="6" max="100"></progress><span>6%</span></div>

          <div><span>★★☆☆☆</span><progress value="2" max="100"></progress><span>2%</span></div>

          <div><span>★☆☆☆☆</span><progress value="2" max="100"></progress><span>2%</span></div>

        </div>
      </div>
      <div className="write-review">

        <h3>Write Your Review</h3>

        <div className="stars">

          ☆ ☆ ☆ ☆ ☆

        </div>

        <textarea placeholder="Share your thoughts..." />

        <button>Submit Review</button>

      </div>

      <div className="review-list">

        {

          reviews.map(review => (

            <div className="review-card" key={review.id}>

              <div className="review-top">

                <h4>{review.name}</h4>

                <span>{"⭐".repeat(review.rating)}</span>

              </div>

              <p>{review.text}</p>

              <button>👍 {review.helpful} Helpful</button>

            </div>

          ))

        }

      </div>

    </section>

  );

}