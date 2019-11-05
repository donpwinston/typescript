import { Sorter } from "./Sorter";

class ListItem {
  next: ListItem | null = null;

  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: ListItem | null = null;

  add(data: number): void {
    const item = new ListItem(data);

    if (!this.head) {
      this.head = item;
      return;
    }
    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }
    tail.next = item;
  }

  get length(): number {
    if (!this.head) return 0;
    let length = 1;
    let item = this.head;
    while (item.next) {
      length++;
      item = item.next;
    }
    return length;
  }

  at(index: number): ListItem {
    if (!this.head) throw new Error("Index out of bounds");
    let counter = 0;
    let item: ListItem | null = this.head;
    while (item) {
      if (counter === index) return item;
      counter++;
      item = item.next;
    }
    throw new Error("Index out of bounds");
  }

  compare(a: number, b: number): boolean {
    if (!this.head) throw new Error("List is empty");
    return this.at(a).data > this.at(b).data;
  }

  swap(a: number, b: number): void {
    const xItem = this.at(a);
    const yItem = this.at(b);
    const z = xItem.data;
    xItem.data = yItem.data;
    yItem.data = z;
  }

  print(): void {
    if (!this.head) return;
    let item: ListItem | null = this.head;
    while (item) {
      console.log(item.data);
      item = item.next;
    }
  }
}
