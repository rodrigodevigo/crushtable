class CrushController {
  constructor (model) {
    this.model = model;
  }

  chamaNoZapBB (name, number) {
    if (name == '' || number == '') {
      return false;
    }
    let crush =  new Crush(name, number);
    return this.model.addCrush(crush);
  }

  removeCrush (code) {
    return this.model.removeCrush(code);
  }

  stay (code) {
    return this.model.stay(code);
  }


}
