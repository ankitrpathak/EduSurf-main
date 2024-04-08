var result_element = document.querySelector(".screen-result-text");
var input_element = document.querySelector(".screen-input-text ");

var current_query = "";


class Button {
    constructor(value) {
        this.value = value;
        this.onClicked ;
    }
     onClicked() {
         switch (this.value) {
                case "=":
                    if(current_query !== "") {

                        try{

                            result_element.innerHTML = Math.round(eval(current_query));
                            current_query = "";
                            current_query = result_element.innerHTML;

                            if(current_query.length > 8) {
                               result_element.style.fontSize = current_query.length +10+"px";
                            }
                        }
                        catch(ex){
                            input_element.innerHTML = "";
                            current_query = "";
                        }
                        break;
                    }
                case "C":
                    result_element.innerHTML = "";
                    input_element.innerHTML = "";
                    current_query = "";
                    break;
                case "⌫":
                    if(current_query !== "") {

                        current_query = current_query.slice(0, -1);
                        input_element.innerHTML = current_query;
                    }
                    break;
                default:
                    current_query += this.value;
                    input_element.innerHTML = current_query;
                    break;
         }
    }
}



function main(){
    document.querySelectorAll(".button").forEach(button => {
        button.addEventListener("click", function(e) {
            var button = new Button(e.target.innerHTML);
            button.onClicked();
        });
    });
}

main();