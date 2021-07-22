class Building {
  constructor(sqft) {
    if (this.constructor !== Building && !this.evacuationWarningMessage) throw Error('class extending building must override evacuationWarningMessage');

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
export default Building;
