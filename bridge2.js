class Laptop {
    constructor(display) {
      this.display = display;
    }
  }
  
  class Lenovo extends Laptop {
    constructor(display) {
      super(display);
    }
  
    print() {
      return "Laptop: Lenovo, Display: " + this.display.get();
    }
  }
  
  class Asus extends Laptop {
    constructor(display) {
      super(display);
    }
  
    print() {
      return "Laptop: Asus, Display: " + this.display.get();
    }
  }
  
  class Display {
    constructor(type) {
      this.type = type;
    }
    get() {
      return this.type;
    }
  }
  
  class FullHD extends Display {
    constructor() {
      super("fullhd display");
    }
  }
  
  class UltraHD extends Display {
    constructor() {
      super('4k display');
    }
  }

  let ex1 = new Lenovo(new FullHD())
  let ex2 = new Asus(new FullHD())
  let ex3 = new Asus(new UltraHD())


