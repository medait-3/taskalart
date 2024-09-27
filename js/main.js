    ////////////////////////////////////////////////////////////
      //  navbar
      document.addEventListener('DOMContentLoaded', function() {
        const toggleButton = document.querySelector('[data-collapse-toggle]');
        const navbarMenu = document.getElementById('navbar-sticky');
        const navbar = document.getElementById('navbar');
    
        toggleButton.addEventListener('click', function() {
          navbarMenu.classList.toggle('hidden');
        });
      });
    ///////////////////////////////////////////////////////////////////////////////
          // change year auto in footer
        document.getElementById('year').textContent = new Date().getFullYear();
    ///////////////////////////////////////////////////////////////////////////////
      // progicts slide
    $(document).ready(function(){
      var owl = $(".proj-carousel").owlCarousel({
        items:1,
        loop:true,    
        animateOut: 'slideOutDown',
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        
      });
      // Custom Next Button
      $("#customNextBtn").click(function() {
        owl.trigger('next.owl.carousel');
      });// Custom Back Button
      $("#customBacktBtn").click(function() {
        owl.trigger('prev.owl.carousel');
      });
    });
    ///////////////////////////////////////////////////////////////////////////////
      //pop up
      window.openModal = function(modalId) {
            document.getElementById(modalId).style.display = 'block'
            document.getElementsByTagName('body')[0].classList.add('overflow-y-hidden')
        }
    
        window.closeModal = function(modalId) {
            document.getElementById(modalId).style.display = 'none'
            document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
        }
    
        // Close all modals when press ESC
        document.onkeydown = function(event) {
            event = event || window.event;
            if (event.keyCode === 27) {
                document.getElementsByTagName('body')[0].classList.remove('overflow-y-hidden')
                let modals = document.getElementsByClassName('modal');
                Array.prototype.slice.call(modals).forEach(i => {
                    i.style.display = 'none'
                })
            }
        };
        //add attachment
        document.getElementById('attachment-button').addEventListener('click', () => {
        document.getElementById('attachment').click();
        });
        document.addEventListener('DOMContentLoaded', function () {
        const selectBox = document.getElementById('selectedItems');
        const dropdownToggle = document.getElementById('dropdownToggle');
        const dropdown = document.getElementById('dropdownItems');
        const items = dropdown.querySelectorAll('li');
        const selectedValues = [];
    
        // Toggle dropdown visibility when selectBox or SVG is clicked
        const toggleDropdown = function (event) {
            event.stopPropagation(); // Prevent the click from propagating to document
            dropdown.classList.toggle('hidden');
        };
    
        selectBox.addEventListener('click', toggleDropdown);
        dropdownToggle.addEventListener('click', toggleDropdown);
    
        // Handle item selection in the dropdown
        items.forEach(item => {
            item.addEventListener('click', function (event) {
                event.stopPropagation(); // Prevent the click from closing the dropdown
                const checkbox = item.querySelector('input[type="checkbox"]');
                checkbox.checked = !checkbox.checked;
    
                if (checkbox.checked) {
                    selectedValues.push(item.dataset.value);
                } else {
                    const index = selectedValues.indexOf(item.dataset.value);
                    if (index > -1) {
                        selectedValues.splice(index, 1);
                    }
                }
    
                selectBox.textContent = selectedValues.join(', ') || 'Select your services...';
            });
        });
    
        // Hide dropdown when clicking outside of it
        document.addEventListener('click', function () {
            dropdown.classList.add('hidden');
        });
    
        // Prevent dropdown from hiding when clicking inside it
        dropdown.addEventListener('click', function (event) {
            event.stopPropagation();
        });
    });
/////////////////////////////////////////////////////////
        //change image lightimage
        window.onload = function() {
          let image = document.getElementById('lightimage');
          let images = ['img/about-img/mr-mohamed.png', 'img/about-img/mr-mohamed2.png'];
      
          setInterval(function() {
              let random = Math.floor(Math.random() * images.length); // Generate random index
              image.src = images[random]; // Set image source to the randomly chosen image
          }, 500); // Change image every second
      };
////////////////////////////////////////////////////////////////////
      // slide clients says 
      $(document).ready(function(){
        var owl = $('.Clientsays-carousel').owlCarousel({
           loop:true,
           autoplay:true,
           autoplayTimeout:1000,
           autoplayHoverPause:true,
           responsive:{
               0:{
                   items:2
               },
               600:{
                   items:3
               },
               1000:{
                   items:6
               }
            }
       });
             // Custom Next Button
             $("#clientNextBtn").click(function() {
               owl.trigger('next.owl.carousel');
             });// Custom Back Button
             $("#clientBacktBtn").click(function() {
               owl.trigger('prev.owl.carousel');
             });
           });
///////////////////////////////////////////////////////////
// AOS ANIMATION
AOS.init({

  duration: 800,
  anchorPlacement: 'center-bottom'
});
/////////////////////////////////////////////////////////////