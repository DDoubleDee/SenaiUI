const main = document.querySelector("main"),
      left = document.querySelector("left"),
      nav = document.querySelector("nav"),
      h1 = document.querySelector("h1"),
      rows = document.querySelectorAll(".table .row"),
      overflow = document.querySelector("overflow"),
      background = document.querySelector("background"),
      card = document.querySelector("card"),
      list = document.querySelector("diet ul")

let current_page = 0,
    moving = false
rows.forEach(element => {
    console.log(element)
    element.addEventListener("click", ev => cardToggle(ev))
});
function addItem() {
    list.innerHTML += "<li><div>Title</div><div>420 kcal</div><div>200ml</div></li>"
    
}
function overflowToggle() {
    if(overflow.style.display == "block") {
        overflow.style.display = "none"
    } else {
        overflow.style.display = "block"
    }
}
function navOpener() {
    if(nav.style.right == `100vw`) {
        nav.style.right = `0vw`
    }else{
        nav.style.right = `100vw`
    }
}
function cardToggle(ev) {
    if(card.style.display == "block" && ev.target == card) {
        card.style.display = "none"
    } else {
        card.style.display = "block"
    }
}
function moveTo(page) {
    if(moving){return}
    moving = true
    current_page = page
    switch (page) {
        case 0:
            h1.innerHTML = "History"
            break;

        case 1:
            h1.innerHTML = "Diary"
            break;

        case 2:
            h1.innerHTML = "Diet"
            break;

        case 3:
            h1.innerHTML = "Friends"
            break;
    
        default:
            h1.innerHTML = "Title"
            break;
    }
    animateTo()
}
function animateTo() {
    if(left.style.width == `${25 * current_page}vw`) {
        if(main.style.right == `${100 * current_page}vw`) {
            if(background.style.left == `${-20 * (current_page + 1)}vw`) {
                moving = false
                return
            }
        }
    }
    if(!(main.style.right == `${100 * current_page}vw`)) {
        if(parseInt(main.style.right) < 100 * current_page) {
            main.style.right = `${parseInt(main.style.right) + 5}vw`
        } else {
            main.style.right = `${parseInt(main.style.right) - 5}vw`
        }
    }
    if(!(left.style.width == `${25 * current_page}vw`)) {
        if(parseInt(left.style.width) < 25 * current_page) {
            left.style.width = `${parseInt(left.style.width) + 1}vw`
        } else {
            left.style.width = `${parseInt(left.style.width) - 1}vw`
        }
    }
    if(!(background.style.left == `${-20 * (current_page + 1)}vw`)) {
        if(parseInt(background.style.left) < -20 * (current_page + 1)) {
            background.style.left = `${parseInt(background.style.left) + 1}vw`
        } else {
            background.style.left = `${parseInt(background.style.left) - 1}vw`
        }
    }
    setTimeout(animateTo, 5)
}