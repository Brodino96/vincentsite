/* ------------------------------------------------ */

let sidebarActive = false

/* ------------------------------------------------ */

function sidebar() {
    if (sidebarActive) {
        sidebarActive = !sidebarActive
        return document.getElementById("sidebar").style.display = "block"
    } else {
        sidebarActive = !sidebarActive
        return document.getElementById("sidebar").style.display = "none"
    }
}

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