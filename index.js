// funk1 green lite!
function getFirstSelector(selector) {
  const firstNest = document.querySelector(selector);
  return firstNest;
}

// funk2 make it rain
function nestedTarget() {
  const nestT = document.querySelector('#nested').querySelector('.target');
  return nestT;
}

//funk3 what it do boo boo?
function deepestChild() {
  const deepC = document.querySelector('#grand-node div div div div');
  return deepC;
}

//funk4 like fershure tho
function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < rankedLists.length; i++) {
     rankedLists[i].innerHTML = (i + n)
  } return rankedLists;
}




