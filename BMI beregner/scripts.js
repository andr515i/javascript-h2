function BMICalc(event) {
  event.preventDefault(); // Prevent form submission

  weightInput = document.getElementById("weight");
  heightInput = document.getElementById("height");

  weight = parseFloat(weightInput.value);
  height = parseFloat(heightInput.value);

  if (height > 2.5) {
    height = height / 100; // convert cm to meters
    console.log("converting to meters..." + height);
  }
  console.log("calculating ..." + height + " " + weight * weight);

  let bmi = weight / (height * height);
  let group;

  if (bmi < 18.5 && bmi > 16) {
    console.log("BMI group 1");
    group = "body weight deficit";
  } else if (bmi < 24 && bmi > 18.5) {
    console.log("BMI group 2");
    group = "normie";
  } else if (bmi > 24 && bmi < 30) {
    console.log("BMI group 3");
    group = "overweight";
  } else if (bmi > 30 && bmi < 35) {
    console.log("BMI group 4");
    group = "obesity first degree";
  } else if (bmi > 35 && bmi < 40) {
    console.log("BMI group 5");
    group = "obesity second degree";
  } else if (bmi > 40) {
    console.log("BMI group 6");
    group = "obesity third degree";
  } else {
    console.log("BMI group 7");
    group =
      "you messed up. Either severely underweight or incorrect data input";
  }

  alert("Your BMI is: " + bmi + ". your bmi group is: " + group);
}
