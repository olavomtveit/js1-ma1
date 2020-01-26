//Question 1
//---------
let cat = {
    name: "sirWhiskAlot",
    age: 8,
    complain: function () {
        console.log("Meoooooooow!");
    }
}
cat.complain();

//Question 2
//----------
const heading = document.querySelector("h3");
console.dir(heading);

//Question 3
//----------
heading.style.fontSize = "2em";

//Question 4
//----------
heading.classList.add("subheading");

//Question 5
//----------
const paragraphs = document.querySelectorAll("p");
console.dir(paragraphs);

//Question 6
//----------
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "New Paragraph";

//Question 7
//----------
const cats = [{
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function q7(catArray) {
    for (let i = 0; i < catArray.length; i++) {
        console.log(catArray[i].name);
    }

}
q7(cats);

//Question 8
//----------
const cats2 = [{
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function q8(catArray) {
    let catNames = "";

    for (let i = 0; i < catArray.length; i++) {

        catNames += "<h5>" + catArray[i].name + "</h5>\n";
    }
    return catNames;
}

//Question 9
//----------
resultsContainer.innerHTML = q8(cats);

//Question 10
//-----------
const cats3 = [{
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function q8(catArray) {
    let catDetails = "";

    for (let i = 0; i < catArray.length; i++) {

        if (catArray[i].age){
            catArray[i].age = catArray[i].age;
        }
        else{
            catArray[i].age = "Age Unknown";
        }

        catDetails += "<div>" +
            "<h5>" + catArray[i].name + "</h5>\n" + 
        "<p>" + catArray[i].age + "</p>" +
            "</div>";
    }
    return catDetails;
}