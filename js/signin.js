// get elements
let bodyel = document.querySelector('body');
let form = document.getElementById('fg');
bodyel.classList.add('body_content_center_for_access')

const AccessTokens = 
[
  'eer12sd', 'ssiggnr45977', "fdvOxc", "gz7b8nx", "bqgIEcqdls", "NdVjL2g3", "PFT4Gai",
  "Y2HkcQi", 'X5Yqcx', 'XNIlu', 'D8XVse2q', 'fdv65odOKFOpQaXP9', 'DhNj5n3', 'qr7XWwqs44',
  '70TjQhL8', 'eneND', 'koIFI1O', 'IcRI5s1E4H'
]

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  let AccessTokenInput = document.querySelector('.tokenInput').value

  if (AccessTokenInput == AccessTokens[0])
  {
    window.location.replace('./ldza_chart.html');

  }

})