class Computer {
    constructor(name, role, price) {
        this.name = name;
        this.role = role;
        this.price = price;
    }
    print() {
        console.log("name:" + this.name + " Price: " + this.price);
    }
}

class ComputerType {
    constructor(name, composite = []) {
        console.log(name)
        this.name = name;
        this.composites = composite;
    }
    print() {
        console.log(this.name);
        this.composites.forEach(model => {
            model.print();
        })
    }
}

let asus505 = new Computer("Asus", "gaming", 200)
let lenovo = new Computer("Lenovo", "gaming", 100)

let gamingComputers = new ComputerType("Gaming", [asus505, lenovo]);

let programmingComputers = new ComputerType("Programming", [
    new Computer("HP", "programming", 200),
    new Computer("Dell", "programming", 100),
    new Computer("MacBook", "programming", 300)
]);

let workingComputer = new Computer("Hewlett-Packard", "video-montage", 500);

let computers = new ComputerType("All computers", [gamingComputers, programmingComputers, workingComputer]);

computers.print();