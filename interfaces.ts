interface Vehicle {
	nombre: string;
	year: Date;
	broken: boolean;
	summary(): string;
}

const oldCivic = {
	nombre: 'civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return `Name: ${this.nombre} 
                Year: ${this.year}
                Broken ?: ${this.broken}`;
	}
};

const printVehicle = (vehicle: Vehicle): void => {
	console.log(vehicle.summary());
};

printVehicle(oldCivic);
