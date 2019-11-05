let apples: number = 5;
let speed: string = "fast";
let nothing: null = null;
let hasName: boolean = true;
let date: Date = new Date();
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

class Car {}
let car: Car = new Car();

let point: { x: number; y: number } = { x: 10, y: 20 };

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json: any = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

let words = ["red", "green", "blue"];
let found: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") found = true;
}

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) numberAboveZero = numbers[i];
}
