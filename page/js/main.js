window.onload = function() { // function to change page title when you leave the page
    
    const pageTitle = document.title; // original title of the page

    document.addEventListener("visibilitychange", function(e) { // when you leave or open the page
        if(document.hidden){
            document.title = "Torna qui 😢";
        }else {
            document.title = pageTitle;
        }
    });
};