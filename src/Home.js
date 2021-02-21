import cover from "./cover.jpeg";

export const Home = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${cover})`,
        minWidth: "1000px",
        minHeight: "500px",
      }}
    >
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
    </div>
  );
};
