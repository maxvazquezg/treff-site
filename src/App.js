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

import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import Logout from "./pages/Logout";
import LoadingIndicator from "./LoadingIndicator";
import DashboardFreelancerProfile from "./pages/Freelancer/DashboardFreelancerProfile";
import { ScrollTop } from "primereact/scrolltop";
import Skills from "./components/Freelancer/Skills";
import FreelancerProfileArea from "./pages/Freelancer/FreelancerProfileArea";
import Education from "./components/Freelancer/Education";
import WhyMe from "./components/Freelancer/WhyMe";
import Certification from "./components/Freelancer/Certification";
import Language from "./components/Freelancer/Language";
// import 'primeflex/primeflex.css';
// import '../../index.css';

function App() {
  return (
    <div className="App">
      <LoadingIndicator />
      <Navbar />
      <ScrollTop />
      <div>
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.EXPLORECATEGORY} element={<ExploreCategory />} />
          <Route path={routes.EXPLORE} element={<Explore />} />
          <Route path={routes.EXPLOREID} element={<Explore />} />
          <Route path={routes.SERVICE} element={<Service />} />
          <Route
            path={routes.FREELANCERPROFILE}
            element={<FreelancerProfile />}
          />
          <Route
            path={routes.DASHBOARD_FREELANCER}
            element={<DashboardFreelancerProfile />}
          >
            <Route
              path={routes.DASHBOARD_FREELANCERPROFILE}
              element={<FreelancerProfileArea />}
            >
              <Route
                path={routes.DASHBOARD_FREELANCERSKILLS}
                element={<Skills />}
              ></Route>
              <Route
                path={routes.DASHBOARD_FREELANCEREDUCATION}
                element={<Education />}
              ></Route>
              <Route
                path={routes.DASHBOARD_FREELANCERCERTIFICATION}
                element={<Certification />}
              ></Route>
              <Route
                path={routes.DASHBOARD_FREELANCERWHYME}
                element={<WhyMe />}
              ></Route>
              <Route
                path={routes.DASHBOARD_FREELANCERLANGUAGE}
                element={<Language />}
              ></Route>
            </Route>
          </Route>
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