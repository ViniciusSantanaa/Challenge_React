import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LazyHome = lazy(() => import('./Pages/Home/Home.tsx'));
const LazyProduto = lazy(() => import('./Pages/Produto/Produto.tsx'))

function App() {
  return (
      <BrowserRouter>
        <Suspense fallback={<>Carregando</>} />
          <Routes>
            <Route path="/" element={<LazyHome />} />
            <Route path="/Produto" element={<LazyProduto />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;
