import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React, { useEffect, useState } from "react";
import { ServiceApi } from "../api";
import CustomSection from "../components/CustomSection";
import { getURLImage } from "../utils/images";
import SectionContent from "../components/SectionContent";
import ReactStars from "react-rating-stars-component";
import { Link, useParams } from "react-router-dom";
import RoundedImage from "../components/RoundedImage";
import { setDateString } from "../utils/dates";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import ServicesByFreelancer from "../components/ServicesByFreelancer";
import { routes } from "../routes";

const Service = () => {
  const { id } = useParams();
  const [service, setService] = useState([]);

  useEffect(() => {
    const getService = async () => {
      await getServicesAsync(id);
    };

    getService();
  }, [id]);

  const getServicesAsync = async (id) => {
    const ser = await ServiceApi.getServiceById(id);
    setService(ser);
  };

  const getGallery = (photos) => {
    let images = [];
    photos.forEach((p) => {
      images.push({
        src: getURLImage(p.image),
      });
    });
    return images;
  };

  const getComments = (comments) => {
    return comments.map((s, index) => (
      <div key={index} className="column has-text-centered text-slide">
        <div
          key={index}
          className="card"
          style={{
            width: "100%",
            height: "200.04px",
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
            <div className="content pl-5 pr-5">
              {/* <img src={getURLImage(service.category?.image)} alt="servicio" /> */}
              <div className="has-text-right">
                {setDateString(s.comment.createdDate)}
              </div>
              <footer className="card-footer has-text-left">
                <img
                  className="rounded ml-4 mt-2"
                  src={getURLImage(s.comment?.user?.photo)}
                  alt="freelancer"
                />
                <p className="ml-4">
                  <br />
                  <b>{s.comment.title}</b>
                  <br />
                  <p>{s.comment.description}</p>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const showPackages = (packages) => {
    if (packages != null) {
      return (
        <div className="columns">
          {packages.map((p, index) => (
            <div key={index} className="column is-6">
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <div className="columns is-vcentered">
                      <div className="column is-6">
                        {!p.premium && <div className="mt-4" />}
                        <p className="plan-title">
                          {p.premium ? "Premium" : "Básico"}
                        </p>
                      </div>
                      <div className="column is-6 has-text-right is-vcentered">
                        {p.premium && (
                          <img
                            src={process.env.PUBLIC_URL + "/images/Plan.png"}
                            alt="premuim"
                          />
                        )}
                      </div>
                    </div>

                    {!p.premium && <div className="mt-5" />}

                    <p className="price-dark">${p.cost} MXN</p>
                    <p className="subtitle-2-dark">{p.name}</p>

                    <p>{p.description}</p>

                    <article className="message is-primary">
                      <div
                        className="message-header"
                        style={{ color: "#FFFFFF" }}
                      >
                        <div className="columns is-vcentered is-multiline">
                          <div className="column is-2">
                            <img
                              width={20}
                              src={getURLImage("images/clock.svg", true)}
                              alt="time"
                            />
                          </div>
                          <div className="column is-10 has-text-left is-vcentered">
                            Tiempo de entrega {p.time} día(s)
                          </div>
                          <div className="column is-2">
                            <img
                              width={20}
                              src={getURLImage("images/review.svg", true)}
                              alt="time"
                            />
                          </div>
                          <div className="column is-9 has-text-left is-vcentered">
                            {p.numReviews} Revision(es).
                          </div>
                        </div>
                      </div>
                    </article>

                    <button
                      className="button is-success"
                      style={{ width: "100%" }}
                    >
                      Contrata servicio {p.premium ? "Premium" : "Básico"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <>
      <CustomSection type="white">
        <SectionContent type="light">
          <div className="columns is-multiline">
            <div className="column  is-6-widescreen is-12-tablet">
              <div className="columns">
                <div className="column is-9">
                  <p className="subtitle-dark">{service.name}</p>
                </div>

                <div className="column is-3 has-text-centered">
                  <Link
                    to={routes.FREELANCERPROFILE.replace(
                      ":id",
                      service.freelancerId
                    )}
                  >
                    <RoundedImage
                      url={getURLImage(service.freelancer?.photo)}
                    />
                    <p>{service.freelancer?.name}</p>
                  </Link>
                </div>
              </div>
              {service.serviceImages && service.serviceImages.length > 0 && (
                // <ScrollingMenu items={showImages(service.serviceImages)} />
                <div className="carousel-container short">
                  <Carousel
                    images={getGallery(service.serviceImages)}
                    hasThumbnails={false}
                    hasMediaButton={false}
                    hasSizeButton="bottomRight"
                    // style={{ height: "25vh", width: "100%" }}
                  />
                </div>
              )}

              {service.freelancer &&
                service.freelancer?.freelancerComments &&
                service.freelancer?.freelancerComments.length > 0 && (
                  <>
                    <p className="subtitle-2-dark mt-6">
                      Lo que la gente resalta del freelancer
                    </p>
                    <br />
                    {/* <ScrollingMenu
                      items={getComments(
                        service.freelancer?.freelancerComments
                      )}
                    /> */}
                    <div className="carousel-container short">
                      <Carousel
                        isLoop={false}
                        hasIndexBoard={false}
                        hasMediaButton={false}
                        hasMediaButtonAtMax="bottomLeft"
                        hasDotButtons="bottom"
                        hasThumbnails={false}
                        shouldSwipeOnMouse={false} // for selecting text
                        shouldMinimizeOnSwipeDown={false} // for vertical overflow scrolling
                        hasSizeButton={false}
                        style={{ userSelect: "text" }}
                        leftIcon={
                          <img
                            src={process.env.PUBLIC_URL + "/images/Atras.png"}
                            alt="adelante"
                          />
                        }
                        rightIcon={
                          <img
                            src={
                              process.env.PUBLIC_URL + "/images/Adelante.png"
                            }
                            alt="adelante"
                          />
                        }
                      >
                        {getComments(service.freelancer?.freelancerComments)}
                      </Carousel>
                    </div>
                  </>
                )}

              <p className="subtitle-2-dark mt-6">Descripcion de servicio</p>
              <br />
              <div
                className="has-text-justified"
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
              <p className="subtitle-2-dark mt-6">¿Por qué yo?</p>
              <br />
              <div
                className="has-text-justified"
                dangerouslySetInnerHTML={{ __html: service.freelancer?.whyMe }}
              />

              <article className="message is-dark mt-6">
                <div className="message-body">
                  <p className="subtitle-2-dark mb-4">Vendedor</p>
                  <div className="columns is-multiline">
                    <div className="column is-3-widescreen is-12-tablet has-text-centered  has-text-centered-mobile">
                      <RoundedImage
                        url={getURLImage(service.freelancer?.photo)}
                      />
                    </div>
                    <div className="column is-10  is-12-tablet is-multiline">
                      <div className="columns is-multiline">
                        <div className="column is-5-widescreen is-12-tablet has-text-left-widescreen has-text-centered-mobile has-text-centered-tablet">
                          <Link
                            to={routes.FREELANCERPROFILE.replace(
                              ":id",
                              service.freelancerId
                            )}
                          >
                            <p>
                              <b>{service.freelancer?.name}</b>
                            </p>
                            <p>{service.freelancer?.title}</p>
                            {service.freelancer?.score && (
                              <div className="has-text-centered-tablet has-text-centered-mobile columns">
                                <div className="column is-full-widescreen is-5-desktop  is-offset-5-desktop is-5-tablet  is-offset-4-tablet is-5-mobile is-offset-3-mobile is-offset-0-widescreen">
                                  <ReactStars
                                    count={5}
                                    edit={false}
                                    // onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                    value={service.freelancer?.score}
                                    isHalf={true}
                                  />
                                </div>
                              </div>
                            )}
                          </Link>
                        </div>
                        <div className="column is-7-widescreen is-12-tablet">
                          <button
                            className="button is-link"
                            style={{ width: "100%" }}
                          >
                            Contáctame
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="subtitle-2-dark mb-4">
                    {service.freelancer?.country}
                  </p>
                  <p>
                    Activo desde el{" "}
                    {setDateString(service.freelancer?.activeDate)}
                  </p>

                  <p className="mt-6">{service.freelancer?.description}</p>
                </div>
              </article>
            </div>
            <div className="column is-6-widescreen is-12-tablet">
              {showPackages(service.packages)}
              <div className="has-text-centered">
                <button className="button is-primary" style={{ width: "70%" }}>
                  Solicitar cotización especial
                </button>
              </div>
              <div className="has-text-centered mt-4">
                <button className="button" style={{ width: "70%" }}>
                  Contactar vendedor
                </button>
              </div>
            </div>
          </div>
        </SectionContent>
      </CustomSection>
      <CustomSection type="white">
        <SectionContent type="white">
          <p className="subtitle-2-dark mt-6">
            Más servicios de {service.freelancer?.name}
          </p>
          <br />
          <ServicesByFreelancer freelancerId={service.freelancer?.id} />
        </SectionContent>
      </CustomSection>
    </>
  );
};

export default Service;
