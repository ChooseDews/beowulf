angular.module('app').factory('$print', function() {
  return function(url) {
    url = '/public/labels/1Z11AF180399649526ups.png';
    myWindow = window.open(url, "Label", "toolbar=no,scrollbars=no,resizable=no,width=500,height=750");
    myWindow.document.close() // missing code
    myWindow.focus()
    myWindow.print()
    setTimeout(function() {

      myWindow.close();

    }, 1000);

  }


});