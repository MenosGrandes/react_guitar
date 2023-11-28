export class DoubleMap {
  constructor() {
    this.object_to_string = {};
    this.string_to_object = {};
  }
  get_string = (value) => {
    return this.string_to_object[value];
  };
  get_object = (value) => {
    return this.object_to_string[value];
  };
  add = (value) => {
    this.object_to_string[value] = value.name;
    this.string_to_object[value.name] = value;
  };
  get = (value) => {
    const type = typeof value;
    const isArray = Array.isArray(value);
    if (type == "string") {
      return this.get_string(value);
    } else if (type == "object") {
      if (isArray) {
        const v = value.map((e) => {
          return this.get(e);
        });
        return v;
      } else {
        return this.get_object(value);
      }
    }
  };
}
