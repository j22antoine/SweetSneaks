
var xValues = ["Jordans", "Adidas", "Other"];
var yValues = [26, 17, 15];
var barColors = ["red", "green","blue"];

new Chart("myChart", {
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
const inputdata = document.getElementbyID('inputdata');
const inputlabel = document.getElementbyID('inputlabel');
console.log(inputdata);
console.log(inputdata.value);
myChart.data.datasets[0].data.push(inputdata.value);
myChart.data.labels.push(inputlabel.value);

myChart.update();
}

//getting error that updateChart is not a function and that 'inputdata' cannot be redeclared.  Don't know what that means. 

