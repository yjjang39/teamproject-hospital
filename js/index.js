window.onload = function(){
    // 탑배너
    let close = document.querySelector('.close');
    let closeToday = document.querySelector('.close_today');
    let topbanner = document.querySelector('.top_banner_wrap')

    close.addEventListener('click', function(){
        topbanner.style.display = 'none';
    });
    closeToday.addEventListener('click', function(){
        topbanner.style.display = 'none';
    });





    // 바로가기메뉴-예약
    let pname = document.getElementById('p_name');
    let ptel = document.getElementById('p_tel');
    let psymptom = document.getElementById('p_symptom');
    let checkbox = document.getElementById('agree');
    let reservationBtn = document.querySelector(".new_reservation_btn");


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

    // if(pname.value.length>0 && ptel.value.length>0  && psymptom.value.length>0){
    //     reservationBtn.classList.add('new_reservation_btn_active');
    //     reservationBtn.classList.remove('new_reservation_btn');
    // }

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
    let language = document.querySelector('.language');
    let langbg = document.querySelector('.lang_bg');


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

    let gnb = document.querySelector('.gnb');
    let navbg = document.querySelector('.nav_bg');
    let twodepth = document.querySelectorAll('.two_depth');
    let topmenu = document.querySelector('.top_menu');
    let logo = document.querySelector('.logo');





    gnb.addEventListener('mouseover', function(){
        navbg.style.display = 'block';
        for(i = 0; i < twodepth.length; i++){
            twodepth[i].style.display = 'block'; 
        }
    });

    // gnb.addEventListener('mouseout', function(){
    //     navbg.style.display = 'none';
    //     for (let i = 0; i < twodepth.length; i++) {
    //         twodepth[i].style.display = 'none'; 
    //     }
    // });

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
    let mainBtn1 = document.querySelector('.main_image_btn1');
    let mainBtn2 = document.querySelector('.main_image_btn2');
    let mainBtn3 = document.querySelector('.main_image_btn3');
    let mainBtn4 = document.querySelector('.main_image_btn4');
    let mainBtn5 = document.querySelector('.main_image_btn5');
    let mainBtn6 = document.querySelector('.main_image_btn6');

    let mainImage1 = document.querySelector('.main_image1');
    let mainImage2 = document.querySelector('.main_image2');
    let mainImage3 = document.querySelector('.main_image3');
    let mainImage4 = document.querySelector('.main_image4');
    let mainImage5 = document.querySelector('.main_image5');
    let mainImage6 = document.querySelector('.main_image6');

    // let main = document.querySelectorAll('.main_image > ul > li');
    // console.log(main);

    let mainImageWrap = document.querySelector('.main_image_wrap');

    

    mainBtn1.addEventListener('click', function(){
        mainImage2.style.display = 'none';
        mainImage3.style.display = 'none';
        mainImage4.style.display = 'none';
        mainImage5.style.display = 'none';
        mainImage6.style.display = 'none';
        mainImage1.style.display = 'flex';
        mainImageWrap.classList.add('main_image_background1');
        mainBtn1.classList.add('active');
        mainBtn2.classList.remove('active');
        mainBtn3.classList.remove('active');
        mainBtn4.classList.remove('active');
        mainBtn5.classList.remove('active');
        mainBtn6.classList.remove('active');
    });
    mainBtn2.addEventListener('click', function(){
        mainImage1.style.display = 'none';
        mainImage3.style.display = 'none';
        mainImage4.style.display = 'none';
        mainImage5.style.display = 'none';
        mainImage6.style.display = 'none';
        mainImage2.style.display = 'flex';
        mainImageWrap.classList.add('main_image_background2');

        mainBtn2.classList.add('active');
        mainBtn1.classList.remove('active');
        mainBtn3.classList.remove('active');
        mainBtn4.classList.remove('active');
        mainBtn5.classList.remove('active');
        mainBtn6.classList.remove('active');
    });
    mainBtn3.addEventListener('click', function(){
        mainImage1.style.display = 'none';
        mainImage2.style.display = 'none';
        mainImage4.style.display = 'none';
        mainImage5.style.display = 'none';
        mainImage6.style.display = 'none';
        mainImage3.style.display = 'flex';
        mainImageWrap.classList.add('main_image_background3');

        mainBtn3.classList.add('active');
        mainBtn2.classList.remove('active');
        mainBtn1.classList.remove('active');
        mainBtn4.classList.remove('active');
        mainBtn5.classList.remove('active');
        mainBtn6.classList.remove('active');
    });
    mainBtn4.addEventListener('click', function(){
        mainImage2.style.display = 'none';
        mainImage3.style.display = 'none';
        mainImage1.style.display = 'none';
        mainImage5.style.display = 'none';
        mainImage6.style.display = 'none';
        mainImage4.style.display = 'flex';
        mainImageWrap.classList.add('main_image_background4');

        mainBtn4.classList.add('active');
        mainBtn2.classList.remove('active');
        mainBtn2.classList.remove('active');
        mainBtn3.classList.remove('active');
        mainBtn1.classList.remove('active');
        mainBtn5.classList.remove('active');
        mainBtn6.classList.remove('active');
    });
    mainBtn5.addEventListener('click', function(){
        mainImage2.style.display = 'none';
        mainImage3.style.display = 'none';
        mainImage4.style.display = 'none';
        mainImage1.style.display = 'none';
        mainImage6.style.display = 'none';
        mainImage5.style.display = 'flex';
        mainImageWrap.classList.add('main_image_background5');

        mainBtn5.classList.add('active');
        mainBtn2.classList.remove('active');
        mainBtn3.classList.remove('active');
        mainBtn4.classList.remove('active');
        mainBtn1.classList.remove('active');
        mainBtn6.classList.remove('active');
    });
    mainBtn6.addEventListener('click', function(){
        mainImage2.style.display = 'none';
        mainImage3.style.display = 'none';
        mainImage4.style.display = 'none';
        mainImage5.style.display = 'none';
        mainImage1.style.display = 'none';
        mainImage6.style.display = 'flex';
        mainImageWrap.classList.add('main_image_background6');

        mainBtn6.classList.add('active');
        mainBtn2.classList.remove('active');
        mainBtn2.classList.remove('active');
        mainBtn2.classList.remove('active');
        mainBtn3.classList.remove('active');
        mainBtn4.classList.remove('active');
        mainBtn5.classList.remove('active');
        mainBtn1.classList.remove('active');
    });



    // 탭메뉴
    const tabBtn1 = document.querySelector(".tab_btn1");
    const tabBtn2 = document.querySelector(".tab_btn2");
    const tabBtn3 = document.querySelector(".tab_btn3");
    const tabBtn4 = document.querySelector(".tab_btn4");
  
    const tabInner1 = document.querySelector(".eulji_news");
    const tabInner2 = document.querySelector(".eulji_qna");
    const tabInner3 = document.querySelector(".eulji_employment");
    const tabInner4 = document.querySelector(".eulji_bid");
  
    const tabItem1 = document.querySelector(".tab_item1");
    const tabItem2 = document.querySelector(".tab_item2");
    const tabItem3 = document.querySelector(".tab_item3");
    const tabItem4 = document.querySelector(".tab_item4");
  
    tabBtn1.addEventListener("click", function () {
      tabInner1.style.display = "block";
      tabInner2.style.display = "none";
      tabInner3.style.display = "none";
      tabInner4.style.display = "none";
  
      tabItem1.classList.add("tab_active");
      tabItem2.classList.remove("tab_active");
      tabItem3.classList.remove("tab_active");
      tabItem4.classList.remove("tab_active");
    });
    tabBtn2.addEventListener("click", function () {
      tabInner1.style.display = "none";
      tabInner2.style.display = "block";
      tabInner3.style.display = "none";
      tabInner4.style.display = "none";
  
      tabItem1.classList.remove("tab_active");
      tabItem2.classList.add("tab_active");
      tabItem3.classList.remove("tab_active");
      tabItem4.classList.remove("tab_active");
    });
    tabBtn3.addEventListener("click", function () {
      tabInner1.style.display = "none";
      tabInner2.style.display = "none";
      tabInner3.style.display = "block";
      tabInner4.style.display = "none";
  
      tabItem1.classList.remove("tab_active");
      tabItem2.classList.remove("tab_active");
      tabItem3.classList.add("tab_active");
      tabItem4.classList.remove("tab_active");
    });
    tabBtn4.addEventListener("click", function () {
      tabInner1.style.display = "none";
      tabInner2.style.display = "none";
      tabInner3.style.display = "none";
      tabInner4.style.display = "block";
  
      tabItem1.classList.remove("tab_active");
      tabItem2.classList.remove("tab_active");
      tabItem3.classList.remove("tab_active");
      tabItem4.classList.add("tab_active");
    });
  
    //miniad
    $(function () {
        let img_width = $(".ad_inner img").width();
    
        $(".ad_btn li").click(function () {
          let idx = $(this).index();
          console.log(idx);
          $(".ad_inner ul").animate({ left: -img_width * idx });
        });
    
        $(".ad, .ad_inner").width(img_width);
    
        let item_len = $(".ad_inner li").length;
        $(".ad_inner ul").width(img_width * item_len);
      });


      //miniad btn
  const adBtn1 = document.querySelector(".ad_btn1");
  const adBtn2 = document.querySelector(".ad_btn2");
  const adBtn3 = document.querySelector(".ad_btn3");
  const adBtn4 = document.querySelector(".ad_btn4");
  const adBtn5 = document.querySelector(".ad_btn5");

  adBtn1.addEventListener("click", function () {
    document.querySelector(".ad_btn1 > img").src = "../images/circle_c.png";
    document.querySelector(".ad_btn2 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn3 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn4 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn5 > img").src = "../images/circle_w.png";
  });
  adBtn2.addEventListener("click", function () {
    document.querySelector(".ad_btn1 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn2 > img").src = "../images/circle_c.png";
    document.querySelector(".ad_btn3 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn4 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn5 > img").src = "../images/circle_w.png";
  });
  adBtn3.addEventListener("click", function () {
    document.querySelector(".ad_btn1 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn2 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn3 > img").src = "../images/circle_c.png";
    document.querySelector(".ad_btn4 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn5 > img").src = "../images/circle_w.png";
  });
  adBtn4.addEventListener("click", function () {
    document.querySelector(".ad_btn1 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn2 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn3 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn4 > img").src = "../images/circle_c.png";
    document.querySelector(".ad_btn5 > img").src = "../images/circle_w.png";
  });
  adBtn5.addEventListener("click", function () {
    document.querySelector(".ad_btn1 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn2 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn3 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn4 > img").src = "../images/circle_w.png";
    document.querySelector(".ad_btn5 > img").src = "../images/circle_c.png";
  });

//이플릿
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
      let familysite = document.querySelector('.family_txt');
      let familysiteCont = document.querySelector('.family_cont');
  
  
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


























