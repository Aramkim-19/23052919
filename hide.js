// 이미지 사라지는

function handleImageClick(imageId) {
  var image = document.getElementById(imageId);
  image.style.display = "none";
  // 알트창 표시
  var customAlert = document.getElementById("customAlert");
  customAlert.style.display = "block";
}

var clickableImages = document.querySelectorAll(".clickable-image");
clickableImages.forEach(function (image) {
  image.addEventListener("click", function () {
    var imageId = this.id;
    handleImageClick(imageId);
  });

  // 이미지 랜덤 변경

  var imageArray = [
    "da/b1.png",
    "da/b2.png",
    "da/b3.png",
    "da/b6.png",
    "da/b7.png",
    "da/b8.png",
    "da/b10.png",
  ];

  function changeImageRandomly() {
    var imageElements = document.querySelectorAll("img.random"); // random 클래스 있는 이미지만
    imageElements.forEach(function (imageElement) {
      var randomIndex = Math.floor(Math.random() * imageArray.length);
      imageElement.src = imageArray[randomIndex];
    });
  }

  window.onload = function () {
    changeImageRandomly(); // 새로고침 시 이미지 변경 체인지 버튼 html에 안함
    var buttonElement = document.getElementById("changeButton");
    buttonElement.addEventListener("click", changeImageRandomly);
  };
});

// // 이미지 사라지는
// function handleImageClick(imageId) {
//     var image = document.getElementById(imageId);
//     image.style.display = 'none';

//     // 랜덤으로 알람 선택
//     var randomAlertNumber = Math.floor(Math.random() * 2) + 1; // 1 또는 2를 랜덤으로 선택
//     var selectedAlertId = 'customAlert' + randomAlertNumber;
//     var selectedAlert = document.getElementById(selectedAlertId);
//     selectedAlert.style.display = 'block';
// }

// var clickableImages = document.querySelectorAll('.clickable-image');
// clickableImages.forEach(function(image) {
//     image.addEventListener('click', function() {
//         var imageId = this.id;
//         handleImageClick(imageId);
//     });
// });
