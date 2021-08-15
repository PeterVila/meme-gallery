var imageUrls = [
    'https://img.ifunny.co/images/b60aeb40f4bab0ab29dcb04b58433e371a763e7497298499670ddf7c3e7abf35_1.webp',
    'https://img.ifunny.co/images/cf0fa34ef3cf4b3b4b89632bbf21b47923b30db71dd0af5b2caf12c5adbb31e8_1.webp',
    'https://img.ifunny.co/images/d55ea887c14d632125ddc4f23d07ee68341552bf99928e76290fa4fa7863acad_1.webp',
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg'
];
var gallery = document.querySelector("main");
var imageUrlInput = document.querySelector("input");
var addImageButton = document.querySelector("button");

addImageButton.addEventListener("click", function() {
    console.log(imageUrlInput.value);
    if (imageUrlInput.value !== '') {
        imageUrls.push(imageUrlInput.value);
    }
    imageUrlInput.value = "";
    updateGallery();
})

function updateGallery() {
    gallery.innerHTML = ''
    for (var i = 0; i < imageUrls.length; i++) {
        var imageElement = document.createElement("img");
        imageElement.className = 'gallery-image';
        imageElement.src = imageUrls[i];
        gallery.appendChild(imageElement);
    }
}

updateGallery();