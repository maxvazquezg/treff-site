import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React, { useEffect, useState } from "react";
import CategoryApi from "../api/CategoryApi";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../routes";
import { getURLImage } from "../utils/images";


const ExploreCategory = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({});
  const [allCategories, setAllCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const cat = await CategoryApi.getCategories();
      setCategories(cat);
      setAllCategories(cat);
    };
    getCategories();
  }, []);
  const navigate = useNavigate();

  const seeSubCategories = (category) => {
    if (category.subCategories && category.subCategories.length > 0) {
      var dataBreadcrumbs = [...breadcrumb];
      dataBreadcrumbs.push(
        <li>
          <Link onClick={(e) => seeSubCategories(category)}>
            {category.name}
          </Link>
        </li>
      );

      setBreadcrumb(dataBreadcrumbs);
      setCategory(category);
      setCategories(category.subCategories);
    } else {
      navigate(routes.EXPLORE + category.id);
    }
  };

  const setDefaultCategories = (category) => {
    setCategory({});
    setCategories(allCategories);
    setBreadcrumb(breadcrumbs);
  };

  let breadcrumbs = [
    <li>
      <Link onClick={setDefaultCategories}>
        Todas las categorías
      </Link>
    </li>,
  ];

  const [breadcrumb, setBreadcrumb] = useState(breadcrumbs);

  const getCategoriesCards = (categories) => {
    return categories.map((s, index) => (
      <div
        onClick={(e) => seeSubCategories(s)}
        key={index}
        className="column is-3 has-text-left"
      >
        <div
          // className="card"
          style={{
            width: "400px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            cursor: "pointer",
            padding: "10px 0px 0px 0px",
          }}
        >
          <div>
            <img src={getURLImage(s.image)} alt="servicio" />
          </div>
          <p className="p-blue">
            <b>{s.name}</b>
          </p>
        </div>
      </div>
    ));
  };

  return (
    <>
      <section className="hero is-white">
        <div className="hero-body pt-0 pb-0">
          <div className="columns">
            <div className="column is-10 is-offset-1 has-text-left">
              <section
                className="hero is-primary"
                style={{
                  backgroundImage: category.coverImage
                    ? "url('" + getURLImage(category.coverImage) + "')"
                    : "url('" +
                      process.env.PUBLIC_URL +
                      "/images/pexels-mateusz-dach-409480 1.png')",
                }}
              >
                <div className="hero-body">
                  <div className="columns is-multiline">
                    <div className="column is-7-desktop has-text-left has-text-left-mobile  has-text-left-tablet is-12-tablet">
                      <h1
                        className="has-text-white title size-20 mt-3"
                        style={{ fontWeight: 800 }}
                      >
                        {category.name ? category.name : "Nuestras categorías"}
                      </h1>
                      <div>
                        <img
                          className="pt-3"
                          src={
                            process.env.PUBLIC_URL +
                            "/images/Logo Treff blanco  2 (2).png"
                          }
                          alt="treff"
                          height={287}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="hero is-white">
        <div className="hero-body pb-1">
          <div className="columns">
            <div className="column is-10 is-offset-1 has-text-left">
              <section className="hero is-light">
                <div className="hero-body">
                  <div className="columns">
                    <div className="column is-12 has-text-left">
                      <p className="subtitle-dark mb-1">Categorías</p>
                      <nav className="breadcrumb mt-3" aria-label="breadcrumbs">
                        <ul>{breadcrumb.map((b) => b)}</ul>
                      </nav>
                      {category.name ? (
                        <p
                          onClick={(e) => setDefaultCategories()}
                          className="p-blue mb-2 has-text-right mr-5"
                          style={{ cursor: "pointer" }}
                        >
                          <b>Ver categorías </b>
                        </p>
                      ) : null}
                      {categories.length > 0 ? (
                        <div className="columns is-multiline">
                          {getCategoriesCards(categories)}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <br />
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreCategory;
