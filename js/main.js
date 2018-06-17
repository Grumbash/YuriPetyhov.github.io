var radio = document.getElementsByClassName("radioNav__item");
var nav = document.getElementById("navControl");
var slider = document.getElementById("sliderJs");
var bannerControl = document.getElementById("bannerControl");
var bannerVideo = document.getElementById("bannerVideo");
console.log(bannerVideo);

var count = 0;
const img = ['./images/1.png', './images/2.png', "./images/3.png", "./images/4.png"]
slider.addEventListener("click", function (e) {
    if(e.target.id =='infoBth'){
        window.location.replace("https://grumbash.github.io/");
    };

    if (e.target.id == "controlLeft" || e.target.id == "arrowLeft") {

        count -= 1;
        console.log(count)
        if (count < 0) {
            count = img.length - 1;
        }
        console.log(count)
        for (var index = 0; index < radio.length; index++) {
            if (radio[index].classList.contains('activ')) {
                radio[index].classList.remove("activ");
            }

        }
        radio[count].classList.add("activ");
        slider.style.background = `url(${img[count]})`;
        slider.style.backgroundRepeat = "no-repeat";
        slider.style.backgroundSize = "100% 100%";
    } else if (e.target.id == "controlRight" || e.target.id == "arrowRight") {
        count += 1;



        radio[count - 1].classList.remove("activ")
        if (count == 4) {
            count = 0;
        }
        console.log(count)
        slider.style.background = `url(${img[count]})`;
        slider.style.backgroundRepeat = "no-repeat";
        slider.style.backgroundSize = "100% 100%";
        radio[count].classList.add("activ")
    };


})

bannerControl.addEventListener('click',function(e){
    if(e.target.id === "bannerControl"){

        bannerVideo.play();
        bannerControl.style.display="none";
        bannerVideo.style.opacity="1";
    }

});
bannerVideo.addEventListener('ended',function(e){
    bannerVideo.style.opacity="0.5";
    bannerControl.style.display="flex";

},false)

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciByYWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyYWRpb05hdl9faXRlbVwiKTtcbnZhciBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdkNvbnRyb2xcIik7XG52YXIgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGlkZXJKc1wiKTtcbnZhciBiYW5uZXJDb250cm9sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJDb250cm9sXCIpO1xudmFyIGJhbm5lclZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJWaWRlb1wiKTtcbmNvbnNvbGUubG9nKGJhbm5lclZpZGVvKTtcblxudmFyIGNvdW50ID0gMDtcbmNvbnN0IGltZyA9IFsnLi9pbWFnZXMvMS5wbmcnLCAnLi9pbWFnZXMvMi5wbmcnLCBcIi4vaW1hZ2VzLzMucG5nXCIsIFwiLi9pbWFnZXMvNC5wbmdcIl1cbnNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZihlLnRhcmdldC5pZCA9PSdpbmZvQnRoJyl7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKFwiaHR0cHM6Ly9ncnVtYmFzaC5naXRodWIuaW8vXCIpO1xuICAgIH07XG5cbiAgICBpZiAoZS50YXJnZXQuaWQgPT0gXCJjb250cm9sTGVmdFwiIHx8IGUudGFyZ2V0LmlkID09IFwiYXJyb3dMZWZ0XCIpIHtcblxuICAgICAgICBjb3VudCAtPSAxO1xuICAgICAgICBjb25zb2xlLmxvZyhjb3VudClcbiAgICAgICAgaWYgKGNvdW50IDwgMCkge1xuICAgICAgICAgICAgY291bnQgPSBpbWcubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhjb3VudClcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHJhZGlvLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKHJhZGlvW2luZGV4XS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2JykpIHtcbiAgICAgICAgICAgICAgICByYWRpb1tpbmRleF0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgcmFkaW9bY291bnRdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdlwiKTtcbiAgICAgICAgc2xpZGVyLnN0eWxlLmJhY2tncm91bmQgPSBgdXJsKCR7aW1nW2NvdW50XX0pYDtcbiAgICAgICAgc2xpZGVyLnN0eWxlLmJhY2tncm91bmRSZXBlYXQgPSBcIm5vLXJlcGVhdFwiO1xuICAgICAgICBzbGlkZXIuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcIjEwMCUgMTAwJVwiO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT0gXCJjb250cm9sUmlnaHRcIiB8fCBlLnRhcmdldC5pZCA9PSBcImFycm93UmlnaHRcIikge1xuICAgICAgICBjb3VudCArPSAxO1xuXG5cblxuICAgICAgICByYWRpb1tjb3VudCAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdlwiKVxuICAgICAgICBpZiAoY291bnQgPT0gNCkge1xuICAgICAgICAgICAgY291bnQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGNvdW50KVxuICAgICAgICBzbGlkZXIuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtpbWdbY291bnRdfSlgO1xuICAgICAgICBzbGlkZXIuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9IFwibm8tcmVwZWF0XCI7XG4gICAgICAgIHNsaWRlci5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiMTAwJSAxMDAlXCI7XG4gICAgICAgIHJhZGlvW2NvdW50XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZcIilcbiAgICB9O1xuXG5cbn0pXG5cbmJhbm5lckNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgIGlmKGUudGFyZ2V0LmlkID09PSBcImJhbm5lckNvbnRyb2xcIil7XG5cbiAgICAgICAgYmFubmVyVmlkZW8ucGxheSgpO1xuICAgICAgICBiYW5uZXJDb250cm9sLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XG4gICAgICAgIGJhbm5lclZpZGVvLnN0eWxlLm9wYWNpdHk9XCIxXCI7XG4gICAgfVxuXG59KTtcbmJhbm5lclZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJyxmdW5jdGlvbihlKXtcbiAgICBiYW5uZXJWaWRlby5zdHlsZS5vcGFjaXR5PVwiMC41XCI7XG4gICAgYmFubmVyQ29udHJvbC5zdHlsZS5kaXNwbGF5PVwiZmxleFwiO1xuXG59LGZhbHNlKVxuIl0sImZpbGUiOiJtYWluLmpzIn0=
