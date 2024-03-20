window.onload = function () {
  let faq1 = document.querySelectorAll(".faq_1");

  for (var pq of faq1) {
    pq.addEventListener("click", function () {
      hideAll();
      this.classList.add("active");
    });
  }
  function hideAll() {
    for (q of faq1) {
      q.classList.remove("active");
    }
  }
  

  //

  //   const tabMenu = document.querySelectorAll(".question_top_menu .list_wrap li");
  //   const content = document.querySelectorAll(
  //     ".question_top_menu_wrap .tab_content .cont"
  //   );

  //   let activeCont = "";
  //   function showContent(num) {
  //     content.forEach(function (item) {
  //       item.style.display = "none";
  //     });
  //     content[num].style.display = "block";
  //   }
  //   showContent(0);
  //   for (var i = 0; i < tabMenu.length; i++) {
  //     tabMenu[i].querySelector(".btn").addEventListener("click", function (e) {
  //       e.preventDefault(); //기본설정을 초기화?
  //       for (var j = 0; j < tabMenu.length; j++) {
  //         tabMenu[j].classList.remove("list");
  //         content[j].style.display = "none";
  //       }
  //       this.parentNode.classList.add("list");
  //       activeCont = this.getAttribute("href");
  //       document.querySelector(activeCont).style.display = "block";
  //     });
  //   }

  const content = document.querySelector(".question_inner");
  const content2 = document.querySelector(".use_guide");
  const content3 = document.querySelector('.care_guide');
  const content4 = document.querySelector('.round_guide');
  const content5 = document.querySelector('.etc_guide');
  const menu = document.querySelector(".list1");
  const menu2 = document.querySelector(".list2");
  const menu3 = document.querySelector('.list3');
  const menu4 = document.querySelector('.list4');
  const menu5 = document.querySelector('.list5');

  menu.addEventListener("click", function () {
    content.style.display = "block";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";

    menu.classList.add('listactive');
    menu2.classList.remove('listactive');
    menu3.classList.remove('listactive');
    menu4.classList.remove('listactive');
    menu5.classList.remove('listactive');
  });

  menu2.addEventListener("click", function () {
    content.style.display = "none";
    content2.style.display = "block";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "none";

    menu.classList.remove('listactive');
    menu2.classList.add('listactive');
    menu3.classList.remove('listactive');
    menu4.classList.remove('listactive');
    menu5.classList.remove('listactive');
  });
  menu3.addEventListener("click", function () {
    content.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "block";
    content4.style.display = "none";
    content5.style.display = "none";

    menu.classList.remove('listactive');
    menu2.classList.remove('listactive');
    menu3.classList.add('listactive');
    menu4.classList.remove('listactive');
    menu5.classList.remove('listactive');
  });
  menu4.addEventListener("click", function () {
    content.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "block";
    content5.style.display = "none";

    menu.classList.remove('listactive');
    menu2.classList.remove('listactive');
    menu3.classList.remove('listactive');
    menu4.classList.add('listactive');
    menu5.classList.remove('listactive');
  });
  menu5.addEventListener("click", function () {
    content.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "none";
    content4.style.display = "none";
    content5.style.display = "block";

    menu.classList.remove('listactive');
    menu2.classList.remove('listactive');
    menu3.classList.remove('listactive');
    menu4.classList.remove('listactive');
    menu5.classList.add('listactive');
  });


};
