window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 1900 || document.documentElement.scrollTop > 1900) {
    document.getElementById("hobbie").className = "";
    document.getElementById("home").className = "";
    document.getElementById("skill").className = "";
    document.getElementById("contactt").className = "test";
  }
  else if (document.body.scrollTop > 1150 || document.documentElement.scrollTop > 1150) {
    document.getElementById("hobbie").className = "";
    document.getElementById("home").className = "";
    document.getElementById("skill").className = "test";
    document.getElementById("contactt").className = "";


  } else if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450){
    document.getElementById("hobbie").className = "test";
    document.getElementById("home").className = "";
    document.getElementById("skill").className = "";
    document.getElementById("contactt").className = "";
  }
  else if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
    document.getElementById("hobbie").className = "";
    document.getElementById("home").className = "test";
    document.getElementById("skill").className = "";
    document.getElementById("contactt").className = "";
  }

}
// function myFunction() {
//     if ((document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) && (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50)) {
//       document.getElementById("home").className = "test";
//     } else {
//       document.getElementById("home").className = "";
//     }
//   }