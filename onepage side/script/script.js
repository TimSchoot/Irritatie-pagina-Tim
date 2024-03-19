function showPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

window.onload = function () {
    showPopup();
    setInterval(showPopup, 10000);
};
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('videoroll');
    document.getElementById('foto-iphone').addEventListener('click', function() {
        video.style.display = 'block';
        video.muted = !video.muted;
        if (!video.muted) {
            video.play();
        }
    });
});
window.onload = function() {
    const spinningPicture = document.getElementById('spinningPicture');
    let rotationAngle = 0;
  
    function spinPicture() {
      rotationAngle += 2;
      spinningPicture.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
      requestAnimationFrame(spinPicture);
    }
  
    spinPicture();
  };
  function showPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

window.onload = function () {
    showPopup();
    setInterval(showPopup, 10000);
    const spinningPicture = document.getElementById('spinningPicture');
    let rotationAngle = 0;
  
    function spinPicture() {
      rotationAngle += 2;
      spinningPicture.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
      requestAnimationFrame(spinPicture);
    }
  
    spinPicture();
};
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('videoroll');
    document.getElementById('foto-iphone').addEventListener('click', function() {
        video.style.display = 'block';
        video.muted = !video.muted;
        if (!video.muted) {
            video.play();
        }
    });
});

var popup;

function openPersistentPopup() {
  var url = 'https://www.lingscars.com/'; 
  var width = 500;
  var height = 300;
  var left = (screen.width - width) / 2;
  var top = (screen.height - height) / 2;


  if (!popup || popup.closed) {
    popup = window.open(url, 'popup', 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
  } else {
    popup.focus();  
  }
}


setInterval(function() {
  if (!popup || popup.closed) {
    openPersistentPopup();
  }
}, 10000);