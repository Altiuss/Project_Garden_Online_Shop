import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="categories/:id" element={<ProductsPage />}  />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
