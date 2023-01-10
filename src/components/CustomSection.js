const CustomSection = (props) => {
  return (
    <section className={"hero is-" + props.type || "white"}>
      <div className="hero-body pb-0 pt-0">
        <div className="columns">
          <div className="column is-10 is-offset-1 has-text-left pl-0 pr-0 pt-5">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSection;
