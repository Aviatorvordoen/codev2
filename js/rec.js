const add_btn = document.querySelector('.rec_button');


function add_flight_to_list()
{
  let RecInputFrom = document.getElementById('inpfromid').value
  let RecInputTo = document.getElementById('inptoid').value
  let RecInputDate = document.getElementById('dateinpid').value
  let RecInputTime = document.getElementById("timeenrouteinpid").value

  if (RecInputTo)
  {
    localStorage.setItem("FROM", RecInputFrom)
  }

  if(RecInputFrom)
  {
    localStorage.setItem("TO", RecInputTo)
  }

  if(RecInputDate)
  {
    localStorage.setItem("DATE", RecInputDate)
  }

  if (RecInputTime)
  {
    localStorage.setItem("TENROUTE", RecInputTime)
  }

}

add_btn.addEventListener('click', add_flight_to_list)