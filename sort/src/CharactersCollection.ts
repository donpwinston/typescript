import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(a: number, b: number): boolean {
    return this.data[a].toLowerCase() > this.data[b].toLowerCase();
  }

  swap(a: number, b: number): void {
    const chars = this.data.split("");
    const x = chars[a];
    chars[a] = chars[b];
    chars[b] = x;
    this.data = chars.join("");
  }
}
