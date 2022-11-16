var xValues = [
    "Jordan 1 Lows",
    "Jordan 1 Mids",
    "Jordan 1 Highs",
    "Adidas Boost"
];
var yValues = [
    55,
    49,
    44,
    24
];
var barColors = [
    "#cf311c",
    "#ecdf25",
    "#3225ec",
    "#050505fd"
];
new CharacterData("mychart", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [
            {
                backgroundColor: barColors,
                data: yValues
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: "Sneaker Collection Distribution"
        }
    }
});

//# sourceMappingURL=index.410512bc.js.map
