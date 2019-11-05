const carMakers: string[] = [];
const dates = [new Date(), new Date()];
const carsByMake: string[][] = [];

carMakers.push(100);

carMakers.map(
  (car: string): string => {
    return car.toUpperCase();
  }
);

const importantDates: (Date | string)[] = [new Date(), "2019-10-10"];
const importantDates2: (Date | string)[] = [];
