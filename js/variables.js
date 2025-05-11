const accountId = 144553;
let accountEmail = "satya@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur";

// accountId = 2 //not allowed

accountEmail = "sonu@gmail.com";
accountPassword = "112233";
accountCity = "cuttack";

/*
prefer not to use var
because of iissue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);