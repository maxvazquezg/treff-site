import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React, { useEffect, useState } from "react";
import CategoryApi from "../api/CategoryApi";
import { ServiceApi } from "../api";
import CustomSection from "../components/CustomSection";
import { getURLImage } from "../utils/images";
import SectionContent from "../components/SectionContent";

const Explore = () => {
  const [categories, setCategories] = useState([]);
  const [servicesHighLight, setServicesHighLight] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const cat = await CategoryApi.getCategories();
      setCategories(cat);
    };

    const getServicesHighLight = async () => {
      await getServicesHighLightAsync();
    };

    const getServices = async () => {
      await getServicesAsync();
    };
    getCategories();
    getServicesHighLight();
    getServices();
  }, []);

  const getServicesHighLightAsync = async (categoryId) => {
    if (!categoryId) {
      const ser = await ServiceApi.getHighlightServices(8);
      setServicesHighLight(ser);
    } else {
      const ser = await ServiceApi.getHighlightServicesByCategoryId(categoryId);
      setServicesHighLight(ser);
    }
  };

  const getServicesAsync = async (categoryId) => {
    if (!categoryId) {
      const ser = await ServiceApi.getServices(8);
      setServices(ser);
    } else {
      const ser = await ServiceApi.getServicesByCategoryId(categoryId);
      setServices(ser);
    }
  };

  const getServicesOnSelect = async (e) => {
    const catId = e.target.value !== "0" ? e.target.value : null;

    getServicesAsync(catId);
    getServicesHighLightAsync(catId);
  };

  const freelancerCard = (service, size) => {
    return (
      <div className={"column is-" + (size || 4) +" has-text-centered"}>
        <div
          className="card"
          style={{
            width: "400px",
            height: "300.04px",
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
              <img src={getURLImage(service.category?.image)} alt="servicio" />
              <footer className="card-footer has-text-left">
                <img
                  className="rounded ml-4 mt-2"
                  src={getURLImage(service.freelancer?.photo)}
                  alt="freelancer"
                />
                <p className="ml-4">
                  <br />
                  <b>{service.name}</b>
                  <br />
                  de {service.freelancer.name}
                </p>
              </footer>
            </div>
          </div>
          <footer className="card-footer has-text-right mt-3">
            <div className="has-text-right ml-6">
              <b>A partir de ${service.packages[0].cost} MXN</b>
            </div>
          </footer>
        </div>
      </div>
    );
  };

  return (
    <>
      <CustomSection type="white">
        <section
          className="hero is-primary  mt-6"
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
          <p className="subtitle-dark">Servicios / Marketing</p>
          <div className="columns is-mobile mt-6 is-multiline ">
            <div className="column is-2">
              <div class="select">
                <select onChange={getServicesOnSelect}>
                  <option value={0}>Categorías</option>
                  {categories.map((c) => (
                    <option value={c.id}>{c.name}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="column is-2">
              <div class="select">
                <select>
                  <option>Verificado</option>
                  <option>Si</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            <div className="column is-2">
              <div class="select">
                <select>
                  <option>Factura</option>
                  <option>Si</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            <div className="column is-3">
              <div class="select">
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
            <div className="columns is-mobile mt-1 is-multiline">
              {servicesHighLight.map((s, index) => (
                freelancerCard(s, 3)
              ))}
            </div>
          </SectionContent>
        )}
      </CustomSection>

      <CustomSection type="white">
        <SectionContent type="white">
          <div className="columns is-mobile mt-1 is-multiline">
            {services.map((s, index) => (
              freelancerCard(s, 3)
            ))}
          </div>
        </SectionContent>
      </CustomSection>
    </>
  );
};

export default Explore;
