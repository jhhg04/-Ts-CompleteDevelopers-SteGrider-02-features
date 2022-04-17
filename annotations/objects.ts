const profile = {
	nombre: 'John',
	age: 20,
	coords: {
		lat: 0,
		lng: 15
	},
	setAge(age: number): void {
		this.age = age;
	}
};

const { age, nombre }: { age: number; nombre: string } = profile;
const {
	coords: { lat, lng }
} = profile;
