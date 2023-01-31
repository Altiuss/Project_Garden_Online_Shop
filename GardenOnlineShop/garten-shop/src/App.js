
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
       
        </Route>
      </Routes>
    </div>
  );
}

export default App;
