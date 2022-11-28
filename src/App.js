import "./App.css";
import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar";
import {
  Routes,
  Route,
} from "react-router-dom";
import { routes } from "./routes";
import Home from "./pages/Home";
import "./app.scss";
import LoadingIndicator from "./LoadingIndicator";
import ExploreCategory from "./pages/ExploreCategory";
import Footer from "./components/Footer";
import Explore from "./pages/Explore";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
// ]);

function App() {
  

  return (
    <div className="App">
      <LoadingIndicator />
      <Navbar />
      
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.EXPLORECATEGORY} element={<ExploreCategory />} />
        <Route path={routes.EXPLORE} element={<Explore />} />
        <Route path="/treff-site" element={<Home />} />
        {/* <RouterProvider router={router} /> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
