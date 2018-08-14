function redBurst(){
  if(String(document.getElementById("icon").className) == "menu_container2 menu_icon"){
    // red burstStart
   document.getElementById("burstStart").classList.add('menu_animation_red_burst');
    //red burst
}
}
function whiteBurst(){
if(String(document.getElementById("icon").className) == "menu_container2 menu_icon"){
  // red burstStart
 document.getElementById("burstStart").classList.add('menu_animation_white_burst');
  //red burst
}
}
  function openMenu(){
  //  console.log("we in the 1st conditional");
  if(String(document.getElementById("icon").className) == "menu_container2 menu_icon"){
    // red burstStart
   document.getElementById("burstStart").classList.add('menu_animation_red_burst');
    //red burst

    document.getElementById("link_text").classList.remove('menu_link_can_click');
    document.getElementById("link_text").classList.add('menu_link_cant_click');
    document.getElementById("menu").classList.remove('menu_closed');
    document.getElementById("menu").classList.add('menu_animation_open');

    document.getElementById("icon").classList.remove('menu_icon');
    document.getElementById("icon").classList.add('return_icon');
    document.getElementById("icon").classList.remove('menu_container2');

    document.getElementById("icon").classList.add('menu_container3');



}

/*  if(String(document.getElementById("icon").className) == "menu_container2 return_icon"){
*/
else if (String(document.getElementById("icon").className) == "menu_container2 return_icon") {
      document.getElementById("link_text").classList.remove('menu_link_can_click');
      document.getElementById("link_text").classList.add('menu_link_cant_click');
      document.getElementById("menu").classList.remove('menu_opened');
      document.getElementById("menu").classList.add('menu_animation_close');

      document.getElementById("icon").classList.remove('return_icon');
      document.getElementById("icon").classList.add('menu_icon');


    }

    }

  function setUpMenu(){
    if(String(document.getElementById("menu").className) == "menu_animation_open"){
    document.getElementById("menu").classList.add('menu_opened');

    document.getElementById("menu").classList.remove('menu_animation_open');


    document.getElementById("link_text").classList.remove('menu_link_cant_click');
    document.getElementById("link_text").classList.add('menu_link_can_click');

    }
    else if (String(document.getElementById("menu").className) == "menu_animation_close") {
      document.getElementById("menu").classList.add('menu_closed');
      document.getElementById("menu").classList.remove('menu_animation_close');
      document.getElementById("link_text").classList.remove('menu_link_cant_click');
      document.getElementById("link_text").classList.add('menu_link_can_click');
    }
  }
