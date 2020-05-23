class Laptop {

    constructor() {
        this.model = 'Laptop';
        this.processor = 'intel pentium';
        this.ram = 4;
        this.display = 'lcd'
        this.mem = 500;
        this.memType = 'hdd';
        this.price = 10000;

    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return `У вас ${this.model} с ${this.display} экраном, ${this.ram}гб оперативной паматью и ${this.mem}гб накопительной ${this.memType} памати, стоимостью ${this.price} лей`
    }
}

class Asus extends Laptop {

    constructor() {
        super();
        this.model = 'Asus';
    }
}

class AmoledDisplay {
    constructor(device) {
        this.device = device;
        this.device.display = 'amoled'
        this.device.price = this.device.price + 5000
        return this.device
    }
}

class ExtendedMem {
    constructor(device) {
        this.device = device;
        this.device.mem = 500
        this.device.ram = 8
        this.device.memType = 'ssd'
        this.device.price = this.device.price + 5000
        return this.device
    }
}

class AdditionUSBSTypeCSlot {
    constructor(device) {
        this.device = device;
        this.device.usbTypeC = 1;
        this.device.price = this.device.price + 1000;
        return this.device;
    }
}


let asus505 = new Asus;
console.log(asus505.getDescription())

asus505 = new AmoledDisplay(asus505)
console.log(asus505.getDescription())

asus505 = new ExtendedMem(asus505);
console.log(asus505.getDescription())

asus505 = new AdditionUSBSTypeCSlot(asus505);
console.log(asus505.getDescription())
