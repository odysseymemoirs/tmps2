class Laptop {
	constructor(model) {
		this.model = model;
	}
}

class LaptopFactory {
	constructor(name) {
		this.models = {};
	}

	create(name) {
		let model = this.models[name];
		if (model) return model;
		this.models[name] = new Laptop(name);
		return this.models[name];
    }
    
    getModels() {
        console.table(this.models)
    }
};

let computer = new LaptopFactory();

let asus = computer.create('asus')
let hp = computer.create('hp');
let lenovo = computer.create('lenovo')
let asus505 = computer.create('asus')

computer.getModels()
console.log(asus === asus505)

