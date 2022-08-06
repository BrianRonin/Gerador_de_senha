//ABCDEFGHIJKLMNOPQRSTUVWXYZ
//abcdefghijklmnopqrstuvwxyz
//0123456789
//!@#$%^&*()_+<>,.[];'{}:"=-`~/?|

export default class GeraSenha {
  constructor(
    quantidade = 8,
    num = true,
    maiscula = true,
    minuscula = true,
    simbolo = true
  ) {
    this.quantidade = quantidade;
    this.num = num;
    this.maimaiscula = maiscula;
    this.minuscula = minuscula;
    this.simbolo = simbolo;
  }

  get start() {
    const chars = [];
    const symbol = "!@#$%^&*()_+<>,.[];'{}:=-`~/?|" + '"';
    const Lma = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Lmi = "abcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    if (this.num) {
      chars.push(num);
    }
    if (this.maimaiscula) {
      chars.push(Lma);
    }
    if (this.minuscula) {
      chars.push(Lmi);
    }
    if (this.simbolo) {
      chars.push(symbol);
    }

    const maxTypes = chars.length;
    console.log(chars.length);
    console.log(chars[3]);
    let passyord = "";
    for (let i = passyord.length; i < this.quantidade; i++) {
      //let char = type[numChar];
      const numType = GeraSenha.rand(0, maxTypes);
      const numChar = GeraSenha.rand(0, chars[numType].length);
      let type = chars[numType];
      let char = type[numChar];
      passyord += char;
      console.log(passyord);
    }
    return passyord;
  }

  static rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
