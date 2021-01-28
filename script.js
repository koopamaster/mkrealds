var picturezone=document.getElementById('randompic');

function randint(n){
	return Math.floor(Math.random()*(n+1))
}



setInterval(
	function newpict() {

		let number=randint(7)+2;

		let src="pictures/screen"+number+".png";

		picturezone.setAttribute('src',src);
		


	},2500
)