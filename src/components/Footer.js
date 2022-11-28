export default function Footer(props) {
  return (
    <>
      <footer className="footer hero is-link">
        <div className="hero-body">
          <div className="columns">
            <div className="column is-10 is-offset-1 has-text-left">
              <div className="columns">
                <div className="column is-3  has-text-left">
                  <p className="subtitle-light mb-4 is-size-5">Categorías</p>
                  <ul>
                    <li>Artes graficas y diseño digital</li>
                    <li>Redacción y traducción</li>
                    <li>Video y animación </li>
                    <li>Musica y audio</li>
                    <li>Negocio</li>
                    <li>Programación y tecnologia</li>
                    <li>Datos</li>
                    <li>Marketing digital</li>
                  </ul>
                </div>
                <div className="column is-3 has-text-left">
                  <p className="subtitle-light mb-4 is-size-5">
                    Acerca de nosotros{" "}
                  </p>
                  <ul>
                    <li>Explora</li>
                    <li>Acerca de nosotros</li>
                    <li>Contacto</li>
                    <li>Privacidad</li>
                  </ul>
                </div>
                <div className="column is-3 has-text-left">
                  <p className="subtitle-light mb-4 is-size-5">Soporte </p>
                  <ul>
                    <li>¿Necesitas ayuda?</li>
                    <li>Centro de ayuda</li>
                  </ul>
                </div>
                <div className="column is-3 has-text-left">
                  <p className="subtitle-light mb-4 is-size-5">Soporte </p>
                  <ul>
                    <li>Marketing </li>
                    <li>Artes graficas y Diseño digital </li>
                    <li>Escritura y traduccion </li>
                    <li>Video y animacion </li>
                    <li>Musica y audio</li>
                    <li>Programación</li>
                    <li>Negocios </li>
                    <li>Negocios </li>
                  </ul>
                </div>
              </div>
              <hr />
              <div className="columns">
                <div className="column is-6">
                  <div className="columns is-vcentered">
                    <div className="column is-2">
                      <img
                        src={process.env.PUBLIC_URL + "/images/Group 9.png"}
                        alt="treff"
                      />
                    </div>
                    <div className="column">
                      <p className="subtitle-light is-size-5">
                        Nuestras redes sociales
                      </p>
                    </div>
                  </div>
                </div>
                <div className="column is-6 has-text-right">
                  <img
                    className="mr-5"
                    src={process.env.PUBLIC_URL + "/images/Group 46.png"}
                    alt="instagram"
                  />
                  <img
                    className="mr-5"
                    src={process.env.PUBLIC_URL + "/images/Vector (1).png"}
                    alt="instagram"
                  />
                  <img
                    className="mr-5"
                    src={process.env.PUBLIC_URL + "/images/Vector (2).png"}
                    alt="instagram"
                  />
                  <img
                    className="mr-5"
                    src={process.env.PUBLIC_URL + "/images/Vector (3).png"}
                    alt="instagram"
                  />
                </div>
              </div>
            </div>
            <div className="column is-1 is-offset-1 has-text-left"></div>
          </div>
        </div>
      </footer>
    </>
  );
}
