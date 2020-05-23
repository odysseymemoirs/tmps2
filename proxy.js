class WindowsAccess {
    constructor() {
        this.user = 'Andrei'
    }
	enter() {
		console.log('Добро пожаловать в Windows, текущий пользователь - ',this.user)
	}

	close() {
		console.log('Завершение работы...')
	}
};

class SecuritySystem { //Proxy Class
	constructor(os) {
		this.os = os;
	}

	open(password) {
		if (this.authenticate(password)) {
			this.os.enter();
		} else {
			console.log('Неправильный пароль!');
		}
	}

	authenticate(password) {
		return password === 'admin';
	}

	close() {
		this.os.close()
	}
};

let asus = new SecuritySystem(new WindowsAccess())

asus.open("1234567")
asus.open("hacker")
asus.open("admin")
asus.close()