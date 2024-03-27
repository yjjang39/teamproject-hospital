window.onload = function(){
    // 탑배너
    const close = document.querySelector('.close');
    const closeToday = document.querySelector('.close_today');
    const topBanner = document.querySelector('.top_banner_wrap')

    close.addEventListener('click', hideBanner);
    closeToday.addEventListener('click', hideBanner);

    function hideBanner() {
        topBanner.style.display = 'none';
    }





    // 바로가기메뉴-예약
    const pname = document.getElementById('p_name');
    const ptel = document.getElementById('p_tel');
    const psymptom = document.getElementById('p_symptom');
    const checkbox = document.getElementById('agree');
    const reservationBtn = document.querySelector(".new_reservation_btn");


    reservationBtn.addEventListener('click', function(){
        if(pname.value == ""){
            alert("성명을 입력하세요.");
            pname.focus();
            return false;
        }
        if(!ptel.value){
            alert("연락처를 입력하세요.");
            ptel.focus();
            return false;
        }
        if(!psymptom.value){
            alert("증상을 입력하세요.");
            psymptom.focus();
            return false;
        }
        if(checkbox.checked){
            alert("예약이 완료되었습니다.");
        } else {
            alert("개인정보 이용에 동의해주세요.")
        }
    });


     // 초기 상태 설정
    checkCheckBox();

    checkbox.addEventListener('change' ,checkCheckBox);
    pname.addEventListener('input', checkCheckBox);
    ptel.addEventListener('input', checkCheckBox);
    psymptom.addEventListener('input', checkCheckBox);

    function checkCheckBox(){
        if(
            pname.value.length > 0 &&
            ptel.value.length > 0 &&
            psymptom.value.length > 0 &&
            checkbox.checked
        ){
            reservationBtn.disabled = false;
            reservationBtn.classList.add('new_reservation_btn_active');
            reservationBtn.classList.remove('new_reservation_btn');
        } else {
            reservationBtn.disabled = true;
            reservationBtn.classList.remove('new_reservation_btn_active');
            reservationBtn.classList.add('new_reservation_btn');

        }
    }





    
    // 언어설정
    const language = document.querySelector('.language');
    const langbg = document.querySelector('.lang_bg');


    document.addEventListener('click', function(){
        // langbg.style.display = 'none';
        // 빈 곳 클릭을 확인
        if (!event.target.closest('.language')) {
            // 언어 목록을 숨김
            langbg.style.display = 'none';
        } else {
            // 언어 선택 메뉴를 클릭한 경우
            if (langbg.style.display === 'block') {
                // 언어 목록이 이미 열려있는 경우 닫음
                langbg.style.display = 'none';
            } else {
                // 언어 목록이 닫혀있는 경우 열림
                langbg.style.display = 'block';
            }
        }
    });



    // GNB호버 설정

    const gnb = document.querySelector('.gnb');
    const navbg = document.querySelector('.nav_bg');
    const twodepth = document.querySelectorAll('.two_depth');
    const topmenu = document.querySelector('.top_menu');
    const logo = document.querySelector('.logo');


    gnb.addEventListener('mouseover', function(){
        navbg.style.display = 'block';
        for(i = 0; i < twodepth.length; i++){
            twodepth[i].style.display = 'block'; 
        }
    });

    navbg.addEventListener('mouseover', function(){
        navbg.style.display = 'block';
        for (let i = 0; i < twodepth.length; i++) {
            twodepth[i].style.display = 'block'; 
        }
    });

    navbg.addEventListener('mouseout', function(){
        navbg.style.display = 'none';
        for (let i = 0; i < twodepth.length; i++) {
            twodepth[i].style.display = 'none'; 
        }
    });

    topmenu.addEventListener('mouseout', function(){
        navbg.style.display = 'none';
        for (let i = 0; i < twodepth.length; i++) {
            twodepth[i].style.display = 'none'; 
        }
    });
    logo.addEventListener('mouseout', function(){
        navbg.style.display = 'none';
        for (let i = 0; i < twodepth.length; i++) {
            twodepth[i].style.display = 'none'; 
        }
    });
    logo.addEventListener('mouseover', function(){
        navbg.style.display = 'none';
        for (let i = 0; i < twodepth.length; i++) {
            twodepth[i].style.display = 'none'; 
        }
    });




    // 메인광고이미지
    const mainBtns = document.querySelectorAll('.main_image_btn1, .main_image_btn2, .main_image_btn3, .main_image_btn4, .main_image_btn5, .main_image_btn6');
    const mainImages = document.querySelectorAll('.main_image ul li');
    const mainImageWrap = document.querySelector('.main_image_wrap');

    let currentIndex = 0;
    let intervalId;

    mainBtns.forEach(function(btn, index) {
        btn.addEventListener('click', function() {
            currentIndex = index;
            changeImage();
            clearInterval(intervalId);
        });
    });

    function changeImage() {
        hideAllImages();
        mainImages[currentIndex].style.display = 'flex';
        mainImageWrap.className = 'main_image_wrap'; 
        mainImageWrap.classList.add(`main_image_background${currentIndex + 1}`);
        setActiveBtn(mainBtns[currentIndex]);
    }

    function hideAllImages() {
        mainImages.forEach(function(image) {
            image.style.display = 'none';
        });
    }

    function setActiveBtn(activeBtn) {
        mainBtns.forEach(function(btn) {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    }

    function autoSlideMainImage() {
        intervalId = setInterval(function() {
            currentIndex = (currentIndex + 1) % mainBtns.length;
            changeImage();
            setActiveBtn(mainBtns[currentIndex]);
        }, 5000);
    }
    
    autoSlideMainImage();



    // tab menu
    // 탭메뉴 관리를 위한 배열
    const tabs = [
        { btn: document.querySelector(".tab_btn1"), content: document.querySelector("#tab1") },
        { btn: document.querySelector(".tab_btn2"), content: document.querySelector("#tab2") },
        { btn: document.querySelector(".tab_btn3"), content: document.querySelector("#tab3") },
        { btn: document.querySelector(".tab_btn4"), content: document.querySelector("#tab4") }
    ];
    
    // 초기에 "을지소식" 탭 내용이 보이도록 설정
    tabs[0].content.style.display = "block";
    tabs[0].btn.classList.add("tab_active");
    
    // 각 탭 버튼에 대한 이벤트 리스너 등록
    tabs.forEach((tab, index) => {
        tab.btn.addEventListener("click", function () {
        // 모든 탭 내용을 숨김
        tabs.forEach(t => t.content.style.display = "none");
        // 클릭된 탭 내용을 표시
        tab.content.style.display = "block";
        
        // 모든 탭 버튼 클래스 초기화
        tabs.forEach(t => t.btn.classList.remove("tab_active"));
        // 클릭된 탭 버튼에 클래스 추가
        tab.btn.classList.add("tab_active");
        });
    });
    



    // mini ad
    $(function () {
        let img_width = $(".ad_inner img").width();
    
        let currentIndex = 0;
        let itemLength = $(".ad_inner li").length;
        let autoSlideInterval = setInterval(autoSlide, 5000);
    
        $(".ad_btn li").click(function () {
            let idx = $(this).index();
            currentIndex = idx;
            slideTo(idx);
        });
    
        function autoSlide() {
            currentIndex = (currentIndex + 1) % itemLength;
            slideTo(currentIndex);
        }
    
        function slideTo(index) {
            $(".ad_inner ul").animate({ left: -img_width * index });
            setActiveAdBtn($(".ad_btn li").eq(index).find("button")[0]);
        }
    
        function setActiveAdBtn(activeBtn) {
            $(".ad_btn button").removeClass("active");
            $(activeBtn).addClass("active");
        }
    
        $(".ad_btn, .ad_inner").width(img_width);
        $(".ad_inner ul").width(img_width * itemLength);
    });


    // E-리플릿
    $(document).ready(function () {
        const slideWrapper = $(".e_leaflet_inner ul");
        const slides = $(".e_leaflet_inner ul li");
        const totalSlides = slides.length;
        const slideWidth = slides.first().outerWidth();
        let currentSlide = 0;

        // 슬라이드의 전체 너비 설정
        slideWrapper.width(slideWidth * totalSlides);

        // 다음 슬라이드로 이동하는 함수
        function nextSlide() {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
        } else {
            currentSlide = 0;
        }
        moveSlide();
        }

        // 이전 슬라이드로 이동하는 함수
        function prevSlide() {
        if (currentSlide > 0) {
            currentSlide--;
        } else {
            currentSlide = totalSlides - 1;
        }
        moveSlide();
        }

        // 슬라이드를 이동하는 함수
        function moveSlide() {
        const moveAmount = -slideWidth * currentSlide;
        slideWrapper.animate({ left: moveAmount }, 500); // 움직이는 속도는 0.5초 (500ms)
        }

        // 다음 버튼 클릭 시 다음 슬라이드로 이동
        $(".e_arrow .s_right").click(function () {
        nextSlide();
        });

        // 이전 버튼 클릭 시 이전 슬라이드로 이동
        $(".e_arrow .s_left").click(function () {
        prevSlide();
        });
    });




    // 패밀리사이트설정
    const familysite = document.querySelector('.family_txt');
    const familysiteCont = document.querySelector('.family_cont');


    document.addEventListener('click', function(){
        // langbg.style.display = 'none';
        // 빈 곳 클릭을 확인
        if (!event.target.closest('.family_txt')) {
            // 언어 목록을 숨김
            familysiteCont.style.display = 'none';
        } else {
            // 언어 선택 메뉴를 클릭한 경우
            if (familysiteCont.style.display === 'block') {
                // 언어 목록이 이미 열려있는 경우 닫음
                familysiteCont.style.display = 'none';
            } else {
                // 언어 목록이 닫혀있는 경우 열림
                familysiteCont.style.display = 'block';
            }
        }
    });
    
};

