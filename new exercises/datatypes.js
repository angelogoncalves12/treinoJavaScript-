let pet = {
    name: 'Amy',
    age: 1,
    type: "cat"
};

//symbol data type is a unique and immutable value

const cypKey1 = Symbol("saltNpepper");
const cypKey2 = Symbol("saltNpepper");
console.log (cypKey1 == cypKey2); // false


// BigInt serve para representar integrais grandes
// Só adicionar "n" ao fim

const bigNumber = 21241241242144412412412424124124212n;
console.log (typeof bigNumber);