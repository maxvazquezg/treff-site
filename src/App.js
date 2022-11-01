import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.min.css";
import { Button } from "react-bulma-components";
import Navbar from "./components/Navbar";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { routes } from "./routes";
import Home from "./pages/Home";
import "./app.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path="/treff-site" element={<Home />} />
        {/* <RouterProvider router={router} /> */}
      </Routes>
    </div>
  );
}

export default App;
