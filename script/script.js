var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
var collapseList = collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})

var popover = new bootstrap.Popover(element, {
    popperConfig: function (defaultBsPopperConfig) {
      // var newPopperConfig = {...}
      // use defaultBsPopperConfig if needed...
      // return newPopperConfig
    }
  })
  myPopover.toggle()