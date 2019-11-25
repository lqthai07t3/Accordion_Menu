var accordionMnu = document.getElementsByClassName('accMnu');


for(var i = 0; i < accordionMnu.length; i++){
	Hienthi(accordionMnu[i]);
}

function Hienthi(element){
	var btn = element.ChildNodes[1];
	var menu = element.ChildNodes[3];

	btn.addEventListener('click', function(event){
		event.preventDefault();
		
	});
}