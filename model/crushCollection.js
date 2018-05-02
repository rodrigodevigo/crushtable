class CrushCollection {
  constructor () {
    this.list = [];
  }

  addCrush (crush) {
    crush.code = this.list.length;
    this.list.push(crush);
    return true;
  }

  find (code) {
    return this.list.find(function (crush) {
      return crush.code == code;
    });
  }

  removeCrush(code) {
    let index = this.list.findIndex(function(crush) {
      return crush.code == code;
    })

    this.list.splice(index, 1);

    return this;
  }

  stay(code) {
    let crush = this.find(code);
    crush.stay = true;
  }
}
