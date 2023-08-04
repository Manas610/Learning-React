import "./CartCard.css"

export const CartCard = ({product}) => {
  return (
    <div className="cartCard">
      <img src={product.image} alt={product.name} />
        <p className="productName">{product.name}</p>
        <p className="productPrice">${product.price}</p>
        <button>Remove</button>
    </div>
  )
}
