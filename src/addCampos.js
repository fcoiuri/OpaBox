function add_field(){

    var x = document.getElementById("form");
    // create an input field to insert
    var new_field = document.createElement("input");
    // set input field data type to text
    new_field.setAttribute("type", "number");
    // set input field name 
    new_field.setAttribute("name", "listas[salaN][]");
    new_field.setAttribute("class", "form-control ");
    new_field.setAttribute("placeholder", "Sala N");
    new_field.setAttribute("required", "required");
    // select last position to insert element before it
    var pos = x.childElementCount;

    // insert element
    x.insertBefore(new_field, x.childNodes[pos]);
}