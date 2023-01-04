import { Avatar } from "primereact/avatar";
import { useState } from "react";
import { useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { FreelancerApi } from "../../api";
import { getURLImage } from "../../utils/images";

const responsiveOptions = [
  {
    breakpoint: "1024px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "768px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "480px",
    numVisible: 1,
    numScroll: 1,
  },
];
const ActiveServicesByFreelancer = (params) => {
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
    return (
      <div
        className="card mr-3"
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
            <img src={getURLImage(service.category?.image)} alt="servicio" />
            <hr className="m-2" />
            <div className="has-text-left">
              <div className="columns is-vcentered is-mobile">
                <div className="column is-4-tablet is-4-mobile is-3-desktop is-3-widescreen">
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
    );
  };

  return (
    <>
      {services.length > 0 ? (
        <>
          <Carousel
            value={services}
            numVisible={3}
            numScroll={1}
            showIndicators={false}
            responsiveOptions={responsiveOptions}
            itemTemplate={getFreelancersCardsTheme}
            onTouchMove={() => {}}
          />
          <div className="control mt-6 has-text-centered">
            <button
              onClick={() => params.addNew()}
              className="button is-success"
              style={{ width: "100%" }}
            >
              Crear un servicio
            </button>
          </div>
        </>
      ) : (
        <div className="has-text-centered mt-6 pt-6 pb-6">
          <p className="text-dark">
            Parece que aun no tiene servicios activos{" "}
          </p>
          <div className="control mt-6 has-text-centered">
            <button
              onClick={() => params.addNew()}
              className="button is-success"
              style={{ width: "100%" }}
            >
              Crear un servicio
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ActiveServicesByFreelancer;
