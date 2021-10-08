import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/style/GlobalStyle";
import { theme } from "./components/style/theme";
import { Header, Sidebar } from "./components";
import { Link as LinkR, Switch, Route } from "react-router-dom";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

import { Home, SignInPage } from "./Pages";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInPage} exact />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
