// Object with function defined inside with type annotation
const profile = {
  firstName: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

// destructuring age and name
const { age, firstName }: { age: number; firstName: string } = profile;

// destructuring lat and lng
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
