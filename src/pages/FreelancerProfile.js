import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { FreelancerApi } from "../api";
import CustomSection from "../components/CustomSection";
import RoundedImage from "../components/RoundedImage";
import SectionContent from "../components/SectionContent";
import { getURLImage } from "../utils/images";
import ReactStars from "react-rating-stars-component";
import { setDateString } from "../utils/dates";
import ServicesByFreelancer from "../components/ServicesByFreelancer";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { Avatar } from "primereact/avatar";

const FreelancerProfile = () => {
  const { id } = useParams();
  const [freelancer, setFreelancer] = useState([]);

  const getComments = (comments) => {
    if (!comments) {
      return;
    }
    return comments.map((s, index) => (
      <div key={index} className="column has-text-centered text-slide">
        <div
          key={index}
          className="card pb-3"
          style={{
            width: "100%",
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

  useEffect(() => {
    const getFreelancer = async () => {
      const servs = await FreelancerApi.getFreelancerById(id);
      setFreelancer(servs);
    };
    if (id) {
      getFreelancer();
    }
  }, [id]);
  return (
    <>
      <CustomSection type="white">
        <SectionContent type="light">
          {/* Columna izquierda */}
          <div className="columns is-multiline">
            <div className="column  is-6-widescreen is-12-tablet">
              <p className="subtitle-dark">Perfil</p>
              <div className="columns mt-4 is-vcentered">
                <div className="column is-3 is-3-widescreen">
               
                  {freelancer?.photo && <Avatar
                    className="ml-4 mt-2"
                    image={getURLImage(freelancer?.photo)}
                    style={{ width: "100px", height: "100px" }}
                    size="xlarge"
                    shape="circle"
                  />}
                </div>
                <div className="column is-3">
                  <p>
                    <b>{freelancer?.name}</b>
                    <p>{freelancer?.title}</p>
                    {freelancer?.score && (
                      <div className="has-text-centered-tablet has-text-centered-mobile columns">
                        <div className="column">
                          <ReactStars
                            count={5}
                            edit={false}
                            // onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                            value={freelancer?.score}
                            isHalf={true}
                          />
                        </div>
                      </div>
                    )}
                  </p>
                </div>
                <div className="column  is-6-widescreen">
                  <button className="button is-link" style={{ width: "100%" }}>
                    Solicita una cotización especial
                  </button>
                </div>
              </div>
              <p className="text-dark mb-4 mt-6">{freelancer?.country}</p>
              <p>Activo desde el {setDateString(freelancer?.activeDate)}</p>
              <p className="text-dark mt-6">Descripción</p>
              <p className="mt-6 has-text-justified">
                {freelancer?.description}
              </p>

              <p className="text-dark mt-6">Habilidades</p>
              <br />

              <div className="columns tags are-medium">
                <div className="column is-3 is-full-mobile tag is-dark is-rounded">
                  Habilidad 1
                </div>
                <div className="column is-3 is-full-mobile tag is-dark is-rounded">
                  Habilidad 2
                </div>
                <div className="column is-3 is-full-mobile tag is-dark is-rounded">
                  Habilidad 3
                </div>
              </div>
              <div className="columns tags are-medium">
                <div className="column is-3 is-full-mobile tag is-dark is-rounded">
                  Habilidad 4
                </div>
                <div className="column is-3 is-full-mobile tag is-dark is-rounded">
                  Habilidad 5
                </div>
                <div className="column is-3 is-full-mobile tag is-dark is-rounded">
                  Habilidad 6
                </div>
              </div>

              <p className="text-dark mt-6">¿Por qué yo?</p>
              <br />
              <div
                className="has-text-justified"
                dangerouslySetInnerHTML={{ __html: freelancer?.whyMe }}
              />
            </div>
            {/* Columna derecha */}
            <div className="column is-6-widescreen is-12-tablet">
              <p className="text-dark">Reseñas</p>
              <br />
              <div className="carousel-container short">
                {/* <Carousel
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
                      src={process.env.PUBLIC_URL + "/images/Adelante.png"}
                      alt="adelante"
                    />
                  }
                > */}
                {getComments(freelancer?.freelancerComments)}
                {/* </Carousel> */}

                <div className="columns mt-6">
                  <div className="column is-6">
                    <p className="text-dark">Educación</p>
                    <ul className="mt-4">
                      <li>
                        Escuela Universidad Tecnológica Politécnica Autónoma{" "}
                      </li>
                      <li className="mt-4">
                        Escuela Universidad Tecnológica Politécnica Autónoma{" "}
                      </li>
                    </ul>
                  </div>
                  <div className="column is-6">
                    <p className="text-dark">Idiomas</p>
                    <ul className="mt-4">
                      <li>Español - Fluído </li>
                      <li className="mt-4">Inglés - Nativo/Bilingüe </li>
                    </ul>
                  </div>
                </div>

                <p className="text-dark mt-6">Certificados</p>
                <ul className="mt-4">
                  <li>
                    M.A. - Publicación
                    <br />
                    UNIVERSITY OF THE ARTS, United Kingdom, Graduado 2020
                  </li>
                  <li className="mt-4">
                    B.A. - Diseño Gráfico
                    <br />
                    Academy of Fine Arts Venice, Italy, Graduado 2017
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </SectionContent>
      </CustomSection>
      <CustomSection type="white">
        {/* <SectionContent type="white"> */}
          <p className="subtitle-2-dark mt-6">
            Más servicios de {freelancer?.name}
          </p>
          <br />
          <ServicesByFreelancer freelancerId={freelancer?.id} />
        {/* </SectionContent> */}
      </CustomSection>
    </>
  );
};

export default FreelancerProfile;
