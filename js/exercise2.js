const fruits = ["Apple", "Cherry", "Pear", "Plum", "Peach"];
fruits.shift();
fruits.pop();
fruits.unshift("Nectarine");
fruits.push("Orange");
console.log(fruits);

fruits.splice(2, 1, "Pineapple", "Banana", "Mango");
console.log(fruits);

alert([fruits]);
