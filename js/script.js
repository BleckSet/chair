
const tabsBtn = document.querySelectorAll(".chois_chair_tabs_btn_item");
const tabsItems = document.querySelectorAll(".chois_chair_tabs_item");

  tabsBtn.forEach(function(item) {
  item.addEventListener("click",function(){
    let currentBtn = item;
    let tabId =currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    tabsBtn.forEach(function(item) {
      item.classList.remove('active');

    });

        tabsItems.forEach(function(item) {
          item.classList.remove('active');

        });


    currentBtn.classList.add('active');
    currentTab.classList.add('active');
  });

});
