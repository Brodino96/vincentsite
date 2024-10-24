const pageTitle = document.title; // original title of the page

document.addEventListener("visibilitychange", function() { // when you leave or open the page
    if (document.hidden) {
        document.title = "Mi manchi, torna qui"
    } else {
        document.title = pageTitle
    }
})

function changePage(pageName) {
    window.location.replace(`/html/${pageName}.html`)
}