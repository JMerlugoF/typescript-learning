function getMessage<T>(value: T) {
  return "O valor disso é: " + value;
}

const n: number = 55;
const s: string = "55";
const a: string[] = ["c", "b", "a"];

console.log(getMessage<string[]>(a));
