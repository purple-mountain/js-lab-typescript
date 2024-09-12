// Solution 1

interface Dog {
  bark: boolean;
  purr: boolean;
}

let cat = { purr: true };

let dog = cat as Dog;

// Solution 2

interface Dog1 {
  bark: boolean;
}

let cat1 = { purr: true };

let dog1: Dog1 = { bark: true };

// Solution 3

interface Animal {
  bark?: boolean;
  purr?: boolean;
}

let cat2: Animal = { purr: true };

let dog2: Animal = { bark: true };
