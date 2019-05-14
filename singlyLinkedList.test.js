import {Node, SinglyLinkedList} from "./singlyLinkedList.mjs";

let list = null;
let apple = null;
let banana = null;
let cantaloupe = null;

beforeAll(() => {
    list = new SinglyLinkedList();
    apple = new Node("apple");
    banana = new Node("banana");
    cantaloupe = new Node("cantaloupe");
});

afterAll(() => {
    list = null;
  });

test('can push item', () => {
  list.push(apple);
  list.push(banana);
  list.push(cantaloupe);

  expect(list).toHaveLength(3);
});

test('can pop item', () => {
    const prePopLength = list.length;
    list.pop();
  
    expect(list).toHaveLength(prePopLength - 1);
});

test('can shift item', () => {
    const prePopLength = list.length;
    list.shift();
  
    expect(list).toHaveLength(prePopLength - 1);
});

test('can unshift item', () => {
    const preUnshift = list.length;
    list.unshift(apple);
  
    expect(list).toHaveLength(preUnshift + 1);
});

test('can get item at index', () => {
    const item = list.get(1); // banana
  
    expect(item.val).toEqual('banana');
});