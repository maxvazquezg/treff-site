const SectionContent = (props) => {
  return (
    <section className={"hero is-" + props.type || "white"}>
      <div className="hero-body">
        <div className="columns">
          <div className="column is-12 has-text-left">{props.children}</div>
        </div>
      </div>
    </section>
  );
};

export default SectionContent;
