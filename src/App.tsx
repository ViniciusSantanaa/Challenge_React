import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const LazyHome = lazy(() => import('./Pages/Home/Home.tsx'));

function App() {
  return (
      <BrowserRouter>
        <Suspense fallback={<>Carregando</>} />
          <Routes>
            <Route path="/" element={<LazyHome />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App;
