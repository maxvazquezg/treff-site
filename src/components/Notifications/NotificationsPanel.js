import { Avatar } from "primereact/avatar";
import { useSelector } from "react-redux";
import { getURLImage } from "../../utils/images";
import { setDateTimeString } from "../../utils/dates";
import { getNotificationValue } from "../../utils/notificationsType";
import { Link } from "react-router-dom";

const NotificationsPanel = (props) => {
  //   const userRedux = useSelector((state) => state.user.value);
  const notificationsRedux = useSelector(
    (state) => state.notification.lastNotifications
  );

  const getNotificationUrl = (notification) =>{
    const not = getNotificationValue(notification?.notificationType);
    return not.url.replace(":id", notification?.idNotificationType);
  }

  const createMenuNotifications = () => {
    return (
      <ul className="menu-list">
        {notificationsRedux.map((o, i) => (
          <Link to={getNotificationUrl(o)} onClick={e => props.onClose()}>
            <li key={i}>
              <div className="columns is-vcentered">
                <div className="column is-2">
                  {o?.freelancer?.photo && (
                    <Avatar
                      //   className="mt-2"
                      image={getURLImage(o?.freelancer?.photo)}
                      size="large"
                      shape="circle"
                    />
                  )}
                </div>
                <div className="column is-6">
                  <p className="p-notification">
                    {o?.freelancer?.name +
                      " " +
                      getNotificationValue(o.notificationType).text}
                  </p>{" "}
                </div>
                <div className="column">
                  <p className="p-notification-time">
                    {setDateTimeString(o.created)}
                  </p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    );
  };

  return (
    <>
      <div className="container is-vcentered">
        <p className="weigth">
          <i
            className="pi pi-bell p-overlay-badge"
            style={{ fontSize: "1.3rem" }}
          />
          <span className="ml-4">
            Notificaciones ({notificationsRedux.length})
          </span>
        </p>
        <hr className="mt-3" />
        {createMenuNotifications()}
      </div>
    </>
  );
};

export default NotificationsPanel;
