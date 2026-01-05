import _ from "lodash";
import { useLocation, useRoute } from "preact-iso";
import WIDGETS from "../constants/widgets";

const Loader = () => {
  const { route } = useLocation();
  const { params, query } = useRoute();
  const widget = _.find(WIDGETS, (w) => w.id === params.id);

  if (widget) {
    return widget.render(query as any);
  } else {
    route(import.meta.env.BASE_URL + "/404");
  }
};

export default Loader;
