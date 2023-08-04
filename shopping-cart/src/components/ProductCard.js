import "./ProductCard.css";

export const ProductCard = ({product}) => {
  return (
    <div className="productCard">
      <img src={product.image} alt={product.name} />
      <p className="name">{product.name}</p>
      <div className="action">
        <p>{product.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}
