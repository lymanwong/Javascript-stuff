function loadImage(url, callback) {
  var image = new Image()
  image.onload = function () {
    callback(null, image)
  }
  image.onerror = function () {
    var message = 'Oops. Could not load image at ' + url
    callback( new Error(msg))
  }
  img.src = url
}

var addImg = (src) => {
  var imgElement = document.createElement("img")
  imgElement.src = img.src
  document.body.appendChild(imgElement)
}

loadImageCallback('images/truck1.jpg', (error, img1) => {
  if(error) throw error;
  addImg(img1.src)
  loadImageCallback('images/truck2.jpg', (error, img2) => {
    if(error) throw error;
    addImg(img2.src)
    loadImageCallback('images/truck3.jpg', (error, img3) => {
      if(error) throw error;
      addImg(img3.src)
    })
  })
})
