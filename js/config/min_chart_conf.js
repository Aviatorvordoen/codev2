// page load
window.onload = () => {
  body_html.classList.remove('body_content_center');
  localStorage.removeItem("Departure")
  localStorage.removeItem("Arrival")
  localStorage.removeItem("Route")

  if (localStorage.getItem('THEME') == 1){
      // LIGHT_THEME_SW.classList.add("light_theme_active")
      // DARK_THEME_SW.classList.remove("dark_theme_active")
  }
  else{
      // LIGHT_THEME_SW.classList.remove("light_theme_active")
      // DARK_THEME_SW.classList.add('dark_theme_active')
  }

  if (localStorage.getItem("SETTINGS_MENU_THEME") == 1){
      
  }

}

// LocalStorage
let depvar = localStorage.getItem("Departure")
let arrvvar = localStorage.getItem("Arrival")
let noappl = localStorage.getItem('NotApplicabte')


// get elements
const DEPLABEL = document.getElementById('deplnk')
const ARRVLABEL = document.getElementById('arrvlnk')
const body_html = document.querySelector('body')
const AIRPORTOPT_BUTTON = document.querySelector('.airportopt')
const frame = document.querySelector('.frclass')
const AIPRORT_CHART_CHAPTER_ACC1 = document.getElementById('acc1')
const AIPRORT_CHART_CHAPTER_ACC2 = document.getElementById('acc2')
const AIPRORT_CHART_CHAPTER_ACC3 = document.getElementById('acc3')
const AIPRORT_CHART_CHAPTER_ACC4 = document.getElementById('acc4')
const AIPRORT_CHART_CHAPTER_ACC5 = document.getElementById('acc5')
const AIPRORT_CHART_CHAPTER_ACC6 = document.getElementById('acc6')
const acs = document.getElementById('acsbtn')
const comm = document.getElementById('commid')
const RUNWAYS_INF_BUTTON = document.getElementById('rwy')
const WX_BUTTON = document.getElementById('wxid')
const RETURN_BUTTON = document.querySelector('.returnmark')
const RTE_CREATE_BUTTON = document.querySelector('.goflight')
const FLIGHTS = document.getElementById('bflt')
const SEARCH_BTN = document.getElementById('mso_search')
const sidlink = document.getElementById('sls')
const DEPARTURE_LINK = document.getElementById('dql')
const ARRIVAL_LINK = document.getElementById('aql')
const form = document.getElementById("aof")
// const user_menu_btn = document.getElementById('usr')

// CONST FOR MENU

const AIRPORT_MENU = document.querySelector('.airport_options_list')
const REF_MENU = document.querySelector('.refmenu_list')
const CO_MENU = document.querySelector('.comenu_list')
const STAR_MENU = document.querySelector('.starmenu_list')
const APPR_MENU = document.querySelector('.apprmenu_list')
const TAXI_MENU = document.querySelector('.taximenu_list')
const SID_MENU = document.querySelector('.sidmenu_list')
const USER_MENU = document.querySelector('.user_container')

// settings
// const LIGHT_THEME_SW = document.getElementById('l_theme')
// const DARK_THEME_SW = document.getElementById('d_theme')

// get charts links
const STARLINKS = document.querySelector('starlinks') // coming soon

// get settings link from user menu
// const SETTINGS_LINK = document.getElementById('usrst').addEventListener('click', OpenApplicationSettings)
// const APPLICATION_SETTINGS_MENU = document.querySelector('.settings_container')
// const CLOSE_SETTINGS_MENU = document.getElementById('ret').addEventListener("click", ClosedSetMenu)

// data from db
const AIRPORT_LIST = 
[
  'LDZA', 'LIML', 'LDSP', 'LSZH', 'LKPR', 'EKRN', 'ESMT', 'ESGG', 'ESKN', 'EDDH', 'EDDK',
  'LOWW', 'EDDP', 'ESSV', 'EDDF', 'LIRF', 'LIPZ', 'LFSB', 'EGLL', 'LOWI', 'EDDL',
  'LSME', 'EBBR'
]

const AIRPROT_LIST_LOWER =
[
  'ldza', 'liml', 'ldsp', 'lszh', 'lkpr', 'ekrn', 'esmt', 'esgg', 'eskn', 'eddh', 'eddk',
  'loww', 'eddp', 'essv', 'eddf', 'lirf', 'lipz', 'lfsb', 'egll', 'lowi', 'eddl',
  'lsme', 'ebbr'
]




// functions


function GetAirportOptions(){
  // change light sel
  AIRPORTOPT_BUTTON.classList.toggle('airportopt_clicked')
  AIPRORT_CHART_CHAPTER_ACC1.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC2.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC3.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC4.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC5.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC6.classList.remove('airport_charts_chapters_clicked')


  // show dropdown menu
  AIRPORT_MENU.classList.toggle('dropdown_menu_list_show')
  REF_MENU.classList.remove('dropdown_menu_list_show')
  CO_MENU.classList.remove('dropdown_menu_list_show')
  STAR_MENU.classList.remove('dropdown_menu_list_show')
  APPR_MENU.classList.remove('dropdown_menu_list_show')
  TAXI_MENU.classList.remove('dropdown_menu_list_show')
  SID_MENU.classList.remove('dropdown_menu_list_show')
}

function OpenACC_Menu1(){
  // change light sel
  AIRPORTOPT_BUTTON.classList.remove('airportopt_clicked')
  AIPRORT_CHART_CHAPTER_ACC1.classList.toggle('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC2.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC3.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC4.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC5.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC6.classList.remove('airport_charts_chapters_clicked')



  //show dropdown menu
  // dropdown_menu_list_show

  AIRPORT_MENU.classList.remove('dropdown_menu_list_show')
  REF_MENU.classList.toggle('dropdown_menu_list_show')
  CO_MENU.classList.remove('dropdown_menu_list_show')
  STAR_MENU.classList.remove('dropdown_menu_list_show')
  APPR_MENU.classList.remove('dropdown_menu_list_show')
  TAXI_MENU.classList.remove('dropdown_menu_list_show')
  SID_MENU.classList.remove('dropdown_menu_list_show')
}

function OpenACC_Menu2(){
  AIRPORTOPT_BUTTON.classList.remove('airportopt_clicked')
  AIPRORT_CHART_CHAPTER_ACC1.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC2.classList.toggle('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC3.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC4.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC5.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC6.classList.remove('airport_charts_chapters_clicked')



  //show dropdown menu
  AIRPORT_MENU.classList.remove('dropdown_menu_list_show')
  REF_MENU.classList.remove('dropdown_menu_list_show')
  CO_MENU.classList.toggle('dropdown_menu_list_show')
  STAR_MENU.classList.remove('dropdown_menu_list_show')
  APPR_MENU.classList.remove('dropdown_menu_list_show')
  TAXI_MENU.classList.remove('dropdown_menu_list_show')
  SID_MENU.classList.remove('dropdown_menu_list_show')
}

function OpenACC_Menu3(){
  AIRPORTOPT_BUTTON.classList.remove('airportopt_clicked')
  AIPRORT_CHART_CHAPTER_ACC1.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC2.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC3.classList.toggle('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC4.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC5.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC6.classList.remove('airport_charts_chapters_clicked')



  //show dropdown menu
  AIRPORT_MENU.classList.remove('dropdown_menu_list_show')
  REF_MENU.classList.remove('dropdown_menu_list_show')
  CO_MENU.classList.remove('dropdown_menu_list_show')
  STAR_MENU.classList.toggle('dropdown_menu_list_show')
  APPR_MENU.classList.remove('dropdown_menu_list_show')
  TAXI_MENU.classList.remove('dropdown_menu_list_show')
  SID_MENU.classList.remove('dropdown_menu_list_show')
}

function OpenACC_Menu4(){
  AIRPORTOPT_BUTTON.classList.remove('airportopt_clicked')
  AIPRORT_CHART_CHAPTER_ACC1.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC2.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC3.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC4.classList.toggle('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC5.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC6.classList.remove('airport_charts_chapters_clicked')

  //menu
  // show dropdown menu
  AIRPORT_MENU.classList.remove('dropdown_menu_list_show')
  REF_MENU.classList.remove('dropdown_menu_list_show')
  CO_MENU.classList.remove('dropdown_menu_list_show')
  STAR_MENU.classList.remove('dropdown_menu_list_show')
  APPR_MENU.classList.toggle('dropdown_menu_list_show')
  TAXI_MENU.classList.remove('dropdown_menu_list_show')
  SID_MENU.classList.remove('dropdown_menu_list_show')



}

function OpenACC_Menu5(){
  AIRPORTOPT_BUTTON.classList.remove('airportopt_clicked')
  AIPRORT_CHART_CHAPTER_ACC1.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC2.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC3.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC4.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC5.classList.toggle('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC6.classList.remove('airport_charts_chapters_clicked')


  //menu
  //show dropmenu menu
  AIRPORT_MENU.classList.remove('dropdown_menu_list_show')
  REF_MENU.classList.remove('dropdown_menu_list_show')
  CO_MENU.classList.remove('dropdown_menu_list_show')
  STAR_MENU.classList.remove('dropdown_menu_list_show')
  APPR_MENU.classList.remove('dropdown_menu_list_show')
  TAXI_MENU.classList.toggle('dropdown_menu_list_show')
  SID_MENU.classList.remove('dropdown_menu_list_show')




}

function OpenACC_Menu6(){
  AIRPORTOPT_BUTTON.classList.remove('airportopt_clicked')
  AIPRORT_CHART_CHAPTER_ACC1.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC2.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC3.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC4.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC5.classList.remove('airport_charts_chapters_clicked')
  AIPRORT_CHART_CHAPTER_ACC6.classList.toggle('airport_charts_chapters_clicked')

  //menu
  // show dropdown menu
  AIRPORT_MENU.classList.remove('dropdown_menu_list_show')
  REF_MENU.classList.remove('dropdown_menu_list_show')
  CO_MENU.classList.remove('dropdown_menu_list_show')
  STAR_MENU.classList.remove('dropdown_menu_list_show')
  APPR_MENU.classList.remove('dropdown_menu_list_show')
  TAXI_MENU.classList.remove('dropdown_menu_list_show')
  SID_MENU.classList.toggle('dropdown_menu_list_show')
}

function acstoggle(){
  frame.src = './acs.html';
}

function Show_runways_information(){
  frame.src = './runwaysinf.html';
}

function Getqueryairport(){
  let find_airport_inp_field = document.querySelector('.find_airport').value
  if ((find_airport_inp_field == AIRPORT_LIST[1] && AIRPROT_LIST_LOWER[1])){
      window.location.replace("./liml_chart.html");
  }
}





function BackToChart(){
  OVERLAY.classList.remove('flight_menu_show')

}


function ToInputFieldGetValue(){
  let flight_to_input_field = document.getElementById('toflightinput').value
  let flight_from_input_field = document.getElementById('fromflightinput').value
  if ((flight_from_input_field == AIRPORT_LIST[0]) && (flight_to_input_field == AIRPORT_LIST[1]) || (flight_from_input_field == AIRPROT_LIST_LOWER[0]) && (flight_to_input_field == AIRPROT_LIST_LOWER[1])){

      window.location.replace('/pages/rte/rte_ldza_liml.html');

  }
}


function ChageValue(){
  let flight_from_input_field = document.getElementById('fromflightinput').value
  let flight_to_input_field = document.getElementById('toflightinput').value
  document.getElementById('fromflightinput').value = flight_to_input_field
  document.getElementById('toflightinput').value = flight_from_input_field
}



function OpenMyFlightsPage(){
  frame.src = './MyFlights.html';
}

function OpenCommPage()
{
  frame.src="./comms.html"
}


function linkclick()
{
  frame.classList.add('change_size');
  console.log("frame size is changed!")
}

function departure_link_open_chart()
{
  if (DEPARTURE_LINK.innerHTML == AIRPORT_LIST[1])
  {
      window.location.replace('./liml_chart.html');
  }
}

function arrival_link_open_chart()
{
  null
}


function ShowUserMenu()
{
  USER_MENU.classList.toggle('user_container_active');
}

function Change_theme_to_light()
{
  localStorage.setItem('THEME', '1');
  LIGHT_THEME_SW.classList.add("light_theme_active")
  DARK_THEME_SW.classList.remove('dark_theme_active')
}

function Change_theme_to_dark(){
  localStorage.setItem('THEME', '0');
  LIGHT_THEME_SW.classList.remove("light_theme_active")
  DARK_THEME_SW.classList.add('dark_theme_active')
}

function OpenApplicationSettings()
{
  APPLICATION_SETTINGS_MENU.classList.add("settings_container_active")
  USER_MENU.classList.remove("user_container_active")
}

function ClosedSetMenu()
{
  APPLICATION_SETTINGS_MENU.classList.remove('settings_container_active')
}


// bind functions
AIRPORTOPT_BUTTON.addEventListener('click', GetAirportOptions)
AIPRORT_CHART_CHAPTER_ACC1.addEventListener('click', OpenACC_Menu1)
AIPRORT_CHART_CHAPTER_ACC2.addEventListener('click', OpenACC_Menu2)
AIPRORT_CHART_CHAPTER_ACC3.addEventListener('click', OpenACC_Menu3)
AIPRORT_CHART_CHAPTER_ACC4.addEventListener('click', OpenACC_Menu4)
AIPRORT_CHART_CHAPTER_ACC5.addEventListener('click', OpenACC_Menu5)
AIPRORT_CHART_CHAPTER_ACC6.addEventListener('click', OpenACC_Menu6)
// LIGHT_THEME_SW.addEventListener('click', Change_theme_to_light)
// DARK_THEME_SW.addEventListener('click', Change_theme_to_dark)
acs.addEventListener('click', acstoggle)
comm.addEventListener('click', OpenCommPage)
// RUNWAYS_INF_BUTTON.addEventListener('click', Show_runways_information)
WX_BUTTON.addEventListener('click', ()=>
{
  frame.src = './airportswx.html';
})
FLIGHTS.addEventListener('click', OpenMyFlightsPage)
// user_menu_btn.addEventListener('click', ShowUserMenu)
//DEPARTURE_LINK.addEventListener('click', departure_link_open_chart)
//ARRIVAL_LINK.addEventListener('click', arrival_link_open_chart)
form.addEventListener('submit', (e) =>
{
  e.preventDefault();

  let find_input = document.querySelector('.find_airport_input').value

  if (find_input == "LIML")
  {
    console.log('check work');
    
    window.location.replace('./liml_chart.html');
  }

  if (find_input == "LDZA")

  {
    window.location.replace('./ldza_chart.html');
  }

  if (find_input == "LDSP")

  {
    window.location.replace('./ldsp_chart.html');
  }

  if (find_input == "LSZH")

  {
    window.location.replace('./lszh_chart.html');
  }
})


