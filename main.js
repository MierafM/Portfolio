var accItem = document.getElementsByClassName('resSection');
var accHD = document.getElementsByClassName('resHeading');

var i;
function maintainAcc(){
  for (i = 0; i < accHD.length; i++) {

        accHD[i].addEventListener('click', toggleItem, false);

    }
  for (i = 0; i < accHD.length; i++) {

          accHD[i].addEventListener('focus', toggleItem, false);

      }
    function toggleItem() {
      console.log('function');
        var itemClass = this.parentNode.className;
        for (i = 0; i < accItem.length; i++) {
            accItem[i].className = 'resSection close';
        }
        if (itemClass == 'resSection close') {
            this.parentNode.className = 'resSection open';
        }
    }
}

function manageLink(){
  console.log('in');
  var mainLinks = document.querySelectorAll('li.projectNav');
  Array.prototype.forEach.call(mainLinks, function(element, i){
    element.querySelector('a').addEventListener('click',
    function(event){
      console.log('in in');
      document.getElementById('subnav').classList.toggle('hide')
      //toggle accessability here
      event.preventDefault();
    });
  });

}
