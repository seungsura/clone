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

// image drag modal
const dropArea = document.querySelector(".drop_area");

dropArea.addEventListener("dragover", e => {
    e.preventDefault();
    dropArea.classList.add("dragover");
});

dropArea.addEventListener("dragleave", e => {
    e.preventDefault();
    dropArea.classList.remove("dragover");
});

dropArea.addEventListener("drop", e => {
    e.preventDefault();
    dropArea.classList.remove("dragover");

    const file = e.dataTransfer.files[0];

    if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = () => {
            const image = new Image();
            image.src = reader.result;

            image.onload = () => {
                const maxWidth = 700;
                const maxHeight = 500;
                const width = image.width;
                const height = image.height;
                let newWidth = width;
                let newHeight = height;

                if (width > height && width > maxWidth) {
                    newWidth = maxWidth;
                    newHeight = Math.floor(height / (width / maxWidth));
                } else if (height > maxHeight) {
                    newHeight = maxHeight;
                    newWidth = Math.floor(width / (height / maxHeight));
                }

                const canvas = document.createElement("canvas");
                canvas.width = newWidth;
                canvas.height = newHeight;

                const ctx = canvas.getContext("2d");
                ctx.drawImage(image, 0, 0, newWidth, newHeight);

                const img = document.createElement("img");
                img.src = canvas.toDataURL("image/png");

                const uploadContainer = document.querySelector(".modal_image_upload");
                uploadContainer.innerHTML = "";
                uploadContainer.appendChild(img);
            };
        };
    }
});