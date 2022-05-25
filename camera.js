const image_input = document.querySelector("#image_input");
const image_input1 = document.querySelector("#image_input1");
const image_input2 = document.querySelector("#image_input2");
var uploaded_image = "";
var uploaded_image1 = "";
var uploaded_image2 = "";


image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load",()=>{
        uploaded_image = reader.result; 
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
        
    })

    reader.readAsDataURL(this.files[0]);

})

image_input1.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load",()=>{
        uploaded_image1 = reader.result; 
        document.querySelector("#display_image1").style.backgroundImage = `url(${uploaded_image1})`;
        
    })

    reader.readAsDataURL(this.files[0]);

})

image_input2.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load",()=>{
        uploaded_image2 = reader.result; 
        document.querySelector("#display_image2").style.backgroundImage = `url(${uploaded_image2})`;
        
    })

    reader.readAsDataURL(this.files[0]);

})

