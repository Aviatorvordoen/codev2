window.onload = (e)=>
{

}

const frame = document.querySelector('.frclass')
const AIRPORT_LIST = 
[
    'LDZA', 'LIML', 'LDSP', 'LSZH', 'LKPR', 'EKRN', 'ESMT', 'ESGG', 'ESKN', 'EDDH', 'EDDK',
    'LOWW', 'EDDP', 'ESSV', 'EDDF', 'LIRF', 'LIPZ', 'LFSB', 'EGLL', 'LOWI', 'EDDL',
    'LSME', 'EBBR'
]

const show_wx_btn = document.querySelector('.show_wx').addEventListener('click', ()=>{
  const wx_sel = document.querySelector('.sel').value
  
  if (wx_sel == AIRPORT_LIST[0])
  {
    frame.src = 'https://www.checkwx.com/weather/LDZA/metar';
    
  }

  if (wx_sel == AIRPORT_LIST[1])
  {
    frame.src = 'https://www.checkwx.com/weather/LIML/metar';
    
  }

  if (wx_sel == AIRPORT_LIST[2])
  {
    frame.src = 'https://www.checkwx.com/weather/LDSP/metar';
    
  }

  if (wx_sel == AIRPORT_LIST[3])
  {
    frame.src = 'https://www.checkwx.com/weather/LSZH/metar';
  
  }

  if (wx_sel == AIRPORT_LIST[4])
  {
    frame.src = 'https://www.checkwx.com/weather/LKPR/metar';
    
  }


  if (wx_sel == AIRPORT_LIST[5])
  {
    frame.src = 'https://www.checkwx.com/weather/EKRN/metar';
    
  }

  if (wx_sel == AIRPORT_LIST[6])
  {
    frame.src = 'https://www.checkwx.com/weather/ESMT/metar';
    
  }

  if (wx_sel == AIRPORT_LIST[7])
  {
    frame.src = 'https://www.checkwx.com/weather/ESGG/metar';
    
  }

  if (wx_sel == AIRPORT_LIST[8])
  {
    frame.src = 'https://www.checkwx.com/weather/ESKN/metar';
    
  }

  if (wx_sel == AIRPORT_LIST[9])
  {
    frame.src = 'https://www.checkwx.com/weather/EDDH/metar';
    
  }

  if (wx_sel == AIRPORT_LIST[10])
  {
    frame.src = 'https://www.checkwx.com/weather/EDDK/metar';
    
  }

  if (wx_sel == AIRPORT_LIST[11])
  {
    frame.src = 'https://www.checkwx.com/weather/LOWW/metar';
    
  }

  if (wx_sel == AIRPORT_LIST[12])
  {
    frame.src = 'https://www.checkwx.com/weather/EDDP/metar';
    
  }

  if (wx_sel == AIRPORT_LIST[13])
  {
    frame.src = 'https://www.checkwx.com/weather/ESSV/metar';
    
  }

  if (wx_sel == AIRPORT_LIST[14])
  {
    frame.src = 'https://www.checkwx.com/weather/EDDF/metar';
  }

  if (wx_sel == AIRPORT_LIST[15])
  {
    frame.src = 'https://www.checkwx.com/weather/LIRF/metar'; 
  }

  if (wx_sel == AIRPORT_LIST[16])
  {
    frame.src = 'https://www.checkwx.com/weather/LIPZ/metar';
  }

  if (wx_sel == AIRPORT_LIST[17])
  {
    frame.src = 'https://www.checkwx.com/weather/LFSB/metar'; 
  }

  if (wx_sel == AIRPORT_LIST[18])
  {
    frame.src = 'https://www.checkwx.com/weather/EGLL/metar';
    
  }
  if (wx_sel == AIRPORT_LIST[19])
  {
    frame.src = 'https://www.checkwx.com/weather/LOWI/metar';
  }

  if (wx_sel == AIRPORT_LIST[20])
  {
    frame.src = 'https://www.checkwx.com/weather/EDDL/metar';
  }

  if (wx_sel == AIRPORT_LIST[21])
  {
    frame.src = 'https://www.checkwx.com/weather/LSME/metar';
  }

    if (wx_sel == AIRPORT_LIST[22])
  {
    frame.src = 'https://www.checkwx.com/weather/EBBR/metar';
  }
})