let paragraf = document.getElementById("paragraf-article");
let contetn = paragraf.innerHTML =  "<b>" + "Hel" + "</b>" + "lo" ;
let button = document.getElementById("convert-button");
let inputText = document.getElementById("inputText");
let regex = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
let arr = [];

button.addEventListener("click", doMagic);

function doMagic() {
    inputTextValue = document.getElementById("inputText").value;

                let splitText = inputTextValue.split(regex);
                let splitTextCh = inputTextValue.split("");
                arr = [];

            
                splitText.forEach(e => {

                    if (e.match(regex)) {
                        arr.push(e);
                    } else {
                        let eLength = e.length / 2;
                        i = 0;
                        e.split("").forEach(element => {
                            i++;
                            if (i <= eLength) {
                                arr.push("<b>" + element + "</b>")
                            } else {
                                arr.push(element);
                            }
                        });

                    };

                });

                splitTextCh.findIndex(specialCh);

                function specialCh(element, index) {

                    if ( element.match(regex) ) {
                        arr.splice(index, 0, element);
                    };
                    
                }

                
                paragraf.innerHTML = arr.join("");      

            }  