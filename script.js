
//firebaseConfig
var firebaseConfig = {
    apiKey: "AIzaSyA3eN3OEuGbbGW1cZHi0NrLMtl7IjShzB0",
    authDomain: "minka-5812e.firebaseapp.com",
    projectId: "minka-5812e",
    storageBucket: "minka-5812e.appspot.com",
    messagingSenderId: "979077760216",
    appId: "1:979077760216:web:ecdc8b0718afe89ba3c3ad",
    measurementId: "G-YB2J0H26Q7"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



///Logica para capturar imagenes mediante la camara del dispositivo ò galeria , y mostrar en pantalla

const image_input = document.querySelector("#photo");
var uploaded_image = "";

image_input.addEventListener("change", function(){
    const reader = new FileReader();
    const ref = firebase.storage().ref();
    const file = document.querySelector('#photo').files[0];
    const name = file.name;
    const metadata = {
        contentType : file.type
    }
    const taks = ref.child(name).put(file,metadata);
    reader.addEventListener("load", ()=>{
        uploaded_image = reader.result;
        document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;

        
    } )
    
    
    reader.readAsDataURL(this.files[0]);
})



//   function upload_imagen() {

//     const ref = firebase.storage().ref();
//     const file = document.querySelector('#photo').files[0];
//     const name = file.name;

//     const metadata = {
//         contentType : file.type
//     }
//     const taks = ref.child(name).put(file,metadata);

//     taks
//     .then(snapshot => snapshot.ref.getDownloadURL())
//     .then (url => {
//         console.log(url);
//         //alert('imagen subida');
//         const imageElement = document.querySelector('#display_image');
//         imageElement.src = url;
//     });
//    console.log(ref);
      
//   }

