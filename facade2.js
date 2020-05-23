class ComputerAssembler {
	setMotherboard() {
		console.log('Материнская плата установлена');
	}

	setCPU() {
        console.log('Процессор установлен');
    }

	setGPU() {
		console.log('Видеокарта установлена');
	}

	setRAM() {
		console.log('Оперативная память установлена');
	}

	setROM() {
		console.log('Жесткий диск установлен');
	}

	setPSU() {
		console.log('Блок питания установлен');
	}

	setCooler() {
		console.log('Куллер установлен');
	}

	setWires() {
		console.log('Провода соединены');
	}

	runComputer() {
		console.log('Компьютер собран и запущен');
	}
}

class ComputerAssemblerFacade {
	constructor(comp) {
		this.comp = comp;
	}

	assembleComp() {
		this.comp.setMotherboard();
		this.comp.setCPU();
		this.comp.setGPU();
		this.comp.setRAM();
		this.comp.setROM();
        this.comp.setCooler();
        this.comp.setWires();
		this.comp.runComputer();
	}
}

let assembler = new ComputerAssemblerFacade(new ComputerAssembler);
let computer = assembler.assembleComp()