const readline = require("readline");

const interfaceCL = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const products = [
  { item: "Book", price: 33 },
  { item: "Shoes", price: 120 },
  { item: "TV", price: 267 },
  { item: "Mobile Phone", price: 598 },
];

console.log("Please choose a product from the list:");
products.forEach((product, i) => {
  console.log(`${i + 1}. ${product.item} - $${product.price}`);
});

interfaceCL.question("Enter the number of your choice: ", (answer) => {
  const choice = parseInt(answer);
  if (!isNaN(choice) && choice > 0 && choice <= products.length) {
    console.log(
      `You chose: ${products[choice - 1].item} - $${products[choice - 1].price}`
    );
    checkout(products[choice - 1]);
  } else {
    console.log("Invalid choice. Please enter a number from the list.");
    interfaceCL.close();
  }
});

function checkout(item) {
  console.log(`You have chosen ${item.item} for $${item.price}.`);
  interfaceCL.question(
    "Do you want to buy this product? (yes/no): ",
    (answer) => {
      if (answer.toLowerCase() === "yes") {
        console.log(
          `Thank you for your purchase! Your total is $${item.price}.`
        );
      } else {
        console.log("Purchase cancelled.");
      }
      interfaceCL.close();
    }
  );
}
