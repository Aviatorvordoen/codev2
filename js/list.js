let getDatevalue = localStorage.getItem("DATE")
let getFromvalue = localStorage.getItem("FROM")
let getTovalue = localStorage.getItem("TO")
let getTimevalue = localStorage.getItem("TENROUTE")
let divcont = document.querySelector(".flightlogscontainer")

let _isWork = true;


if (_isWork)
{
  let i = 0;
  for (i = 0; i>{

  }
  let paragrahDate = document.createElement('p');
  let paragrahFrom = document.createElement('p');
  let paragrahTO = document.createElement('p');
  let paragrahTime = document.createElement('p');

  paragrahDate.className = "data";
  paragrahFrom.className = "flightlogdepature";
  paragrahTO.className = "flightlogarrival";
  paragrahTime.className = "flightlogtimeenroute";
  
  
  paragrahDate.innerHTML = getDatevalue;
  paragrahFrom.innerHTML = getFromvalue;
  paragrahTO.innerHTML = getTovalue;
  paragrahTime.innerHTML = getTimevalue;

  divcont.append(paragrahDate);
  divcont.append(paragrahFrom);
  divcont.append(paragrahTO);
  divcont.append(paragrahTime);


}