document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-button");
    const searchBar = document.getElementById("search-bar");
    const button4k = document.getElementById("4K-button");
    const button4k_2 = document.getElementById("4K-button_2")
    const button1080p = document.getElementById("1080P-button");
    const button1080p_2 = document.getElementById("1080P-button_2");
    const movie4k = document.querySelectorAll(".movie-4k");
    const movie1080p = document.querySelectorAll(".movie-1080p");
    const logoreset = document.getElementById("logo-reset");
    const barbutton = document.getElementById("bar-button");
    const navbar = document.getElementById("navbar");

    /* Search Button */
    searchButton.addEventListener("click", function() {
        searchBar.classList.toggle("hidden");
    });

    /* Button 4K */
    button4k.addEventListener("click",function() {
        button4k.classList.remove("hover:text-black");
        button4k.classList.remove("text-white");
        button4k.classList.add("text-red-500");
        button1080p.classList.remove("text-red-500");
        button1080p.classList.add("hover:text-black");
        button1080p.classList.add("text-white");

        movie1080p.forEach(function(movie) {
            movie.classList.add("opacity-50");
        });
        movie4k.forEach(function(movie) {
            movie.classList.remove("opacity-50");
        });
    });

    /* Button 4K_2 */
    button4k_2.addEventListener("click",function() {
        button4k_2.classList.remove("hover:text-black");
        button4k_2.classList.remove("text-blue-500");
        button4k_2.classList.add("text-red-500");
        button1080p_2.classList.remove("text-red-500");
        button1080p_2.classList.add("hover:text-black");
        button1080p_2.classList.add("text-blue-500");

        movie1080p.forEach(function(movie) {
            movie.classList.add("opacity-50");
        });
        movie4k.forEach(function(movie) {
            movie.classList.remove("opacity-50");
        });
    });
    
    /* Button 1080P */
    button1080p.addEventListener("click",function() {
        button1080p.classList.remove("hover:text-black");
        button1080p.classList.remove("text-white");
        button1080p.classList.add("text-red-500");
        button4k.classList.remove("text-red-500");
        button4k.classList.add("hover:text-black");
        button4k.classList.add("text-white");

        movie4k.forEach(function(movie) {
            movie.classList.add("opacity-50");
        });
        movie1080p.forEach(function(movie) {
            movie.classList.remove("opacity-50");
        });
    });

    /* Button 1080P_2 */
    button1080p_2.addEventListener("click",function() {
        button1080p_2.classList.remove("hover:text-black");
        button1080p_2.classList.remove("text-blue-500");
        button1080p_2.classList.add("text-red-500");
        button4k_2.classList.remove("text-red-500");
        button4k_2.classList.add("hover:text-black");
        button4k_2.classList.add("text-blue-500");

        movie4k.forEach(function(movie) {
            movie.classList.add("opacity-50");
        });
        movie1080p.forEach(function(movie) {
            movie.classList.remove("opacity-50");
        });
    });

    /* Logo Reset */
    logoreset.addEventListener("click",function() {
        resetOpacity();
        resetActivity();
    });

    /* Hidden Navbar Button */
    barbutton.addEventListener("click",function(){
        navbar.classList.toggle("hidden");
    });
    
    /* Opacity Reset Function for CC logo */
    function resetOpacity(){
        movie4k.forEach(function(movie) {
            movie.classList.remove("opacity-50");
        });
        movie1080p.forEach(function(movie) {
            movie.classList.remove("opacity-50");
        });
    }

    /* Activity Reset Function for CC logo */
    function resetActivity(){
        button4k.classList.remove("text-red-500");
        button4k.classList.add("hover:text-black");
        button4k.classList.add("text-white");
        button4k_2.classList.remove("text-red-500");
        button4k_2.classList.add("hover:text-black");
        button4k_2.classList.add("text-blue-500");

        button1080p.classList.remove("text-red-500");
        button1080p.classList.add("hover:text-black");
        button1080p.classList.add("text-white");
        button1080p_2.classList.remove("text-red-500");
        button1080p_2.classList.add("hover:text-black");
        button1080p_2.classList.add("text-blue-500");
    }

});
