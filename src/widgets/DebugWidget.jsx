import { useTwitch } from "../hooks/useTwitch";
import Widget from "./Widget";

export default new Widget({
  name: "DebugWidget",
  description: "A widget to see and debug event contents.",
  route: "/debug",
  component: () => {
    useTwitch({
      message: (channel, tags, message) =>
        console.log({ channel, tags, message }),
      onConnected: () => console.log("Connected!"),
    });

    return <h1>DebugWidget</h1>;
  },
});
