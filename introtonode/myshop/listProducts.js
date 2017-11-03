var faker = require('faker');


function myStore() {

for(var i = 0; i < 10; i++) {
  var randomProduct = faker.commerce.productName();
  var randomPrice = faker.commerce.price();
console.log(randomProduct+ ' - ' + randomPrice)
}
}
myStore()
