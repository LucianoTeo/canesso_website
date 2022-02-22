// tab

const tab_list = document.querySelector(".tab_list");

const tabs = document.querySelectorAll(".tabs_body_item");
const tabs_list_items = document.querySelectorAll(".tab_list_item");

function handleTab(tabName) {
  // Declare all variables

  for (let i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove("active");

    if (tabs[i].id === tabName) {
      tabs[i].classList.add("active");
    }
  }

  for (let i = 0; i < tabs_list_items.length; i++) {
    tabs_list_items[i].classList.remove("active");

    if (tabs_list_items[i].id === tabName) {
      tabs_list_items[i].classList.add("active");
    }
  }
}
