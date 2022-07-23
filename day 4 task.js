var request = new XMLHttpRequest();
request.open("get", "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload = function() {
    var result = JSON.parse(request.response);
    console.log(result);
    // 1..  All country flags :

    // var res = result.map((ele) => ele.flag);
    // console.log(res);

    // 2. Name region, sub region, population:

    // var res = result.filter((ele) => ele.region).map((ele) => ele.name);
    // console.log(res);

    // var ray = result.filter((ele) =>
    //     ele.subregion);
    // console.log(ray);

    // var res = result.map((ele) => ele.population);
    // console.log(res);
    // 3: compare two json objects without adding:

    // var obj1 = { name: "person1", age: 5 };
    // var obj2 = { age: 5, name: "person1" }; {
    //     JSON.stringify(obj1) === JSON.stringify(obj2);
    // }

}