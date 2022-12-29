import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React, { useEffect, useState } from "react";
import CategoryApi from "../api/CategoryApi";
import { ServiceApi } from "../api";
import CustomSection from "../components/CustomSection";
import { getURLImage } from "../utils/images";
import SectionContent from "../components/SectionContent";
import { Link, useParams } from "react-router-dom";
import { routes } from "../routes";
import { Avatar } from "primereact/avatar";

const Explore = () => {
  const { id } = useParams();
  const [categories, setCategories] = useState([]);
  const [servicesHighLight, setServicesHighLight] = useState([]);
  const [services, setServices] = useState([]);
  const [byFreelancer, setByFreelancer] = useState(false);
  const [categoryIdState, setCategoryIdState] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      const cat = await CategoryApi.getCategories();
      setCategories(cat);
    };

    const getServicesHighLight = async () => {
      await getServicesHighLightAsync(id);
    };

    const getServices = async () => {
      await getServicesAsync(id);
    };
    getCategories();
    getServicesHighLight();
    getServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categoryIdState, byFreelancer]);

  const getServicesHighLightAsync = async (categoryId) => {
    if (!(categoryId || categoryIdState)) {
      const ser = await ServiceApi.getHighlightServices(8, byFreelancer);
      setServicesHighLight(ser);
    } else {
      const ser = await ServiceApi.getHighlightServicesByCategoryId(
        parseInt(categoryId || categoryIdState),
        byFreelancer
      );
      setServicesHighLight(ser);
    }
  };

  const getServicesAsync = async (categoryId) => {
    if (!(categoryId || categoryIdState)) {
      const ser = await ServiceApi.getServices(8, byFreelancer);
      setServices(ser);
    } else {
      const ser = await ServiceApi.getServicesByCategoryId(
        parseInt(categoryId || categoryIdState),
        byFreelancer
      );
      setServices(ser);
    }
  };

  const getServicesOnSelect = async (e) => {
    const catId = e.target.value !== "0" ? e.target.value : null;

    setCategoryIdState(catId);

    await getServicesAsync(catId);
    await getServicesHighLightAsync(catId);
  };

  const setExploreOnSelect = async (e) => {
    const exploreOption = e.target.value === "true";

    setByFreelancer(exploreOption);

    await getServicesAsync();
    await getServicesHighLightAsync();
  };

  const freelancerCard = (service, index) => {
    return (
      <div
        key={index}
        className={"column is-3-widescreen is-6-desktop is-6 has-text-centered"}
      >
        <Link to={routes.SERVICE.replace(":id", service.id)}>
          <div
            className="card"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              cursor: "pointer",
              padding: "10px 0px 0px 0px",
            }}
          >
            <div
              className="card-content"
              style={{
                padding: "10px 0px 0px 0px",
              }}
            >
              <div className="content">
                <img
                  src={getURLImage(service.category?.image)}
                  alt="servicio"
                />
                <hr className="m-2" />
                <div className="has-text-left">
                  <div className="columns is-vcentered is-mobile">
                    <div className="column ml-4 is-4-tablet is-4-mobile is-3-desktop is-3-widescreen has-text-centered">
                      <Avatar
                        image={getURLImage(service.freelancer?.photo)}
                        size="large"
                        shape="circle"
                      />
                    </div>
                    <div className="column is-8-mobile">
                      {byFreelancer ? (
                        <p className="ml-2">
                          <br />
                          {service.freelancer.name}
                          <br />
                          <b>{service.name}</b>
                        </p>
                      ) : (
                        <p className="ml-1 pt-0 pr-4 pl-4">
                          <b>{service.name}</b>
                          <br />
                          de {service.freelancer.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="m-1" />
            <div className="has-text-right mt-3 p-1 mb-3">
              <div className="has-text-right">
                <p className="has-text-right">
                  <b>A partir de ${service.packages[0].cost} MXN</b>
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <>
      <CustomSection type="white">
        <section
          className="hero is-primary"
          style={{
            backgroundImage:
              "url('" +
              process.env.PUBLIC_URL +
              "/images/pexels-alexander-dummer-134469 2.png')",
          }}
        >
          <div className="hero-body">
            <div className="columns is-multiline">
              <div className="column is-7-desktop has-text-left has-text-left-mobile  has-text-left-tablet is-12-tablet">
                <h1
                  className="has-text-white title ml-4"
                  style={{ fontSize: "18px", fontWeight: 800 }}
                >
                  Explora a nuestros servicios
                </h1>
                <div>
                  <img
                    className="pt-0"
                    src={
                      process.env.PUBLIC_URL +
                      "/images/Logo Treff blanco  2 (2).png"
                    }
                    alt="treff"
                    width={287}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </CustomSection>

      <CustomSection type="white">
        <SectionContent type="light">
          {byFreelancer ? (
            <p className="subtitle-dark">Explorar freelancer </p>
          ) : (
            <p className="subtitle-dark">Servicios / Marketing</p>
          )}
          <div className="columns mt-6 is-multiline ">
            <div className="column is-2 is-mobile">
              <div className="select">
                <select onChange={setExploreOnSelect}>
                  <option value={0}>Explora por</option>
                  {/* {categories.map((c) => ( */}
                  <option value={false}>Explora categorias</option>
                  <option value={true}>Explora freelancers</option>
                  {/* ))} */}
                </select>
              </div>
            </div>
            <div className="column is-2">
              <div className="select">
                <select onChange={getServicesOnSelect}>
                  <option value={0}>Categorías</option>
                  {categories.map((c, i) => (
                    <option key={i} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="column is-2">
              <div className="select">
                <select>
                  <option>Verificado</option>
                  <option>Si</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            <div className="column is-2">
              <div className="select">
                <select>
                  <option>Factura</option>
                  <option>Si</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            <div className="column is-3">
              <div className="select">
                <select>
                  <option>Entrega Express</option>
                  <option>Si</option>
                  <option>No</option>
                </select>
              </div>
            </div>
          </div>
        </SectionContent>
      </CustomSection>

      <CustomSection type="white">
        <SectionContent type="white">
          <p className="subtitle-dark">Destacados</p>
        </SectionContent>
        {servicesHighLight.length > 0 && (
          <SectionContent type="light">
            <div className="columns mt-1 is-multiline">
              {servicesHighLight.map((s, index) => freelancerCard(s, index))}
            </div>
          </SectionContent>
        )}
      </CustomSection>

      <CustomSection type="white">
        <SectionContent type="white">
          <div className="columns mt-1 is-multiline">
            {services.map((s, index) => freelancerCard(s, index))}
          </div>
        </SectionContent>
      </CustomSection>
    </>
  );
};

export default Explore;
