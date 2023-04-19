const url = "https://localhost:5001/api/beanvariety/";
const url2 = "https://localhost:5001/api/coffee/";

const button = document.querySelector("#run-button");
const SubmitBeanVariety = document.querySelector("#AddBean");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
        getAllCoffees()
        .then(coffees => {
            console.log(coffees);
        })
});

const bean = {
    Name: document.getElementById("Name").value,
    Region: document.getElementById("Region").value,
    Notes: document.getElementById("Notes").value,
}

SubmitBeanVariety.addEventListener("click", () => {
    getAddBean(bean)
        .then
            console.log("Bean Added successfully");
    })
       

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

function getAllCoffees() {
    return fetch(url2).then(resp => resp.json());
}

function getAddBean(){
    return fetch(url).then(JSON.stringify(bean));
}

