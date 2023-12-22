// showSlides 함수의 변수 초기화
let current = 0;

// modalActive 함수의 변수 선언
let open = document.querySelector(".open");
let close = document.querySelector(".btn");
let modal = document.querySelector("#modalWrap");

// 공지사항/갤러리 선택지 가져오기
let items = document.querySelectorAll(".tabMenu > li");

// 창 열자마자 자바스크립트 실행
window.onload = function () {
    showSlides();
    modalActive();
    selectTab();
}

// tabMemu를 클릭으로 선택하는 함수
function selectTab() {
    items.forEach((item)=>{ // forEach를 통해 배열에 접근, 각각의 이벤트 등록
        item.addEventListener('click',()=>{
            items.forEach((e)=>{
                e.classList.remove('active');   /* 하나만 선택되도록 기존 효과 지우기 */
            });
            item.classList.add('active');   /* 선택한 개체만 효과 추가 */
        });
    });
}


// imgSlide를 자동 전환시키는 함수
function showSlides() {
    let imgSlide = document.querySelectorAll("#imgSlide > a");

    for (let i = 0; i < imgSlide.length; i++) {
        imgSlide[i].style.opacity = "0";
    }
    current++;
    if (current > imgSlide.length) {
        current = 1;
    }
    imgSlide[current - 1].style.opacity = "1";

    setTimeout(showSlides, 2000);
}

// modal을 팝업시키는 함수
function modalActive() {
    open.addEventListener("click", function () {
        modal.classList.add("active");
    });
    close.addEventListener("click", function () {
        modal.classList.remove("active");
    });
}