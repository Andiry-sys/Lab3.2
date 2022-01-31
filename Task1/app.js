let all = document.getElementsByTagName('td');
for (let i = 0; i < all.length; i++) {
  all[i].onmousemove = function () {
    this.style.background = 'orange';
  };
  all[i].onmouseleave = function () {
    return (this.style.background = 'rgb(250,229,229,)');
  };
}

let allblock = document.getElementsByTagName('th');
for (let i = 0; i < allblock.length; i++) {
  allblock[i].onmousemove = function () {
    this.style.background = 'orange';
  };
  allblock[i].onmouseleave = function () {
    return (this.style.background = 'rgb(250,229,229,)');
  };
}
