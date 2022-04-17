class Vehicle {
	// public drive(): void {
	// 	console.log('chugga chugga');
	// }
	// color: string;
	// constructor(color: string) {
	// 	this.color = color;
	// }
	constructor(public color: string) {}
	protected honk(): void {
		console.log('beep');
	}
}

class Car extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}
	private drive(): void {
		console.log('vroom');
	}
	startDrivingProcess(): void {
		this.drive();
		this.honk();
	}
}

const vehicle = new Vehicle('black');
console.log(vehicle.color);

const car = new Car(4, 'white');
car.startDrivingProcess();
