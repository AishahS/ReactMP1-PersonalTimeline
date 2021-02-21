export const About = (props) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {" "}
        <a href="https://www.instagram.com/aishahalsaqan/?hl=en">
          <img
            src="https://www.renaissancegolf.com/content/library/instagram-glyph-icon-white.png"
            style={{ width: "40px", height: "40px" }}
          ></img>
        </a>
        <a href="https://twitter.com/asaqan?lang=en">
          <img
            src="https://www.catalyte.io/wp-content/uploads/twitter-logo-white-png.png"
            style={{ width: "40px", height: "40px" }}
          ></img>
        </a>
      </div>

      <h1 className="main-text" style={{ fontSize: 48, textAlign: "center" }}>
        A B O U T
      </h1>
      <div
        style={{
          display: "flow",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: 20,
            color: "white",
            fontFamily: "serif",
            lineHeight: 2,
            display: "table",
            textAlign: "center",
          }}
        >
          {props.info}
        </p>
        <h3
          style={{
            fontSize: 20,
            color: "white",
            fontFamily: "serif",
            lineHeight: 2,
            display: "table",
            background: "grey",
          }}
        >
          Age : {props.age}{" "}
        </h3>
        <h3
          style={{
            fontSize: 20,
            color: "white",
            fontFamily: "serif",
            lineHeight: 2,
            display: "table",
            background: "grey",
          }}
        >
          Email: {props.email}
        </h3>

        <h3
          style={{
            fontSize: 20,
            color: "white",
            fontFamily: "serif",
            lineHeight: 2,
            display: "table",
            background: "grey",
          }}
        >
          Phone: {props.phone}
        </h3>
      </div>
    </div>
  );
};
