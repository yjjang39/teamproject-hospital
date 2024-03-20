window.onload = function(){
    let uname = document.getElementById('u_name');
    let uid = document.getElementById('u_id');
    let upwd = document.getElementById('u_pwd');
    let urepwd= document.getElementById('u_re_pwd');
    let utelSecond = document.getElementById('u_tel_second');
    let utelLast = document.getElementById('u_tel_last');
    let uemail = document.getElementById('u_email');
    let joinBtn = document.querySelector('.join')
    let cancelBtn = document.querySelector('.cancel')



    const checkbox1 = document.getElementById('terms_agree');
    const checkbox2 = document.getElementById('personal_agree');


    joinBtn.addEventListener('click', function(){
        if(!uname.value){
            alert("성명을 입력해주세요.");
            uname.focus();
            return false;
        }
        if(!uid.value){
            alert("아이디를 입력해주세요.");
            uid.focus();
            return false;
        }
        if(!upwd.value){
            alert("비밀번호를 입력해주세요.");
            upwd.focus();
            return false;
        }
        if(!urepwd.value){
            alert("비밀번호 확인에 비밀번호를 입력해주세요.");
            urepwd.focus();
            return false;
        }
        // if(upwd.value != urepwd.value){
        //     alert("비밀번호가 일치하지 않습니다.");
        //     urepwd.focus();
        //     return false;
        // }

        let utelS = utelSecond.value.length;
        let utelL = utelLast.value.length;
        if(!utelSecond.value){
            alert("전화번호를 입력해주세요.");
            utelSecond.focus();
            return false;
        }
        if(utelS !== 4){
            alert("전화번호가 잘못되었습니다.");
            utelSecond.focus();
            return false;
        }

        if(!utelLast.value){
            alert("전화번호를 입력해주세요.");
            utelLast.focus();
            return false;
        }
        if(utelL !== 4){
            alert("전화번호가 잘못되었습니다.");
            utelLast.focus();
            return false;
        }



        if(!uemail.value){
            alert("이메일을 입력해주세요.");
            uemail.focus();
            return false;
        }

        if(uid.value.length>0 && upwd.value.length>0 && urepwd.value.length>0 && utelSecond.value.length>0 && utelLast.value.length>0 && uemail.value.length>0){
            alert("회원가입이 완료되었습니다.");
        }    

    });



    cancelBtn.addEventListener('click', function(){
        if(cancelBtn.disabled == false){
            location.href = "index.html"
        }
    });



    // 초기 상태 설정
    checkCheckBoxes();

    // const checkbox1 = document.getElementById('terms_agree');
    // const checkbox2 = document.getElementById('personal_agree');

    checkbox1.addEventListener('change', checkCheckBoxes);
    checkbox2.addEventListener('change', checkCheckBoxes);

    // function checkCheckBoxes(){
    //     if (
    //         uid.value.length > 0 &&
    //         upwd.value.length > 0 &&
    //         urepwd.value.length > 0 &&
    //         utelSecond.value.length > 0 &&
    //         utelLast.value.length > 0 &&
    //         uemail.value.length > 0 &&
    //         checkbox1.checked &&
    //         checkbox2.checked
    //     ) {
    //         joinBtn.disabled = false;
    //         joinBtn.classList.add('join_btn_active');
    //         joinBtn.classList.remove('join');
    //     } else {
    //         joinBtn.disabled = true;
    //         joinBtn.classList.remove('join_btn_active');
    //         joinBtn.classList.add('join');
    //     }        
    // }

        // input 요소에 대한 change 이벤트 추가
        uname.addEventListener('input', checkCheckBoxes);
        uid.addEventListener('input', checkCheckBoxes);
        upwd.addEventListener('input', checkCheckBoxes);
        urepwd.addEventListener('input', checkCheckBoxes);
        utelSecond.addEventListener('input', checkCheckBoxes);
        utelLast.addEventListener('input', checkCheckBoxes);
        uemail.addEventListener('input', checkCheckBoxes);

        
    function checkCheckBoxes() {
        // console.log('uname:', uname.value);
        // console.log('uid:', uid.value);
        // console.log('upwd:', upwd.value);
        // console.log('urepwd:', urepwd.value);
        // console.log('utelSecond:', utelSecond.value);
        // console.log('utelLast:', utelLast.value);
        // console.log('uemail:', uemail.value);
        // console.log('checkbox1 checked:', checkbox1.checked);
        // console.log('checkbox2 checked:', checkbox2.checked);

        if (
            uname.value.length > 0 &&
            uid.value.length > 0 &&
            upwd.value.length > 0 &&
            urepwd.value.length > 0 &&
            utelSecond.value.length > 0 &&
            utelLast.value.length > 0 &&
            uemail.value.length > 0 &&
            checkbox1.checked &&
            checkbox2.checked
        ) {
            joinBtn.disabled = false;
            joinBtn.classList.add('join_btn_active');
            joinBtn.classList.remove('join');
        } else {
            joinBtn.disabled = true;
            joinBtn.classList.remove('join_btn_active');
            joinBtn.classList.add('join');
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