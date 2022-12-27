import { Avatar } from "primereact/avatar";
import { useState } from "react";
import { useEffect } from "react";
import { FreelancerApi } from "../api";
import { getURLImage } from "../utils/images";
import ScrollingMenu from "./ScrollingMenu";
import { Carousel } from 'primereact/carousel';

const responsiveOptions = [
  {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
  },
  {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
  },
  {
      breakpoint: '480px',
      numVisible: 1,
      numScroll: 1
  }
];
const ServicesByFreelancer = (params) => {
  const freelancerId = params.freelancerId;
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getService = async () => {
      const servs = await FreelancerApi.getServicesByFreelancerId(freelancerId);
      setServices(servs);
    };
    if (freelancerId) {
      getService();
    }
  }, [freelancerId]);

  const getFreelancersCardsTheme = (service) => {
    // if (services) {
      return (
        // <div className={"columns is-mobile"}>
        // services.map((service, index) => (
          // <div
          //   className={
          //     "column is-3 has-text-centered"
          //   }
          // >
          <div
            // key={index}
            className="card mr-3"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              cursor: "pointer",
              padding: "10px 0px 0px 0px",
              // minWidth: "300px"
              // width: "200px",
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
                    <div className="column is-4-tablet is-4-mobile is-3-desktop is-3-widescreen">
                      {/* <img
                        className="rounded ml-4 mt-2"
                        src={getURLImage(service.freelancer?.photo)}
                        alt="freelancer"
                      /> */}
                      {service.freelancer?.photo && (
                        <Avatar
                          className="ml-3 mt-2"
                          image={getURLImage(service.freelancer?.photo)}
                          size="large"
                          shape="circle"
                        />
                      )}
                    </div>
                    <div className="column is-8-mobile">
                      <p className="ml-2">
                        <br />
                        {service.freelancer.name}
                        <br />
                        <b>{service.name}</b>
                      </p>
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
          // </div>
        // ))
        // </div>
      );
    // }
  };

  const getFreelancersCards = () => {
    if (services) {
      return (
        // <div className={"columns is-mobile"}>
        services.map((service, index) => (
          // <div
          //   className={
          //     "column is-3 has-text-centered"
          //   }
          // >
          <div
            key={index}
            className="card mr-3"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              cursor: "pointer",
              padding: "10px 0px 0px 0px",
              width: "200px",
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
                    <div className="column is-4-tablet is-4-mobile is-3-desktop is-3-widescreen">
                      {/* <img
                        className="rounded ml-4 mt-2"
                        src={getURLImage(service.freelancer?.photo)}
                        alt="freelancer"
                      /> */}
                      {service.freelancer?.photo && (
                        <Avatar
                          className="ml-3 mt-2"
                          image={getURLImage(service.freelancer?.photo)}
                          size="large"
                          shape="circle"
                        />
                      )}
                    </div>
                    <div className="column is-8-mobile">
                      <p className="ml-2">
                        <br />
                        {service.freelancer.name}
                        <br />
                        <b>{service.name}</b>
                      </p>
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
          // </div>
        ))
        // </div>
      );
    }
  };

  return (
    <>
      {/* <ScrollingMenu items={getFreelancersCards()} /> */}
      <Carousel value={services} numVisible={3} numScroll={1} showIndicators={false} responsiveOptions={responsiveOptions}
                    itemTemplate={getFreelancersCardsTheme} onTouchMove={() => {}}/>
    </>
  );
};

export default ServicesByFreelancer;
