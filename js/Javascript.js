var slideIndex = 0;
var slides = document.getElementsByClassName('slideshow');
var myVideo = document.getElementById('advid');


function showSlides(){
	myVideo.pause();
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = 'none';
	}
	slideIndex++;
	if(slideIndex > slides.length){slideIndex = 1;}
	slides[slideIndex - 1].style.display = 'block';						
	if(slideIndex == slides.length){
		myVideo.currentTime = 0;

	}
	setTimeout(showSlides, 20000);
}

function selectSlide(number){
	myVideo.pause();
	slides[slideIndex - 1].style.display = 'none';			
	slideIndex = slideIndex + number;
	if(slideIndex <= 0){slideIndex = slides.length;}
	if(slideIndex > slides.length){slideIndex = 1;}
	slides[slideIndex - 1].style.display = 'block';
	if(slideIndex == slides.length){
		myVideo.currentTime = 0;

	}
}			