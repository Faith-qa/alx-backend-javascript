class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // eslint-disable-next-line class-methods-use-this
  toString() {
    // eslint-disable-next-line no-template-curly-in-string
    return '[${typeof this} ${this._code}]';
  }
}

export default Airport;
