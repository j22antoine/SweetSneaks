
var xValues = ["Jordans", "Adidas", "Other"];
var yValues = [26, 17, 15];
var barColors = ["red", "green","blue"];

let myChart = new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Sneaker Collection Distribution"
    }
  }
});

function updateChart(){
const inputdata = document.getElementById('inputdata');
const inputlabel = document.getElementById('inputlabel');
console.log(inputdata);
console.log(inputdata.value);
// myChart.data.datasets[0].data.push(inputdata.value);
// myChart.data.labels.push(inputlabel.value);
yValues[0] += +inputdata.value
if(inputlabel.value.toLowerCase() === 'jordans'){
  yValues[0] += +inputdata.value
}else if(inputlabel.value.toLowerCase() === 'adidas'){
  yValues[1] += +inputdata.value
}else{
  yValues[2] += +inputdata.value
}



myChart.update();
}

//getting error that updateChart is not a function and that 'inputdata' cannot be redeclared.  Don't know what that means. 

