import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import { data, photos } from "./data";
import { Home } from "./Home";
import { About } from "./About";
import { Galery } from "./Galery";

const theme = {
  background: "#181818",
  main: "white",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home name={data.name} tagline={data.tagline} />
      <About
        info={data.info}
        email={data.email}
        phone={data.phone}
        age={data.age}
      />
      <Galery photos={photos} />
    </ThemeProvider>
  );
};
export default App;
