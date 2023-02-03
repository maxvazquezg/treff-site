import { Avatar } from "primereact/avatar";
import { Card } from "primereact/card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProjectApi, ServiceApi } from "../api";
import CustomSection from "../components/CustomSection";
import SectionContent from "../components/SectionContent";
import { routes } from "../routes";
import { getURLImage } from "../utils/images";

const ProjectPayment = () => {
  const { idService, idPackage } = useParams();
  const [service, setService] = useState(null);
  const [packageData, setPackageData] = useState(null);
  const serviceAmount = 10;
  const userRedux = useSelector((state) => state.user.value);
  const navigate = useNavigate();

  useEffect(() => {
    const getServiceData = async () => {
      if (!userRedux?.id) {
        navigate(routes.HOME);
        return;
      }
      const response = await ServiceApi.getServiceById(idService);
      setService(response);
      const data = response.packages.filter(
        (p) => p.id === parseInt(idPackage)
      );
      if (data.length > 0) {
        setPackageData(data[0]);
      }
    };
    getServiceData();
  }, [idPackage, idService, navigate, userRedux?.id]);

  const pay = async() => {
    const request = {
      freelancerId: service.freelancerId,
      userId: userRedux.id,
      serviceId: service.id,
      packageId: idPackage,
    };
    await ProjectApi.createService(request);
  };

  const getPackageCardTheme = () => {
    const header = (
      <img alt="Card" src={getURLImage(service.category?.image)} />
    );
    const footer = (
      <div className="has-text-right">
        <div className="has-text-right">
          <p className="has-text-right">
            <b>
              <span className="price-from">A partir de</span>{" "}
              <span className="price-from-value">
                ${packageData && packageData.cost} MXN
              </span>
            </b>
          </p>
          <p className="has-text-justified mt-4 description-total">
            {packageData && packageData.description}
          </p>
        </div>
        <div className="columns mt-6">
          <div className="column is-7 has-text-left total">
            Cargo por sevicio
          </div>
          <div className="column is-5 price has-text-right">
            {Number(serviceAmount).toFixed(2)} MXN
          </div>
        </div>
        <div className="columns mt-2">
          <div className="column is-5 has-text-left total">Total</div>
          <div className="column is-7 price has-text-right">
            {Number(serviceAmount + packageData.cost).toFixed(2)} MXN
          </div>
        </div>
        <article className="message is-primary">
          <div className="message-header" style={{ color: "#FFFFFF" }}>
            <div className="columns is-vcentered is-multiline">
              <div className="column is-2">
                <img
                  width={20}
                  src={getURLImage("images/clock.svg", true)}
                  alt="time"
                />
              </div>
              <div className="column is-10 has-text-left is-vcentered">
                Tiempo de entrega {packageData?.time} día(s)
              </div>
              {/* </div>
            <br />
            <div className="columns is-vcentered"> */}
              <div className="column is-2">
                <img
                  width={20}
                  src={getURLImage("images/review.svg", true)}
                  alt="time"
                />
              </div>
              <div className="column is-9 has-text-left is-vcentered">
                {packageData?.numReviews} Revision(es).
              </div>
            </div>
          </div>
        </article>
      </div>
    );
    return (
      <>
        {/* <Link to={routes.SERVICE.replace(":id", service.id)}> */}
        <Card footer={footer} header={header} className="mr-4 mb-4">
          <div
            className="has-text-left"
            style={{ minHeight: "150px !important" }}
          >
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
                <p className="ml-4">
                  <br />
                  {service.freelancer.name}
                  <br />
                  <b>{service.name}</b>
                </p>
              </div>
            </div>
          </div>
          <hr />
        </Card>
        {/* </Link> */}
      </>
    );
  };

  return (
    <>
      <CustomSection type="white">
        <SectionContent type="light">
          <div className="columns">
            <div className="column is-7">
              <div className="columns">
                <div className="column  is-half is-offset-one-quarter has-text-centered">
                  <button
                    className="button is-link"
                    style={{ width: "100%" }}
                    onClick={() => pay()}
                  >
                    Pagar
                  </button>
                  <p className="mt-3">
                    Al hacer click en PAGAR, aceptas los{" "}
                    <Link className="has-text-link">
                      Términos y Condiciones
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="column is-5">
              {service && getPackageCardTheme()}
            </div>
          </div>
        </SectionContent>
      </CustomSection>
    </>
  );
};

export default ProjectPayment;
