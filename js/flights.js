const ADD_FLIGHT = document.getElementById('act2')
const CURRENT_FLIGHT = document.getElementById('act3')



function rec()
{
  window.location.replace("recflt.html")
}

function gotocurrent()
{
  window.location.href = "enroute.html"
}

function Getlist()
{
  window.location.href = "listofflts.html";
}

function CreateNewFlight()
{
  window.location.href = "createflight.html";
}

ADD_FLIGHT.addEventListener('click', CreateNewFlight)
CURRENT_FLIGHT.addEventListener('click', gotocurrent)