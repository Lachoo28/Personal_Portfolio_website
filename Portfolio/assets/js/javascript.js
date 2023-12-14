/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
    let menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }
  /*Popup */
/**force js */
function downloadFile() {
  var link = document.createElement("a");
  link.download = "dinithi_cv.pdf";
  link.href = "./assets/img/dinithi_cv.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

