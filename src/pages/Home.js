import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React, { useEffect, useState } from "react";
import { Parallax, Background } from "react-parallax";
import ScrollingMenu from "../components/ScrollingMenu";
import CategoryApi from "../api/CategoryApi";
import { Link } from "react-router-dom";
import { routes } from "../routes";
import { Carousel } from 'primereact/carousel';

const responsiveOptions = [
  {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
  },
  {
      breakpoint: '600px',
      numVisible: 2,
      numScroll: 1
  },
  {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1
  }
];

const services = [
  {
    image:
      "url('" +
      process.env.PUBLIC_URL +
      "/images/pexels-designecologist-1779487 1.png')",
    name: "Artes graficas y diseño digital",
  },
  {
    image:
      "url('" +
      process.env.PUBLIC_URL +
      "/images/pexels-todoran-bogdan-783737 1.png')",
    name: "Artes graficas y diseño digital",
  },
  {
    image:
      "url('" +
      process.env.PUBLIC_URL +
      "/images/pexels-martin-lopez-1117132 1.png')",
    name: "Artes graficas y diseño digital",
  },
  {
    image:
      "url('" +
      process.env.PUBLIC_URL +
      "/images/pexels-harry-cunningham-harrydigital-7383471 1.png')",
    name: "Artes graficas y diseño digital",
  },
  {
    image:
      "url('" +
      process.env.PUBLIC_URL +
      "/images/pexels-antoni-shkraba-4348403 (1) 1.png')",
    name: "Artes graficas y diseño digital",
  },
  {
    image:
      "url('" +
      process.env.PUBLIC_URL +
      "/images/pexels-designecologist-1779487 1.png')",
    name: "Artes graficas y diseño digital",
  },
  {
    image:
      "url('" +
      process.env.PUBLIC_URL +
      "/images/pexels-harry-cunningham-harrydigital-7383471 1.png')",
    name: "Artes graficas y diseño digital",
  },
];

const freelancers = [
  {
    name: "Karen Buitrago",
    service: "Marketing Digital",
    image: process.env.PUBLIC_URL + "/images/pexels-kebs-visuals-3992656 1.png",
    backgroundImage:
      process.env.PUBLIC_URL + "/images/pexels-dominika-roseclay-905163 1.png",
  },
  {
    name: "Andres Castro",
    service: "Fotografía",
    image: process.env.PUBLIC_URL + "/images/pexels-kaique-rocha-598917 1.png",
    backgroundImage:
      process.env.PUBLIC_URL + "/images/pexels-alexander-dummer-134469 1.png",
  },
  {
    name: "Karen Buitrago",
    service: "Marketing Digital",
    image: process.env.PUBLIC_URL + "/images/pexels-pixabay-38289 1.png",
    backgroundImage:
      process.env.PUBLIC_URL + "/images/pexels-li-sun-2294403 1.png",
  },
  {
    name: "Karen Buitrago",
    service: "Marketing Digital",
    image: process.env.PUBLIC_URL + "/images/pexels-kebs-visuals-3992656 1.png",
    backgroundImage:
      process.env.PUBLIC_URL + "/images/pexels-dominika-roseclay-905163 1.png",
  },
  {
    name: "Karen Buitrago",
    service: "Marketing Digital",
    image: process.env.PUBLIC_URL + "/images/pexels-kebs-visuals-3992656 1.png",
    backgroundImage:
      process.env.PUBLIC_URL + "/images/pexels-dominika-roseclay-905163 1.png",
  },
];

const freelancersRanking = [
  {
    image:
      "url('" + process.env.PUBLIC_URL + "/images/pexels-pixabay-38289 2.png')",
    name: "Andrea Mendes",
  },
  {
    image:
      "url('" +
      process.env.PUBLIC_URL +
      "/images/pexels-kebs-visuals-3992656 2.png')",
    name: "Karen Buitrago",
  },
  {
    image:
      "url('" +
      process.env.PUBLIC_URL +
      "/images/pexels-omar-lópez-1182825 1.png')",
    name: "Carlos Fajardo ",
  },
  {
    image:
      "url('" +
      process.env.PUBLIC_URL +
      "/images/pexels-pixabay-415829 1.png')",
    name: "Maria Jose Diaz",
  },
  {
    image:
      "url('" +
      process.env.PUBLIC_URL +
      "/images/pexels-vinicius-wiesehofer-1130626 1.png')",
    name: "Tatiana Torres",
  },
];

const getServiceCards = () => {
  return services.map((s, index) => (
    <div key={index} className="column has-text-centered">
      <div
        style={{
          backgroundImage: s.image,
          width: "253.54px",
          height: "350.04px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          cursor: "pointer",
        }}
      ></div>
      <div
        className="button-service has-text-centered"
        style={{ cursor: "pointer" }}
      >
        {s.name}
      </div>
    </div>
  ));
};

const getFreelancersRankingCards = () => {
  return freelancersRanking.map((s, index) => (
    <div key={index} className="column has-text-centered">
      <div
        style={{
          backgroundImage: s.image,
          width: "253.54px",
          height: "350.04px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          cursor: "pointer",
        }}
      ></div>
      <div
        className="button-ranking has-text-centered"
        style={{ cursor: "pointer" }}
      >
        {s.name}
      </div>
    </div>
  ));
};

const getFreelancersCardsTheme = (s) => {
  return (
      <div
        className="card ml-3"
        style={{
          // width: "400px",
          // height: "280px",

          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          cursor: "pointer",
          padding: "10px 0px 0px 0px",
        }}
      >
        <div
          className="card-content"
          style={{
            padding: "0px 0px 0px 0px",
          }}
        >
          <div className="content">
            <img src={s.backgroundImage} style={{width: "100%"}} alt="servicio" />
          </div>
        </div>
        <footer className="card-footer has-text-left" style={{
          // width: "400px",
          height: "110px",
        }}>
          <img className="rounded ml-4 mt-2" src={s.image} alt="freelancer" />
          <p className="ml-4">
            <br />
            <b>{s.service}</b>
            <br />
            de {s.name}
          </p>
        </footer>
      </div>);
}

const getFreelancersCards = () => {
  return freelancers.map((s, index) => (
    <div key={index} className="column has-text-centered">
      <div
        className="card"
        style={{
          width: "400px",
          height: "350.04px",
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
            <img src={s.backgroundImage} alt="servicio" />
          </div>
        </div>
        <footer className="card-footer has-text-left">
          <img className="rounded ml-4 mt-2" src={s.image} alt="freelancer" />
          <p className="ml-4">
            <br />
            <b>{s.service}</b>
            <br />
            de {s.name}
          </p>
        </footer>
      </div>
    </div>
  ));
};

const Home = () => {
  // useEffect(() => {
  //   const getBadges = async () => {
  //     await CategoryApi.getCategories();
  //     // const badges = await BadgeApi.getBadges();
  //     // let data = badges.map((b) => {
  //     //   // b.name = unescape(b.name);
  //     //   b.name = b.name.replace("&amp;", "&");
  //     //   return b;
  //     // });
  //     // setData(data);
  //     // // filteredItems = badges && badges.filter(
  //     // //     item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
  //     // // );
  //   };
  //   getBadges();
  // }, []);

  return (
    <>
      <Parallax blur={0} bgImageAlt="Treff" strength={500}>
        <Background className="custom-bg">
          <div
            style={{
              height: 2000,
              width: 2000,
              backgroundImage:
                "url('" +
                process.env.PUBLIC_URL +
                "/images/pexels-adil-2726478 1.png')",
            }}
          />
        </Background>
        <section
          className="hero pb-6"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        >
          <div className="hero-body">
            <div className="columns">
              <div className="column is-half is-offset-one-quarter mt-6">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/Treff_06_color_gradient 1.svg"
                  }
                  alt="logo"
                />
              </div>
            </div>

            <div className="columns">
              <div className="column is-three-fifths is-offset-1 mt-6 has-text-left is-full-mobile">
                <div className="columns">
                  <div className="column is-half is-four-fifths mt-6 has-text-left is-full-mobile">
                    <h1 className="has-text-white title has-text-centered-mobile">
                      Contrata un servicio
                    </h1>
                    <h2 className="subtitle mt-6 has-text-justified-mobile">
                      Somos una herramienta confiable desarrollada para que
                      ofrezcas tus servicios como experto independiente de una
                      forma amigable, ágil y segura.
                    </h2>
                    <div className="has-text-centered-mobile">
                      <button className="button is-primary button-secondary mt-6 mb-6">
                        Contratar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* </div> */}
          </div>
          <br />
        </section>
      </Parallax>

      <section className="hero is-white">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-10 is-offset-1 has-text-left">
              <p className="subtitle-dark">Servicios a explorar</p>
              <p
                className="p-blue mb-2 has-text-right mr-5"
                style={{ cursor: "pointer" }}
              >
                <Link
                  to={routes.EXPLORECATEGORY}
                  className="p-blue mb-2 has-text-right mr-5"
                >
                  <b>Ver categorías</b>
                </Link>
              </p>

              <ScrollingMenu items={getServiceCards()} />
              <div className="columns is-mobile mt-6 is-multiline "></div>
            </div>
          </div>
        </div>
        <br />
      </section>

      <section
        className="hero is-primary"
        style={{
          backgroundImage:
            "url('" +
            process.env.PUBLIC_URL +
            "/images/Treff_textura02 (1) 1.png')",
        }}
      >
        <div className="hero-body">
          <div className="columns is-multiline">
            <div className="column is-7-desktop is-offset-1-desktop has-text-left has-text-centered-mobile  has-text-centered-tablet is-12-tablet">
              <h1 className="has-text-white title" style={{ fontSize: "45px" }}>
                Publica un servicio
              </h1>
            </div>
            <div className="column is-3-desktop has-text-left is-full-tablet is-12-tablet has-text-centered-mobile has-text-centered-tablet">
              <button className="button is-link button-secondary">
                Publicar
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="hero is-light">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-10 is-offset-1 has-text-left">
              <div className="has-text-centered">
                <p className="subtitle-dark">
                  A quien estamos dirgidos y por que hacemos la diferencia
                </p>
              </div>
              <div className="columns mt-6 is-multiline ">
                <div className="column is-3">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/pexels-fauxels-3184611 1.png"
                    }
                    alt="cliente"
                  />
                </div>
                <div className="column is-6">
                  <div>
                    <p className="subtitle-dark">Cliente</p>
                    <p className="has-text-justified mt-6">
                      Somos una plataforma donde encontraras una amplia gama de
                      servicios ofrecidos por freelancers comprometidos a
                      resolver tus necesidades.{" "}
                    </p>
                    <p className="has-text-justified mt-5">
                      Con TREFF evitaras la contratación de grandes empresas,
                      encontraras beneficios de precios competitivos, trato
                      personal y TREFF actuando como un mediador entre tus
                      necesidades y la entrega de un trabajo de calidad.
                    </p>
                  </div>
                  <div className="mt-6 pt-6">
                    <p className="subtitle-dark has-text-right ">Freelancer</p>
                    <p className="has-text-justified mt-6">
                      Somos una herramienta confiable desarrollada para que
                      ofrezcas tus servicios como experto independiente de una
                      forma amigable, ágil y segura.
                    </p>
                    <p className="has-text-justified mt-6">
                      {" "}
                      Siempre contaras con el respaldo de TREFF, garantizando
                      tus pagos por los trabajos realizados ajustado a tus
                      tiempos, capacidades y precios. (*)
                    </p>
                    <p className="has-text-justified mt-6">
                      La plataforma reconoce la calidad y puntualidad de los
                      servicios que realizas por lo que el crecimiento de tus
                      ventas y tu exposición será consecuencia de la valoración
                      de tu trabajo por parte del cliente y tus propios méritos.
                    </p>
                  </div>
                </div>
                <div className="column is-3 pt-6">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/images/pexels-pavel-danilyuk-6764185 1.png"
                    }
                    alt="freelancer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </section>

      <section className="hero is-white">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-10 is-offset-1 has-text-left">
              <p className="subtitle-dark mb-6">Servicios a explorar</p>

              {/* <ScrollingMenu items={getFreelancersCards()} /> */}
              <div className="card">
                <Carousel value={freelancers} numVisible={3} numScroll={1} showIndicators={false} responsiveOptions={responsiveOptions}
                    itemTemplate={getFreelancersCardsTheme} onTouchMove={() => {}}/>
            </div>
            </div>
          </div>
        </div>
        <br />
      </section>

      <section className="hero is-primary">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-10 is-offset-1 has-text-left">
              <p className="subtitle-light mb-6">Ranking</p>
              <p className="text-light mb-6">Nuestros mejores freenlancer </p>
              <ScrollingMenu items={getFreelancersRankingCards()} />
            </div>
          </div>
        </div>
        <br />
      </section>

      <section className="hero is-black">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-10 is-offset-1 has-text-left">
              <div className="columns is-vcentered">
                <div className="column is-4 mt-6">
                  <p className="subtitle-light">Ven y conoce mas de</p>
                </div>
                <div className="column is-4 is-vcentered">
                  <img
                    className="pt-6"
                    src={
                      process.env.PUBLIC_URL +
                      "/images/Logo Treff blanco  2.png"
                    }
                    alt="treff"
                  />
                </div>
              </div>
              <p className="text-light mt-6 mb-6">
                Miles de personas hacen parte de esta comunidad{" "}
              </p>
              <div className="has-text-centered">
                <img
                  src={process.env.PUBLIC_URL + "/images/Video.png"}
                  alt="video"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
      </section>

      <section className="hero is-white">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-10 is-offset-1 has-text-centered">
              <p className="subtitle-dark mb-4">¿Necesitas ayuda ?</p>
              <p className="text-dark mb-5">
                Conoce aqui los centros de ayuda que tenemos disponibles para ti
              </p>
              <button className="button is-link button-secondary">
                Publicar
              </button>
            </div>
          </div>
        </div>
        <br />
      </section>

      <section
        className="hero is-primary hero-opacity"
        style={{
          backgroundImage:
            "url('" +
            process.env.PUBLIC_URL +
            "/images/pexels-tima-miroshnichenko-5453824 1.png')",
        }}
      >
        <div className="hero-body is-black">
          <div className="columns is-multiline">
            <div className="column has-text-centered">
              <h1 className="has-text-white title" style={{ fontSize: "45px" }}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/Logo Treff blanco  2 (1).png"
                  }
                  alt="treff"
                />
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
