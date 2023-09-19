  var Apple_0 = document.querySelectorAll(".circle")[0];
  var Apple_1 = document.querySelectorAll(".circle")[1];
  var Apple_2 = document.querySelectorAll(".circle")[2];
  var Apple_3 = document.querySelectorAll(".circle")[3];
  var Apple_4 = document.querySelectorAll(".circle")[4];
  var Apple_5 = document.querySelectorAll(".circle")[5];

  var Banana_0 = document.querySelectorAll(".line")[0];
  var Banana_1 = document.querySelectorAll(".line")[1];
  var Banana_2 = document.querySelectorAll(".line")[2];
  var Banana_3 = document.querySelectorAll(".line")[3];
  var Banana_4 = document.querySelectorAll(".line")[4];
  var Banana_5 = document.querySelectorAll(".line")[5];

  Apple_0.addEventListener("click", ()=>{
     Apple_0.style.background = Apple_0.style.background === "" ?  "linear-gradient(teal, black)" : "";
     Banana_0.style.background =Banana_0.style.background === "" ? "linear-gradient(teal, black)" : "";
}) 

Apple_1.addEventListener("click", ()=>{
     Apple_1.style.background = Apple_1.style.background === "" ?  "linear-gradient(teal, black)" : "";
    Banana_1.style.background = Banana_1.style.background === "" ? "linear-gradient(teal, black)" : "";
}) 

    Apple_2.addEventListener("click", ()=>{
        Apple_2.style.background = Apple_2.style.background === "" ?   "linear-gradient(teal, black)" : "";
        Banana_2.style.background = Banana_2.style.background === "" ? "linear-gradient(teal, black)" : "";
         Banana_2.style.width  = Banana_2.style.width === "" ? "70px" : "";
}) 

        Apple_3.addEventListener("click", ()=>{
            Apple_3.style.background = Apple_3.style.background === "" ?   "linear-gradient(teal, black)" : "";
            Banana_3.style.background = Banana_3.style.background === "" ? "linear-gradient(teal, black)" : "";
}) 

            Apple_4.addEventListener("click", ()=>{
                Apple_4.style.background = Apple_4.style.background === "" ?   "linear-gradient(teal, black)" : "";
                Banana_4.style.background = Banana_4.style.background === "" ? "linear-gradient(teal, black)" : "";
}) 

                Apple_5.addEventListener("click", ()=>{
                    Apple_5.style.background = Apple_5.style.background === "" ?   "linear-gradient(teal, black)" : "";
                    Banana_5.style.background = Banana_5.style.background === "" ? "linear-gradient(teal, black)" : "";
}) 
