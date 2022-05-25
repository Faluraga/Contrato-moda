console.log("Francisco Ramirez papito bello ");
var take_input = document.getElementById("take_input")
var save_value = document.getElementById("save_value")
var localstorage_value = document.getElementById("localstorage_value")
var read_localstorage = document.getElementById("read_localstorage")
var delete_data = document.getElementById("delete_data")


save_value.onclick = function(){
    localStorage.setItem("name" ,take_input.value);
}

read_localstorage.onclick = function(){
    localstorage_value.textContent = localStorage.getItem("name")
    localstorage_value.addEventListener =localStorage.getElementById("name")
}

delete_data.onclick = function(){
    localStorage.removeItem("name")
}


