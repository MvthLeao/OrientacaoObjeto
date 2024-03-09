function Aparelho(modelo, cor, anoFab) {
    this.modelo = modelo;
    this.cor = cor;
    this.anoFab = anoFab;
}

Aparelho.prototype.displayInfo = function() {
    console.log(`Modelo: ${this.modelo}, Cor: ${this.cor}, Ano de fabricação: ${this.anoFab}`);
}

function Notebook(modelo, cor, anoFab, tela) {
    Aparelho.call(this, modelo, cor, anoFab);
    this.tela = tela;
}

Notebook.prototype = Object.create(Aparelho.prototype);
Notebook.prototype.constructor = Notebook;

Notebook.prototype.displayInfo = function() {
    Aparelho.prototype.displayInfo.call(this)
    console.log(`Dimensão da tela: ${this.tela}`);
};

function Iphone(modelo, cor, anoFab, memoria) {
    Aparelho.call(this, modelo, cor, anoFab);
    this.memoria = memoria;
}

Iphone.prototype = Object.create(Aparelho.prototype);
Iphone.prototype.constructor = Iphone;

Iphone.prototype.displayInfo = function() {
    Aparelho.prototype.displayInfo.call(this);
    console.log(`Memória: ${this.memoria}`);
};

const notebookMatheus = new Notebook("Samsung", "Grey", "2021", "4000");
const notebookReserva = new Notebook("MacBook", "Gold", "2023", "7000");
const iphoneNovo = new Iphone("Iphone14", "Purple", "2023", "126gb")

console.log('-------------------------------------------------------')
notebookMatheus.displayInfo();
console.log('-------------------------------------------------------')
notebookReserva.displayInfo();
console.log('-------------------------------------------------------')
iphoneNovo.displayInfo();
console.log('-------------------------------------------------------')

