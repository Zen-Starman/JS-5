//grab my file
let people = "people.json";

document.getElementById("getPerson").onclick = jsFive;
//name searched value
let searchPerson = document.getElementById("nameSearch");

//print location
let result = document.getElementById("content");
// prep data object
let data = [];

//need to request my json people file
let xmlReq = new XMLHttpRequest();
xmlReq.open('GET', people);
xmlReq.responseType = "json";

xmlReq.onload = function () {
    data = xmlReq.response;
};
xmlReq.send();

function jsFive()
{
    //store returned people
    // xmlReq.onload = results;
    //check to make sure its working
    // console.log(results);
    //result.innerHTML = "<p>" + results + "</p>";
    //make a new array to store displayed person

    //generalize the search
    let searched = searchPerson.value.toLowerCase();

    let summary = "";

    for (let person of data) {

        if (person.name.toLowerCase().includes(searched)){

                summary +=
                    '<p>' + person.name + '</p>' +
                    '<p>' + person.sex + '</p>' +
                    '<p>' + person.born + '</p>' +
                    '<p>' + person.died + '</p>' +
                    '<p>' + person.father + '</p>' +
                    '<p>' + person.mother + '</p>';
        }
    }

    if (summary)
    {
        result.innerHTML = summary;
    }

    else
    {
        result.innerHTML = '<p> No such person in Database </p>';
    }
}
