function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let list = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = (i + n)
  }
}

function deepestChild(){
  let grand = document.getElementById('grand-node')
  let div = grand.children[0]
  while (div) {
    grand = div
    div = grand.children[0]
  }

}
