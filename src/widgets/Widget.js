const Widget = class {
  constructor({ name, description, route, component }) {
    this.name = name;
    this.description = description;
    this.route = route ?? name.toLowerCase();
    this.component = component;
  }
};

export default Widget;
