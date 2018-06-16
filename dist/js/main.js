


var radio = document.getElementsByClassName("radioNav__item");
var nav = document.getElementById("navControl");
var slider = document.getElementById("sliderJs");
var bannerControl = document.getElementById("bannerControl");
var bannerVideo = document.getElementById("bannerVideo");
console.log(bannerVideo);

var count = 0;
const img = ['./images/1.jpg', './images/2.jpg', "./images/3.jpg", "./images/4.jpg"]
nav.addEventListener("click", function (e) {

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
    }

  
})

bannerControl.addEventListener('click',function(e){
    if(e.target.id == "bannerControl"){
       
        bannerVideo.play(); 
        bannerControl.style.display="none";
        document.getElementsByClassName("banner__video")[0].style.opacity="1";
    } 
      
    })
    bannerVideo.addEventListener('ended',function(e){
        document.getElementsByClassName("banner__video")[0].style.opacity="0.5";
        bannerControl.style.display="flex";
        
    },false)
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5cbnZhciByYWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJyYWRpb05hdl9faXRlbVwiKTtcbnZhciBuYXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdkNvbnRyb2xcIik7XG52YXIgc2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGlkZXJKc1wiKTtcbnZhciBiYW5uZXJDb250cm9sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJDb250cm9sXCIpO1xudmFyIGJhbm5lclZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYW5uZXJWaWRlb1wiKTtcbmNvbnNvbGUubG9nKGJhbm5lclZpZGVvKTtcblxudmFyIGNvdW50ID0gMDtcbmNvbnN0IGltZyA9IFsnLi9pbWFnZXMvMS5qcGcnLCAnLi9pbWFnZXMvMi5qcGcnLCBcIi4vaW1hZ2VzLzMuanBnXCIsIFwiLi9pbWFnZXMvNC5qcGdcIl1cbm5hdi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcblxuICAgIGlmIChlLnRhcmdldC5pZCA9PSBcImNvbnRyb2xMZWZ0XCIgfHwgZS50YXJnZXQuaWQgPT0gXCJhcnJvd0xlZnRcIikge1xuXG4gICAgICAgIGNvdW50IC09IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvdW50KVxuICAgICAgICBpZiAoY291bnQgPCAwKSB7XG4gICAgICAgICAgICBjb3VudCA9IGltZy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGNvdW50KVxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgcmFkaW8ubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAocmFkaW9baW5kZXhdLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXYnKSkge1xuICAgICAgICAgICAgICAgIHJhZGlvW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByYWRpb1tjb3VudF0uY2xhc3NMaXN0LmFkZChcImFjdGl2XCIpO1xuICAgICAgICBzbGlkZXIuc3R5bGUuYmFja2dyb3VuZCA9IGB1cmwoJHtpbWdbY291bnRdfSlgO1xuICAgICAgICBzbGlkZXIuc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9IFwibm8tcmVwZWF0XCI7XG4gICAgICAgIHNsaWRlci5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiMTAwJSAxMDAlXCI7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PSBcImNvbnRyb2xSaWdodFwiIHx8IGUudGFyZ2V0LmlkID09IFwiYXJyb3dSaWdodFwiKSB7XG4gICAgICAgIGNvdW50ICs9IDE7XG5cblxuXG4gICAgICAgIHJhZGlvW2NvdW50IC0gMV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2XCIpXG4gICAgICAgIGlmIChjb3VudCA9PSA0KSB7XG4gICAgICAgICAgICBjb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coY291bnQpXG4gICAgICAgIHNsaWRlci5zdHlsZS5iYWNrZ3JvdW5kID0gYHVybCgke2ltZ1tjb3VudF19KWA7XG4gICAgICAgIHNsaWRlci5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gXCJuby1yZXBlYXRcIjtcbiAgICAgICAgc2xpZGVyLnN0eWxlLmJhY2tncm91bmRTaXplID0gXCIxMDAlIDEwMCVcIjtcbiAgICAgICAgcmFkaW9bY291bnRdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdlwiKVxuICAgIH1cblxuICBcbn0pXG5cbmJhbm5lckNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGUpe1xuICAgIGlmKGUudGFyZ2V0LmlkID09IFwiYmFubmVyQ29udHJvbFwiKXtcbiAgICAgICBcbiAgICAgICAgYmFubmVyVmlkZW8ucGxheSgpOyBcbiAgICAgICAgYmFubmVyQ29udHJvbC5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmFubmVyX192aWRlb1wiKVswXS5zdHlsZS5vcGFjaXR5PVwiMVwiO1xuICAgIH0gXG4gICAgICBcbiAgICB9KVxuICAgIGJhbm5lclZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJyxmdW5jdGlvbihlKXtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJhbm5lcl9fdmlkZW9cIilbMF0uc3R5bGUub3BhY2l0eT1cIjAuNVwiO1xuICAgICAgICBiYW5uZXJDb250cm9sLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCI7XG4gICAgICAgIFxuICAgIH0sZmFsc2UpIl0sImZpbGUiOiJtYWluLmpzIn0=
