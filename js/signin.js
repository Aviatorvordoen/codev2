// on load page
// window.onload = ()=>{
//   if (localStorage.getItem('NW'))
//   {
//     AccessTokens.push(localStorage.getItem('NW'))
//     localStorage.removeItem('NW');
//     console.log(AccessTokens);
//   }
// }


// get elements
let bodyel = document.querySelector('body');
let form = document.getElementById('fg');
// let apply_text = document.querySelector('.donetext')
// let reset_label = document.querySelector('.rst_text')
// let reset_token_link = document.querySelector('.reset_token_link').addEventListener('click', Reset_token)
bodyel.classList.add('body_content_center_for_access')
const login_btn = document.getElementById('login_btnid').addEventListener('click', ()=>{
  let AccessTokenInput = document.querySelector('.tokenInput').value
  // console.log(AccessTokens);
  // let AccessTokenInput = document.querySelector('.TokenReset_input').value;
  if ((AccessTokenInput == AccessTokens[0]) || (AccessTokenInput == AccessTokens.at(-1)))
  {
    console.log('work');
    window.location.replace('ldza_chart.html');
  }

})

function Reset_token()
{
  reset_label.classList.add('rst_text_show');
  reset_input.classList.add('rst_input_show');

}

const AccessTokens = 
[
  'eer12sd', 'ssiggnr45977', "fdvOxc", "gz7b8nx", "bqgIEcqdls", "NdVjL2g3", "PFT4Gai",
  "Y2HkcQi", 'X5Yqcx', 'XNIlu', 'D8XVse2q', 'fdv65odOKFOpQaXP9', 'DhNj5n3', 'qr7XWwqs44',
  '70TjQhL8', 'eneND', 'koIFI1O', 'IcRI5s1E4H'
]

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  // console.log('working');
  // valid path
  if (window.location.pathname == './pages/signIN.html')
  {
    // console.log('df')
    let AccessTokenInput = document.querySelector('.TokenReset_input').value
    // console.log(AccessTokens);
    // let AccessTokenInput = document.querySelector('.TokenReset_input').value;
    // if ((AccessTokenInput == AccessTokens[0]) || (AccessTokenInput == AccessTokens.at(-1)))
    if (AccessTokenInput == "1")
    {
      console.log('work');
      window.location.replace('.ldza_chart.html');
    }
  }

  if (window.location.pathname == './pages/reset_entry_token.html')
  {
    let ResetTokenInputField = document.querySelector('.TokenReset_input').value
    if (ResetTokenInputField == ResetTokenInputField)
    {
      localStorage.setItem("NW", ResetTokenInputField)
    }
    

  }
})