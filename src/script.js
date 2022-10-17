let scroll = window.scrollY;
console.log(scroll); 

(scroll) => {
     if (scroll >= 100) {
          var element = document.querySelector(".__navbar");
          element.classList.add("__bg-white");
        }
   }