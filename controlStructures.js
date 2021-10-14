//task 1
let num1 = 3;
let num2 = 9;
let num3 = 1;

//task 2
if (num1 > num2) {
  console.log("first number is greater");
} else if (num1 < num2) {
  console.log("second number is greater");
} else {
  console.log("first and second number are equal ");
}

//task 3
if (num1 % 2 == 0) {
  console.log("first number is even");
} else {
  console.log("first number is odd");
}

//task 4
if (num1 > num2 && num1 > num3) {
  if (num2 > num3) {
    console.log(`${num1} > ${num2} > ${num3}`);
  } else {
    console.log(`${num1} > ${num3} > ${num2}`);
  }
} else if (num2 > num1 && num2 > num3) {
  if (num1 > num3) {
    console.log(`${num2} > ${num1} > ${num3}`);
  } else {
    console.log(`${num2} > ${num3} > ${num1}`);
  }
} else {
  if (num1 > num2) {
    console.log(`${num3} > ${num1} > ${num2}`);
  } else {
    console.log(`${num3} > ${num2} > ${num}`);
  }
}

//task 5
for (let i = 0; i < 21; i++) {
  console.log(i);
}

//task 6
let i = 0;
while (i < 21) {
  console.log(i);
  i++;
}

//task 7
for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//task 8
let startRange = 5;
let endRange = 8;
let range = "";

for (startRange; startRange <= endRange; startRange++) {
  range += startRange;

  if (startRange < endRange) {
    range += ", ";
  }
}

console.log(range);

//task 9
let star = "";
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < i; j++) {
    star = star + "*";
  }
  console.log(star);
  star = "";
}
