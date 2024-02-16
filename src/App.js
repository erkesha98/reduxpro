import HomePage from "./pages/homePage/HomePage";
import CheckoutPage from "./pages/checkoutPage/CheckoutPage";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from './redux/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      </Provider>
    </div>
  );
}

export default App;
