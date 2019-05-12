var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

function runSearch(){
inquirer.prompt([{
  type: "input",
  name: "buy",
  message: "What do you want to buy on Bamazon?",
  message: "How many units of the product they would like to buy?",
}])
    .then(function(answer) {
      switch (answer.action) {
      case "Find songs by artist":
        artistSearch();
        break;

      case "Find all artists who appear more than once":
        multiSearch();
        break;
})};




var bidOnItem = function() {

 console.log(great_baydb);

  inquirer.prompt ([{
    type: "input",
    name: "productSearch",
    message: "What do you want to bid on?"
  }])

}  //  bidOnItem()



var postItem = function() {
  inquirer.prompt ([{
    type: "input",
    name: "productName",
    message: "Enter product name: ",
  }, {
    name: "quantity",
    message: "Enter how many: ",
  }, {
    name: "price",
    message: "Enter the price: "
  }])
}  //  postItem()


.then(function(answer) {
  var query = "SELECT * FROM products WHERE ?";
  connection.query(query, { productName: answer.productName }, function(err, res) {
    if(res[0].quantity < answer.quantity){
      console.log("There's not enough")
      bidOnItem()
    } else {

    }
  });
});

/*
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "aaaa1111",
  database: "playlist_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.log(res);
    connection.end();
  })
}
*/
