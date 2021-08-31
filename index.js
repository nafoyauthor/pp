function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//https://www.geeksforgeeks.org/how-to-convert-the-hamburger-icon-of-navigation-menu-to-x-on-click/