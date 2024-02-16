// import React from "react";
// import PropTypes from "prop-types";
// import "./product.style.scss";


// const ProductCard = (props) => {
//   const { name, price, imageUrl, stockCount } = props.product;
//   return (
//     <div className="product-container">
//     <div className="product">
//       <img
//         src={imageUrl}
//         width={100}
//         alt="random-img"
//         className="product__img"
//       />
//       <h6 className="product__name">{name}</h6>
//       <p className="product__price">{price}</p>
//       {stockCount ? (
//         <button className="product__btn product__btn_active">
//           Add to Card
//         </button>
//       ) : (
//         <button className="product__btn product__btn_muted">
//           Out of Stock
//         </button>
//       )}
//     </div>
//     </div>
//   );
// };

// ProductCard.propTypes = {
//   //     name;PropTypes.string.isRequired,
//   // price.ProductCard.number.isRequired,
//   product: PropTypes.object.isRequired,
// };

// export default ProductCard;

// ProductCard.jsx
import React from "react";
import PropTypes from "prop-types";
import "./product.style.scss";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice"; 

const ProductCard = ({ product }) => {
  const { id,name, price, imageUrl, stockCount } = product;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem({ id, quantity: 1 }));
  };
  return (
    <div className="product-container">
      <div className="product">
        <img
          src={imageUrl}
          width={100}
          alt="random-img"
          className="product__img"
        />
        <h6 className="product__name">{name}</h6>
        <p className="product__price">{price}</p>
        {stockCount ? (
          <button className="product__btn product__btn_active" onClick={() => handleAddToCart()}>
            Add to Cart
          </button>
        ) : (
          <button className="product__btn product__btn_muted">
            Out of Stock
          </button>
        )}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    stockCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;

