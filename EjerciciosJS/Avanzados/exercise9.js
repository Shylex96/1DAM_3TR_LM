const slider = document.getElementById("inputValue");

slider.addEventListener("input", function() {
    const value = slider.value;
    
    //console.log(value);

    const divWindows1 = document.getElementById("windows1");
    const divWindows2 = document.getElementById("windows2");
    const divWindows3 = document.getElementById("windows3");
    const divWindows4 = document.getElementById("windows4");
    const divWindows5 = document.getElementById("windows5");
    const divWindows6 = document.getElementById("windows6");
    const divWindows7 = document.getElementById("windows7");
    const divWindows8 = document.getElementById("windows8");
    const divWindows9 = document.getElementById("windows9");

    if (value == 10) {
        divWindows1.style.display = "flex";
        divWindows2.style.display = "none";
        divWindows3.style.display = "none";
        divWindows4.style.display = "none";
        divWindows5.style.display = "none";
        divWindows6.style.display = "none";
        divWindows7.style.display = "none";
        divWindows8.style.display = "none";
        divWindows9.style.display = "none";
    } else if (value == 20) {
        divWindows1.style.display = "none";
        divWindows2.style.display = "flex";
        divWindows3.style.display = "none";
        divWindows4.style.display = "none";
        divWindows5.style.display = "none";
        divWindows6.style.display = "none";
        divWindows7.style.display = "none";
        divWindows8.style.display = "none";
        divWindows9.style.display = "none";
    } else if (value == 30) {
        divWindows1.style.display = "none"
        divWindows2.style.display = "none";
        divWindows3.style.display = "flex";
        divWindows4.style.display = "none";
        divWindows5.style.display = "none";
        divWindows6.style.display = "none";
        divWindows7.style.display = "none";
        divWindows8.style.display = "none";
        divWindows9.style.display = "none";
    } else if (value == 40) {
        divWindows1.style.display = "none"
        divWindows2.style.display = "none";
        divWindows3.style.display = "none";
        divWindows4.style.display = "flex";
        divWindows5.style.display = "none";
        divWindows6.style.display = "none";
        divWindows7.style.display = "none";
        divWindows8.style.display = "none";
        divWindows9.style.display = "none";
    } else if (value == 50) {
        divWindows1.style.display = "none"
        divWindows2.style.display = "none";
        divWindows3.style.display = "none";
        divWindows4.style.display = "none";
        divWindows5.style.display = "flex";
        divWindows6.style.display = "none";
        divWindows7.style.display = "none";
        divWindows8.style.display = "none";
        divWindows9.style.display = "none";
    } else if (value == 60) {
        divWindows1.style.display = "none"
        divWindows2.style.display = "none";
        divWindows3.style.display = "none";
        divWindows4.style.display = "none";
        divWindows5.style.display = "none";
        divWindows6.style.display = "flex";
        divWindows7.style.display = "none";
        divWindows8.style.display = "none";
        divWindows9.style.display = "none";
    } else if (value == 70) {
        divWindows1.style.display = "none"
        divWindows2.style.display = "none";
        divWindows3.style.display = "none";
        divWindows4.style.display = "none";
        divWindows5.style.display = "none";
        divWindows6.style.display = "none";
        divWindows7.style.display = "flex";
        divWindows8.style.display = "none";
        divWindows9.style.display = "none";
    } else if (value == 80) {
        divWindows1.style.display = "none";
        divWindows2.style.display = "none";
        divWindows3.style.display = "none";
        divWindows4.style.display = "none";
        divWindows5.style.display = "none";
        divWindows6.style.display = "none";
        divWindows7.style.display = "none";
        divWindows8.style.display = "flex";
        divWindows9.style.display = "none";
    } else if (value == 90) {
        divWindows1.style.display = "none";
        divWindows2.style.display = "none";
        divWindows3.style.display = "none";
        divWindows4.style.display = "none";
        divWindows5.style.display = "none";
        divWindows6.style.display = "none";
        divWindows7.style.display = "none";
        divWindows8.style.display = "none";
        divWindows9.style.display = "flex";
    } 
});