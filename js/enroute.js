let storage_departure = localStorage.getItem("Departure")
let storage_arrival = localStorage.getItem("Arrival")
let storage_route = localStorage.getItem("Route")

const output_text_field1 = document.getElementById('out1')
const output_text_field2 = document.getElementById('out2')
const output_text_field3 = document.getElementById('out3')
const output_text_field21 = document.getElementById('out21')

window.onload = () => {
  output_text_field1.innerHTML = storage_departure;
  output_text_field2.innerHTML = storage_arrival;
  output_text_field3.innerHTML = storage_route;
}