

// loader js

document.onreadystatechange = function () {
if (document.readyState !== "complete") {
    document.querySelector(
        "body").style.visibility = "hidden";
    document.querySelector(
        "#preloader").style.visibility = "visible";
} else {
    document.querySelector(
        "#preloader").style.display = "none";
    document.querySelector(
        "body").style.visibility = "visible";
}
};


// vertical slider

// class Slider {
//   constructor(options) {
//     this.sections = document.querySelectorAll(options.section);
//     this.navigation = document.querySelector(options.dots);

//     this.navigation.addEventListener('click', this.scrollToSection.bind(this));
//     window.addEventListener('scroll', this.setDotStatus.bind(this));
//   }

//   removeDotStyles() {
//     const dots = this.navigation;
//     const is_active = dots.querySelector('.is-active');

//     if (is_active != null) {
//       is_active.classList.remove('is-active');
//     }
//   }

//   setDotStatus() {
//     const scroll_position = window.scrollY;
//     const dots = Array.from(this.navigation.children);

//     this.sections.forEach((section, index) => {
//       const half_window = window.innerHeight / 2;
//       const section_top = section.offsetTop;

//       if (scroll_position > section_top - half_window && scroll_position < section_top + half_window) {
//         this.removeDotStyles();
//         dots[index].classList.add('is-active');
//       }
//     })
//   }

//   scrollToSection(e) {
//     const dots = Array.from(this.navigation.children);
//     const window_height = window.innerHeight;

//     dots.forEach((dot, index) => {
//       if (dot == e.target) {

//         window.scrollTo({
//           top: window_height * index,
//           behavior: 'smooth',
//         });
//       }
//     });
//   }
// }

// new Slider({
//   section: '.section',
//   dots: '#js-dots',
// });




// fade effects

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

// tabs togggling

  function activeTab(evt, id) {
           
    // Get all elements with class="tablinks" and remove the class "active"
     let tabactive = document.getElementsByClassName("TabButtonSelected");
     tabactive[0].className = tabactive[0].className.replace(" TabButtonSelected", "");

     document.getElementById(id).style.display = "block";
     evt.currentTarget.className += " TabButtonSelected";

     displaySection(evt,id)
 }
 
function displaySection(evt, id) {

     let tabactive = document.getElementsByClassName("tab-section");
     tabactive[0].className = tabactive[0].className.replace(" d-chart-show", "d-chart-n");
     // add below line of codes
     [...document.querySelectorAll('div.tab-section')].forEach(item => item.style.display='none')
     document.getElementById("Section" + id).style.display = "block";
     evt.currentTarget.className += " d-chart-show";

}


// product detail select option div toggle

$(document).on('change', '.div-toggle', function() {
  var target = $(this).data('target');
  var show = $("option:selected", this).data('show');
  $(target).children().addClass('hide');
  $(show).removeClass('hide');
});
$(document).ready(function(){
	$('.div-toggle').trigger('change');
});

document.addEventListener("DOMContentLoaded", function() {
  const selectElement = document.querySelector('.div-toggle');
  const breadcrumbActive = document.querySelector('.breadcrumb-item.active');
  const productDivs = document.querySelectorAll('.my-info-1 > div');

  // Function to show the appropriate product div
  function showProductDiv(productName) {
    productDivs.forEach(function(div) {
          if (div.classList.contains(productName)) {
              div.classList.remove('hide');
          } else {
              div.classList.add('hide');
          }
      });
  }

  function updateBreadcrumbValue(breadcrumbValue) {
    breadcrumbActive.innerHTML = breadcrumbValue;
  }

  // Extract the product name from the query parameter
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const productName = urlParams.get('product');
  
  if(productName.includes('sparkle')){
    const selected = productName.replace("sparkle", "Sparkle Interior Emulsion");
    selectElement.value = selected;
    breadcrumbActive.innerHTML = selected;
  }
  
  if(productName.includes('regal')){
    const selected = productName.replace("regal", "Regal Interior Emulsion");
    selectElement.value = selected;
    breadcrumbActive.innerHTML = selected;
  }
  
  if(productName.includes('prime')){
    const selected = productName.replace("prime", "Prime Interior Emulsion");
    selectElement.value = selected;
    breadcrumbActive.innerHTML = selected;
  }
  
  if(productName.includes('elite')){
    const selected = productName.replace("elite", "Elite Exterior Emulsion");
    selectElement.value = selected;
    breadcrumbActive.innerHTML = selected;
  }
  
  if(productName.includes('maestro')){
    const selected = productName.replace("maestro", "Maestro Exterior Emulsion");
    selectElement.value = selected;
    breadcrumbActive.innerHTML = selected;
  }
  
  if(productName.includes('cromex')){
    const selected = productName.replace("cromex", "Cromex Exterior Emulsion");
    selectElement.value = selected;
    breadcrumbActive.innerHTML = selected;
  }
  
  if(productName.includes('primer')){
    const selected = productName.replace("primer", "Primer");
    selectElement.value = selected;
    breadcrumbActive.innerHTML = selected;
  }
  
  if(productName.includes('protect-primer')){
    const selected = productName.replace("protect-primer", "Protect Primer");
    selectElement.value = selected;
    breadcrumbActive.innerHTML = selected;
  }
  
  if(productName.includes('wall-putty')){
    const selected = productName.replace("wall-putty", "Wall Putty");
    selectElement.value = selected;
    breadcrumbActive.innerHTML = selected;
  }
  
  // Set the selected option based on the product name
  if (productName) {
      // selectElement.value = productName;
      showProductDiv(productName);
  }

  // Event listener to show the product when an option is selected
  selectElement.addEventListener('change', function() {
      const selectedValue = selectElement.value;
      const breadcrumbValue = selectElement.value;
      showProductDiv(selectedValue);
      updateBreadcrumbValue(breadcrumbValue);
  });

});


// mobile menu

$( document ).ready(function() {

  $( ".cross" ).hide();
  $( ".menu" ).hide();
  $( ".hamburger" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".hamburger" ).hide();
  $( ".cross" ).show();
  });
  });
  
  $( ".cross" ).click(function() {
  $( ".menu" ).slideToggle( "slow", function() {
  $( ".cross" ).hide();
  $( ".hamburger" ).show();
  });
  });
  
  });

 // Close out sub menu
 $('.sub__close').click(function(e) {
  e.preventDefault();
  
  $(this).parent().parent().removeClass('is-active');
});

// Trigger sub menu
$('.menu ul .nav__submenu').click(function(e) {
  e.preventDefault();
  
  $(this).siblings().addClass('is-active');
});

// window size banner
  
function jqUpdateSize(){
  // Get the dimensions of the viewport
  // var width = $(window).width();
  var height = $(window).height();

  // $('#jqWidth').html(width);
  $('#jqHeight').html(height);

  $('.slide-show-container').css({ 
  height:  $(window).height(),
  overflow:" hidden"});

}
$(document).ready(jqUpdateSize);    // When the page first loads
$(window).resize(jqUpdateSize);     // When the browser changes size
