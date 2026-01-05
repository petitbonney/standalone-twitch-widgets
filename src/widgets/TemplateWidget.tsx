import type { Setting } from "../models/Setting";
import type Widget from "../models/Widget";

const setting1: Setting<number> = { id: "s1", hint: "Volume level" };
const setting2: Setting<string> = { id: "s2", hint: "Theme color" };

const template = {
  id: "template",
  description: "template widget",
  settings: [setting1, setting2],
  render: ({ s1, s2 }) => {
    console.log(s1); // number
    console.log(s2); // string
  },
} as Widget<[typeof setting1, typeof setting2]>;

const p = { s1: 1, s2: "" };

template.render(p);
