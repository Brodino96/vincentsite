const pageTitle = document.title; // original title of the page

document.addEventListener("visibilitychange", function() { // when you leave or open the page
    if (document.hidden) {
        document.title = "Mi manchi, torna qui"
    } else {
        document.title = pageTitle
    }
})

function imageClicked (data) {

    let url

    switch (data) {
        case "instagram":
            url = "https://www.instagram.com/brodinostar_/"
            break

        case "github":
            url = "https://github.com/Brodino96"
            break
    }

    redirect(url)
}

function redirect (url) {
    window.open(url, '_blank').focus()
}