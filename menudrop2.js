const select = document.querySelector(".selecionar");
const options_list = document.querySelector(".oplista");
const options = document.querySelectorAll(".lista");

//show & hide options list
select.addEventListener("click", () => {
  options_list.classList.toggle("active");
  select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
});

//select option
options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((option) => {option.classList.remove('selected')});
    select.querySelector("span").innerHTML = option.innerHTML;
    option.classList.add("selected");
    options_list.classList.toggle("active");
    select.querySelector(".fa-angle-down").classList.toggle("fa-angle-up");
  });
});