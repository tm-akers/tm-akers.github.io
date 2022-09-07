function darkMODE(){
    const element = document.body;
    element.classList.toggle("dark");
    let myDIV1 = document.getElementById("welcome");
    myDIV1.classList.toggle("card-base-dark");
    let myDIV2 = document.getElementById("introduction");
    myDIV2.classList.toggle("card-base-dark");
    let myDIV3 = document.getElementById("social");
    myDIV3.classList.toggle("card-base-dark");
}
