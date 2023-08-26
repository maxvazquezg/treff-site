export default function Footer(props) {
  return (
    <>
      <footer className="footer hero is-link p-0" style={{overflowY: "clip"}}>
        <div className="hero-body pt-1 pb-1">
          <div className="columns">
            <div className="column is-10 is-offset-1 has-text-left pb-0">
              <div className="columns">
                <div className="column is-3  has-text-left pb-0">
                  <p className="subtitle-light mb-1 size-20">Categorías</p>
                  <ul className="size-18">
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
                <div className="column is-3 has-text-left pb-0">
                  <p className="subtitle-light mb-1 size-20">
                    Acerca de nosotros{" "}
                  </p>
                  <ul className="size-18">
                    <li>Explora</li>
                    <li>Acerca de nosotros</li>
                    <li>Contacto</li>
                    <li>Privacidad</li>
                  </ul>
                </div>
                <div className="column is-3 has-text-left pb-0">
                  <p className="subtitle-light mb-1 size-20">Soporte </p>
                  <ul className="size-18">
                    <li>¿Necesitas ayuda?</li>
                    <li>Centro de ayuda</li>
                  </ul>
                </div>
                <div className="column is-3 has-text-left pb-0">
                  <p className="subtitle-light mb-1 size-20">Soporte </p>
                  <ul className="size-18">
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
              <hr className="mb-4 mt-0" />
              <div className="columns pb-4">
                <div className="column is-6">
                  <div className="columns is-vcentered">
                    <div className="column is-3">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/Logo Treff blanco  2 (1).png"
                        }
                        alt="treff"
                        width={164}
                      />
                    </div>
                    {/* <div className="column">
                      <p className="subtitle-light is-size-5">
                        Nuestras redes sociales
                      </p>
                    </div> */}
                  </div>
                </div>
                <div className="column is-6 has-text-right has-text-left-mobile">
                  <img
                    className="mr-5 img-33"
                    src={process.env.PUBLIC_URL + "/images/Group 46.png"}
                    alt="instagram"
                  />
                  <img
                    className="mr-5 img-33"
                    src={process.env.PUBLIC_URL + "/images/Vector (1).png"}
                    alt="instagram"
                  />
                  <img
                    className="mr-5 img-33"
                    src={process.env.PUBLIC_URL + "/images/Vector (2).png"}
                    alt="instagram"
                  />
                  <img
                    className="mr-5 img-33"
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
