window.onload = function(){
    let loginBtn = document.querySelector('.login_btn');
    let loginID = document.getElementById('login_id');
    let loginPWD = document.getElementById('login_pwd');

    loginBtn.addEventListener('click', function(){
        if(!loginID.value){
            alert("아이디를 입력해주세요.");
            loginID.focus();
            return false;
        }
        if(!loginPWD.value){
            alert("비밀번호를 입력해주세요.");
            loginPWD.focus();
            return false;
        }
        if(loginID.value.length>0 && loginPWD.value.length>0){
            alert("로그인 되었습니다.");
        }    
    });











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


}