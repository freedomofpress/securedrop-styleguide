// $(function(){
//     var current = location.href;
//     $('.list-group-item a').each(function(){
//         var $this = $(this);
// 				var route = $this[0].href.split("/").pop();
//
// 				var location = current.split("/").indexOf(route);
// 				console.log(current);
// 				console.log(route);
// 				console.log(location);
//
// 				if(location >= 0) {
// 					$('.list-group-item a').addClass('active');
// 				}
//     })
// });

$(document).ready(function () {
  var listItems = $('.sidebar__link__darkGray');
  $.each(listItems, function (key, litem) {
      var aElement = $(litem)[0];

      if(aElement.href == document.URL.split('#')[0]) {
          $(litem).addClass('active');
      }
	$("#sidebar-left a li").click(function() {
  // Reset them
  $("#sidebar-left a li").removeClass("active");
  // Add to the clicked one only
  $(this).addClass("active");
});
  });
});

// $(function() {
	// var listItems = $('.rb-main-sidebar');
	// $.each(listItems, function (key, litem) {
	// 		var aElement = $(this).children(litem)[0];
	// 		console.log(aElement.href, document.URL.split('#')[0].slice(0, -1));
	// 		if(aElement.href == document.URL.split('#')[0].slice(0, -1)) {
	// 				$(litem).addClass('active');
	// 		}
	// });
// })

$('.rb-sidebar').on('click',function() {
    $('.rb-sidebar.active').removeClass('active');
    $(this).addClass('active');
});

// Get all the buttons in a node list
var theButtons = document.querySelectorAll(".snippet");

// Turn node list into a JS Array
var buttonArray = Array.from(theButtons);

// Loop over the buttons and give each its click event handler
buttonArray.forEach(function(button){
  button.addEventListener("click", function(){ 
    // We will pass a reference to the current button to the function
    myFunction(this); 
  });
});

// The function now expects to be passed a reference to the button that was clicked
function myFunction(element) { 
  // Get a reference to div that follows the button and then search that div
  // for the first pre element inside of it:
  var result = element.nextElementSibling.querySelector("pre");
  
  // All we need to do is toggle the visibility of that pre element
  result.classList.toggle("code-snippet");
}
