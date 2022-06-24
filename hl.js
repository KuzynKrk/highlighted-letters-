let paragraf = document.getElementById("paragraf-article");
let contetn = paragraf.innerHTML =  "<b>" + "Hel" + "</b>" + "lo" ;
let button = document.getElementById("convert-button");
let inputText = document.getElementById("inputText");

button.addEventListener("click", doMagic);

function doMagic() {
    inputTextValue = document.getElementById("inputText").value;

    let splitText = inputTextValue.split(" ");


   globlalParagraf = "";
    splitText.forEach(e => {
        let eachWord = e.split("");
        
        let howManyWords = eachWord.length;
        let mathWo = Math.ceil(howManyWords / 2);

        console.log(mathWo);
        let arrStart = eachWord.slice(0, mathWo);
        let arrEnd = eachWord.slice(mathWo)

        let start = arrStart.join("");
        let end = arrEnd.join("");
        let specialChar = "";
        
        globlalParagraf = globlalParagraf + "<b>" + start + "</b>" + end + " ";          

    });
    paragraf.innerHTML = globlalParagraf;      

}  