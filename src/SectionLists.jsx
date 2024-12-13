import StarRating from './StarRating';

function SectionLists({ name, rating }) {
  const TOTAL = 5;
  const stars = Array(rating).fill(null);
  return (
    <section>
      <h2>{name}</h2>
      <p>
        Rating: {rating} / {TOTAL}
      </p>

      <div className="star-flex">
        {stars.map((_, index) => (
          <StarRating key={index} />
        ))}
      </div>
    </section>
  );
}

export default SectionLists;
