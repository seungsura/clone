// pop up modal
const modal = document.getElementById("modal_add_box");
const buttonAddFeed = document.getElementById("add_box");

buttonAddFeed.addEventListener("click", e => {
  modal.style.top = window.pageYOffset + 'px'
  modal.style.display = "flex"; // change style on click
  document.body.style.overflowY = "hidden"; // remove scroll
});

// close modal
const buttonCloseModal = document.getElementById("close_modal");

buttonCloseModal.addEventListener("click", e => {
  modal.style.display = "none";
  document.body.style.overflowY = "visible";
});

// drag and drop image upload
const dropArea = document.querySelector('.modal_image_upload');
const imagePreview = document.querySelector('#image_preview');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false)
})

function preventDefaults (e) {
  e.preventDefault()
  e.stopPropagation()
}

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
  let dt = e.dataTransfer;
  let file = dt.files[0];
  let reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function() {
    let img = new Image();
    img.src = reader.result;
    imagePreview.appendChild(img);
  };
}
