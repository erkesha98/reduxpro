// // CheckoutPage.js
// import React from "react";
// import { useSelector } from "react-redux";
// import { selectCartItems } from "../../redux/slices/cartSlice";

// const CheckoutPage = () => {
//   const cartItems = useSelector(selectCartItems);

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   const tax = subtotal * 0.1;

//   const grandTotal = subtotal + tax;

//   return (
//     <div className="checkout-page">
//       <h2>Checkout</h2>
//       <div className="cart-items">
//         {cartItems.map((item) => (
//           <div key={item.id}>
//             <p>{item.name}</p>
//             <p>Price: ${item.price}</p>
//             <p>Quantity: {item.quantity}</p>
//           </div>
//         ))}
//       </div>
//       <div className="totals">
//         <p>Subtotal: ${subtotal.toFixed(2)}</p>
//         <p>Tax (10%): ${tax.toFixed(2)}</p>
//         <p>Grand Total: ${grandTotal.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// };

// export default CheckoutPage;

// checkoutPage.jsx








import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/slices/cartSlice";

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.1;

  const grandTotal = subtotal + tax;

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="totals">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax (10%): ${tax.toFixed(2)}</p>
        <p>Grand Total: ${grandTotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CheckoutPage;

