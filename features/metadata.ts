import "reflect-metadata";

@printMetadata
class Plane {
  color: string = "blue";
  @markFunction("Hello")
  fly(): void {
    console.log("vrrrrrrr");
  }
}

function markFunction(secretInfo: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata("secret", secretInfo, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata("secret", target.prototype, key);
    console.log(secret);
  }
}
