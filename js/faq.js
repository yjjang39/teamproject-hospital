window.onload = function () {
  let faq1 = document.querySelectorAll(".faq_1");

  for (var pq of faq1) {
      pq.addEventListener("click", function () {
          if (this.classList.contains("active")) {
              this.classList.remove("active");
          } else {
              hideAll();
              this.classList.add("active");
          }
      });``
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
  const contents = [
    document.querySelector(".question_inner"),
    document.querySelector(".use_guide"),
    document.querySelector('.care_guide'),
    document.querySelector('.round_guide'),
    document.querySelector('.etc_guide')
];

const menus = [
    document.querySelector(".list1"),
    document.querySelector(".list2"),
    document.querySelector('.list3'),
    document.querySelector('.list4'),
    document.querySelector('.list5')
];

menus.forEach((menu, index) => {
    menu.addEventListener("click", function () {
        // 모든 content 숨기기
        contents.forEach(content => content.style.display = "none");
        // 클릭된 메뉴에 해당하는 content 보이기
        contents[index].style.display = "block";
        
        // 모든 메뉴 초기화
        menus.forEach(menu => menu.classList.remove('listactive'));
        // 클릭된 메뉴에 클래스 추가
        menu.classList.add('listactive');
    });
});

};
