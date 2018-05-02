class Crush {
  constructor (name, number) {
    this.name = name;
    this.number = number;
    this.code = 0;
    this.stay = false;
  }

  print () {
    if (this.stay == true) {
      return this.name+' - '+this.number+' - Já fiquei'
    } else {
      return this.name+' - '+this.number+' - Não fiquei'
    }
  }
}
