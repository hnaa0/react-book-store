import { Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import CartPage from "./page/CartPage";
import DetailPage from "./page/DetailPage";
import OrderPage from "./page/OrderPage";
import LikePage from "./page/LikePage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="" element={<MainPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/detail/:bookId" element={<DetailPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/likes" element={<LikePage />} />
    </Routes>
  );
}
