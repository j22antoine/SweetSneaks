const options = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "5455ff5268msh8526980a7fbced0p178da3jsnb58fddac2d8e",
        "X-RapidAPI-Host": "v1-sneakers.p.rapidapi.com"
    }
};
function displayPrice() {
    fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=100&brand=jordan", options).then((data)=>{
        console.log(data); //json format
        return data.json(); //converted to object
    }).then((objectData)=>{
        console.log(objectData[0].retailPrice);
        let displayPrice = "";
        objectData.map((values)=>{
            displayPrice = `${values.retailPrice}`;
        });
        document.getElementById("PatentBred").innerHTML = displayPrice;
    });
} //style Ids from the API
 //DH6927-111 = Military Black
 //555088-063 = Patent Bred
 //DC0774-700 = Yellow Strike
 //can't figure out how to display the price from the API data onclick

//# sourceMappingURL=index.9345d665.js.map
