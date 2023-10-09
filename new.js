// 커서 안움직이면

var timeout;
var popupCount = localStorage.getItem("popupCount") || 0;

function displayPopup() {
  popupCount++;
  localStorage.setItem("popupCount", popupCount);

  var whiteBackground = document.getElementById("white-background");
  whiteBackground.style.display = "block";

  // Pop-up window text
  alert(`Infinite Circulation No.${popupCount}  :  움직임이 없습니다.`);

  // Web page reset after 0 seconds (immediately)
  setTimeout(function () {
    location.reload();
  }, 3000);

  setTimeout(function () {
    whiteBackground.style.display = "none";
  }, 5000);

  clearTimeout(timeout);
}

// Mouse stopped time
function startTimer() {
  timeout = setTimeout(displayPopup, 1000000);
}

document.addEventListener("mousemove", function () {
  clearTimeout(timeout);
  startTimer();
});

startTimer();
