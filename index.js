function play() {
    var pl1 = Math.floor(Math.random() * 6) + 1;
    var img1 = "dice" + pl1 + ".svg";
    document.querySelectorAll("img")[0].setAttribute("src", img1);

    var pl2 = Math.floor(Math.random() * 6) + 1;
    var img2 = "dice" + pl2 + ".svg";
    document.querySelectorAll("img")[1].setAttribute("src", img2);

    var result = document.getElementById("winn");
    if (pl1 > pl2) {
        result.innerHTML = "🎉Player 1 wins!🎉";
    }
    else if (pl2 > pl1) {
        result.innerHTML = "🎉Player 2 wins!🎉";
    }
    else {
        result.innerHTML = "😬It's a tie!😬";
    }
}