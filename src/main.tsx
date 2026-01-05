import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "normalize.css";
import { render } from "preact";
import { ErrorBoundary, LocationProvider, Route, Router } from "preact-iso";
import "./index.css";
import Home from "./routes/Home";
import Loader from "./routes/Loader";
import NotFound from "./routes/NotFound";

const basePath = import.meta.env.BASE_URL;

const routing = (
  <LocationProvider>
    <ErrorBoundary onError={console.log}>
      <Router>
        <Route path={basePath + "/"} component={Home} />
        <Route path={basePath + "/404"} component={NotFound} />
        <Route path={basePath + "/:id"} component={Loader} />
      </Router>
    </ErrorBoundary>
  </LocationProvider>
);

render(<Theme>{routing}</Theme>, document.body);
