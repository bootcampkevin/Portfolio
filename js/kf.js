$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#333232', '#4BBFC3', '#333232', '#7BAABE', '#333232'],
    anchors: [
      'firstSection',
      'secondSection',
      'thirdSection',
      'fourthSection',
      'lastSection'
    ],
    menu: '#menu',
    navigation: true,
    navigationPosition: 'right',

    afterLoad: function(origin, destination, direction) {
      //section 2
      if (destination.index == 1) {
        document.querySelector('#section1').querySelector('img').style.left =
          0 + 'px';
        document
          .querySelector('#section1')
          .querySelector('p').style.opacity = 1;
      }

      //back to original state
      else if (origin && origin.index == 1) {
        document.querySelector('#section1').querySelector('img').style.left =
          130 + '%';
        document
          .querySelector('#section1')
          .querySelector('p').style.opacity = 0;
      }
      //section 1
      if (destination.index == 0) {
        $('#menu').hide();
      }
      //back to original state
      else if (origin && origin.index == 0) {
        $('#menu').show();
      }

      //   $('#moveSectionDown').click(function(e){
      //     e.preventDefault();
      //     $.fn.fullpage.moveSectionDown();
      // });
    }
  });

  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('particles.js loaded - callback');
  });


});
