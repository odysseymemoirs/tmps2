class AlcoholMarket {
    sell(props) {
      return(`Спасибо, что купили -  ${props}`);
    };
  }
  
  class AlcoholMarketProxy {
    constructor(customer) {
      this.customer = customer;
    }
    handle() {
      return (this.customer.age <= 18 ? (`Мы не можем вам продать - ${this.customer.product} - Вам нет 18 лет`) : new AlcoholMarket().sell(this.customer.product));
    };
  }
  
  class Customer {
    constructor(age,product) {
      this.age = age;
      this.product = product
    }
  }

  let order1 = new AlcoholMarketProxy(new Customer(19,'вино'))
  let order2 = new AlcoholMarketProxy(new Customer(15,'спирт'))

console.log(order1.handle())
console.log(order2.handle())
