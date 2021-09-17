window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
});

var i = 0;
        var images = [];
        var time = 2600;

        images[0] = './assets/image/bestfriend.jpg';
        images[1] = './assets/image/class3.jpg';

        function changeImg() {
            document.slide.src = images[i];
            if(i < images.length - 1){
                i++;
            } else {
                i = 0;
            }

            setTimeout("changeImg()", time);
        }

window.onload = changeImg;

alert('Xin chào, chào mừng bạn đến với Portfolio của thư, thư hy vọng bạn sẽ thích nó!❤❤');