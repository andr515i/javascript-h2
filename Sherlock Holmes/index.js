var balance = 10500;
var cameraOn = true;
function steal(balance, amount) {
  cameraOn = false;
  if (amount < balance) {
    balance = balance - amount;
  }
  return amount;
  cameraOn = true;
}
var amount = steal(balance, 1250);
alert(
  "Du er kriminel og du har lige stjålet " + amount + " og det må man ikke!!!!"
  );

/* not sure how a "thief" wouldnt be able to steal, considering that they will "steal the money" and subtract the amount they want to steal (1250 in this case) from the original balance, thereby stealing the money? this only works when the amount they want to steal is lower than what is inside the account already. if the amount is higher, then we wont subtract that from the account. 

cameraOn is unreachable, because its after the return. 


*/