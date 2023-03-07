
// 모달 띄우기
const modal = document.getElementById("modal_add_box");
const buttonAddFeed = document.getElementById("add_box");
buttonAddFeed.addEventListener("click", e => {
    modal.style.top = window.pageYOffset + 'px'
    modal.style.display = "flex";               // 클릭시 스타일 변경
    document.body.style.overflowY = "hidden"; //스크롤 없앰
});

// 모달 닫기
const buttonCloseModal = document.getElementById("close_modal");
buttonCloseModal.addEventListener("click", e => {
    modal.style.display = "none";
    document.body.style.overflowY = "visible";
});
