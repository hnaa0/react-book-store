import { Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import CartPage from "./page/CartPage";
import DetailPage from "./page/DetailPage";
import OrderPage from "./page/OrderPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="" element={<MainPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/detail/:bookId" element={<DetailPage />} />
      <Route path="/order" element={<OrderPage />} />
    </Routes>
  );
}
