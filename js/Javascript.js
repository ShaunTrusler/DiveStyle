var slideIndex = 0;
var slides = document.getElementsByClassName('slideshow');
var timer;

function showSlides(){
	var myVideo = document.getElementById('advid');
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
	timer = setTimeout(showSlides, 25000);
}

function selectSlide(number){
	var myVideo = document.getElementById('advid');
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

function showModal(id){
	document.getElementById(id).style.display = "block";
}

function hideModal(id){
	document.getElementById(id).style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
	hideModal('DSD-Modal');
  }
}