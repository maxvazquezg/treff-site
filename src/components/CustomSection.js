const CustomSection = (props) => {
  return (
    <section className={"hero is-" + props.type || "white"}>
      <div className="hero-body pb-0 pt-0">
        <div className="columns">
          <div className="column is-10 is-offset-1 has-text-left">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSection;
