import "./App.css";
import "bulma/css/bulma.min.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Home from "./pages/Home";
import "./app.scss";
import ExploreCategory from "./pages/ExploreCategory";
import Footer from "./components/Footer";
import Explore from "./pages/Explore";
import Service from "./pages/Service";
import FreelancerProfile from "./pages/FreelancerProfile";

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import Logout from "./pages/Logout";
import LoadingIndicator from "./LoadingIndicator";
// import 'primeflex/primeflex.css';
// import '../../index.css';

function App() {
  return (
    <div className="App">
      <LoadingIndicator />
      <Navbar />

      <div>
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.EXPLORECATEGORY} element={<ExploreCategory />} />
          <Route path={routes.EXPLORE} element={<Explore />} />
          <Route path={routes.EXPLOREID} element={<Explore />} />
          <Route path={routes.SERVICE} element={<Service />} />
          <Route path={routes.FREELANCERPROFILE} element={<FreelancerProfile />} />
          <Route path={routes.LOGOUT} element={<Logout />} />
          <Route path="/treff-site" element={<Home />} />
          {/* <RouterProvider router={router} /> */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
