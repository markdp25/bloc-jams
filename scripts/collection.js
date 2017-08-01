window.onload = function () {

    var collectionContainer = document.getElementsByClassName('album-covers')[0];
    collectionContainer.innerHTML = '';

    for (var i = 0; i < 12; i++) {
      collectionContainer.innerHTML += collectionItemTemplate;
    }
}
