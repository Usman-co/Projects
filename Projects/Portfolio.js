var _CONTENT = [
    "Frontend Development",
    "Backend Development",
    "Web Designing",
    "Android Development",
    "Web Development"
];

var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;
var _ELEMENT = document.querySelector(".text");
var _CURSOR = document.querySelector(".cursor");

// typing effect
function Type() {
    var text = " " + _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;

    if (text === " " + _CONTENT[_PART]) {
        // hide the cursor
        clearInterval(_INTERVAL_VAL);
        setTimeout(function () {
            _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
    } else {
        // show the cursor
        _CURSOR.style.display = 'inline-block';
    }
}

// deleting effect
function Delete() {
    var text = " " + _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;

    if (text === ' ') {
        clearInterval(_INTERVAL_VAL);

        if (_PART == (_CONTENT.length - 1))
            _PART = 0;
        else
            _PART++;

        _PART_INDEX = 0;
        setTimeout(function () {
            _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
    }
}
_INTERVAL_VAL = setInterval(Type, 100);

 // JavaScript to autoplay the carousel
 document.addEventListener("DOMContentLoaded", function() {
    // Get the carousel element
    var carouselElement = document.getElementById("carouselExampleSlidesOnly");

    // Initialize index variable to track the current slide
    var currentIndex = 0;

    // Set an interval to switch to the next slide every 3 seconds (3000 milliseconds)
    var intervalId = setInterval(function() {
      // Increment the index to move to the next slide
      currentIndex++;

      // If we reach the end of the slides, loop back to the beginning
      if (currentIndex === carouselElement.querySelectorAll(".carousel-item").length) {
        currentIndex = 0;
      }

      // Set the appropriate slide as active
      carouselElement.querySelector(".carousel-item.active").classList.remove("active");
      carouselElement.querySelectorAll(".carousel-item")[currentIndex].classList.add("active");
    }, 3000); // Change the time interval as needed (in milliseconds)

    // Stop the carousel autoplay when the mouse enters the carousel
    carouselElement.addEventListener("mouseenter", function() {
      clearInterval(intervalId);
    });

    // Restart the carousel autoplay when the mouse leaves the carousel
    carouselElement.addEventListener("mouseleave", function() {
      intervalId = setInterval(function() {
        currentIndex++;
        if (currentIndex === carouselElement.querySelectorAll(".carousel-item").length) {
          currentIndex = 0;
        }
        carouselElement.querySelector(".carousel-item.active").classList.remove("active");
        carouselElement.querySelectorAll(".carousel-item")[currentIndex].classList.add("active");
      }, 3000);
    });
  });


// window.addEventListener('scroll',reveal);

// function reveal(){
//     var reveals = document.querySelectorAll('.reveal');

//     for(var i = 0; i < reveal.length; i++){

//         var windowheight = window.innerHeight
//         var revealtop = reveals[i].getBoundingClientRect().top;
//         var revealpoint = 150;

//         if(revealtop < windowheight - revealpoint){
//             reveals[i].classList.add('active');
//         }else{
//             reveals[i].classList.remove('active');
//         }
//     }
// }
