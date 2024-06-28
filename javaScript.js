


document.addEventListener('click', function(event) {
    var navList = document.getElementById('navlist-s');
    var navIcon = document.getElementById('nav-icon');

    // Check if the clicked element is not inside the navigation list or the navigation icon
    if (!navList.contains(event.target) && !navIcon.contains(event.target)) {
        if (navList.style.display === 'block') {
            navList.style.display = 'none';
        }
    }
});

function myicon() {
    var x = document.getElementById('navlist-s');
    if (x.style.display === 'block') {
        x.style.display = 'none';
    } else {
        x.style.display = 'block';
    }
}





const video = document.getElementById('myVideo');
video.addEventListener('ended', function() {
    // Video khatam hone ke baad yahaan kuch code likha jaa sakta hai
    // Jaise ki video ko phir se play karna
    video.play();
});

function changeImage(src) {
    document.querySelector('.left-img img').src = src;
}







document.addEventListener("DOMContentLoaded", function() {
    var readMoreLinks = document.querySelectorAll(".more-but-2");
    var redMoreDivs = document.querySelectorAll(".redmore");

    readMoreLinks.forEach(function(link, index) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            toggleRedMoreDiv(index);
        });
    });

    // Function to toggle the display of redmore div
    function toggleRedMoreDiv(index) {
        redMoreDivs.forEach(function(div, divIndex) {
            if (index === divIndex) {
                if (div.style.display === "block") {
                    div.style.display = "none"; // If redmore div is already visible, hide it
                } else {
                    div.style.display = "block"; // If redmore div is hidden, show it
                }
            } else {
                div.style.display = "none"; // Hide other redmore divs
            }
        });
    }

    // Event listener to hide redmore div when clicking outside it
    document.addEventListener("click", function(event) {
        var targetElement = event.target;
        if (!isRedmoreDiv(targetElement) && !isReadMoreLink(targetElement)) {
            redMoreDivs.forEach(function(div) {
                div.style.display = "none";
            });
        }
    });

    // Function to check if element is a redmore div
    function isRedmoreDiv(element) {
        for (var i = 0; i < redMoreDivs.length; i++) {
            if (redMoreDivs[i].contains(element)) {
                return true;
            }
        }
        return false;
    }

    // Function to check if element is a read more link
    function isReadMoreLink(element) {
        for (var i = 0; i < readMoreLinks.length; i++) {
            if (readMoreLinks[i].contains(element)) {
                return true;
            }
        }
        return false;
    }
});

