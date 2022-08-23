import "../assets/styles/StoreEntryCard.css";

const StoreEntryCard = (props) => {
  function handlePushToCart() {
    const item = { name: props.name };
    props.pushToCart(item);
  }

  return (
    <div className="entry-card">
      <h1>{props.name}</h1>
      <button onClick={handlePushToCart}>Add to cart</button>
    </div>
  );
};

export default StoreEntryCard;
