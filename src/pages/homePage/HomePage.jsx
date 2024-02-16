// import React from 'react'
// import { useSelector } from 'react-redux'
// import ProductCard from '../../components/productCard/ProductCard';
// import "./homePage.style.scss"
// import { selectCartItems } from "../../redux/slices/cartSlice";


// const HomePage = () => {
//     // const{allItems}=useSelector((state)=>state.cart);
//     const allItems = useSelector(selectCartItems);


//     return (
//         <div className='containers'>
//          <div className='product-list'>
//             {allItems.map((el,index)=>(
//                 <ProductCard key={index} product={el} />
//             ))}
//          </div>
//         </div>
//     )
// }

// export default HomePage
// import React from 'react';
// import { useSelector } from 'react-redux';
// import ProductCard from '../../components/productCard/ProductCard';
// import "./homePage.style.scss";

// const HomePage = () => {
//     const cartItems = useSelector(state => state.cart.cartItems); // Access cartItems directly

//     // Check if cartItems is undefined or empty
//     if (!cartItems || cartItems.length === 0) {
//         return <div>Loading...</div>; // You can customize the loading indicator
//     }

//     return (
//         <div className='containers'>
//             <div className='product-list'>
//                 {cartItems.map((el, index) => ( // Map over cartItems
//                     <ProductCard key={index} product={el} />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default HomePage;


// HomePage.jsx
import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../../components/productCard/ProductCard';
import { selectCartItems } from "../../redux/slices/cartSlice";
import { selectAllProducts } from "../../redux/slices/productsSlice"; 
import "./homePage.style.scss"

const HomePage = () => {
    // const allItems = useSelector(selectCartItems);
    const allProducts = useSelector(selectAllProducts);
    

    return (
        <div className='containers'>
         <div className='product-list'>
            {allItems.map((el,index)=>(
                <ProductCard key={index} product={el} />
            ))}
         </div>
        </div>
    )
}

export default HomePage;
