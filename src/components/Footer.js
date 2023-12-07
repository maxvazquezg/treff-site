import { Link } from "react-router-dom";
import { routes } from "../routes";
import { useEffect, useState } from "react";
import { CategoryApi } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(props) {
  const [allCategories, setAllCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const cat = await CategoryApi.getCategories();
      setAllCategories(cat);
    };
    getCategories();
  }, []);
  return (
    <>
      <footer className="footer hero is-link p-0" style={{ overflowY: "clip" }}>
        <div className="hero-body pt-1 pb-1">
          <div className="columns">
            <div className="column is-10 is-offset-1 has-text-left pb-0">
              <div className="columns">
                <div className="column is-4  has-text-left pb-0">
                  <p className="subtitle-light mb-1 size-20">Categorías</p>
                  <ul className="size-18">
                    {allCategories.map((category, index) => (
                      <Link key={index} to={routes.EXPLORE + category.id}>
                        <li>{category.name}</li>
                      </Link>
                    ))}
                  </ul>
                </div>
                <div className="column is-4 has-text-left pb-0">
                  <p className="subtitle-light mb-1 size-20">
                    Acerca de nosotros{" "}
                  </p>
                  <ul className="size-18">
                    <Link to={routes.EXPLORE}>
                      <li>Explora</li>
                    </Link>
                    <Link to={routes.ABOUT_US}>
                      <li>Acerca de nosotros</li>
                    </Link>
                    <Link to={routes.PRIVACITY}>
                      <li>Privacidad</li>
                    </Link>
                    <Link to={routes.TERMS}>
                      <li>Terminos y condiciones</li>
                    </Link>
                  </ul>
                </div>
                <div className="column is-4 has-text-left pb-0">
                  <p className="subtitle-light mb-1 size-20">Soporte </p>
                  <ul className="size-18">
                    <Link to={routes.CONTACT}>
                      <li>Contacto</li>
                    </Link>
                    <Link to={routes.HELP_CENTER}>
                      <li>Centro de ayuda</li>
                    </Link>
                  </ul>
                </div>
              </div>
              <hr className="mb-4 mt-0" />
              <div className="columns pb-4">
                <div className="column is-6">
                  <div className="columns is-vcentered">
                    <div className="column is-3">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/Logo Treff blanco  2 (1).png"
                        }
                        alt="treff"
                        width={164}
                      />
                    </div>
                    {/* <div className="column">
                      <p className="subtitle-light is-size-5">
                        Nuestras redes sociales
                      </p>
                    </div> */}
                  </div>
                </div>
                <div className="column is-6 has-text-right has-text-left-mobile">
                  <a
                    href="https://www.facebook.com/Hola.TREFF"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="mr-5 img-33"
                      src={process.env.PUBLIC_URL + "/images/Group 46.png"}
                      alt="instagram"
                    />
                  </a>
                  <img
                    className="mr-5 img-33"
                    src={process.env.PUBLIC_URL + "/images/Vector (1).png"}
                    alt="instagram"
                  />
                  <a
                    href="https://www.facebook.com/Hola.TREFF"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="mr-5 img-33"
                      src={process.env.PUBLIC_URL + "/images/Vector (2).png"}
                      alt="facebook"
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCTDqgr4LRgl98m7o2ewe0iQ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="mr-5 img-33"
                      src={process.env.PUBLIC_URL + "/images/Vector (3).png"}
                      alt="youtube"
                    />
                  </a>
                  <span className="mr-5 img-33">
                    <FontAwesomeIcon icon="fa-brands fa-square-twitter" />
                  </span>
                </div>
              </div>
            </div>
            <div className="column is-1 is-offset-1 has-text-left"></div>
          </div>
        </div>
      </footer>
    </>
  );
}
