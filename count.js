
const countTimer = () => {
let myhour = hour.value
let myMinute = minutes.value
let myseconds = seconds.value

  myTime = setTimeout(countTimer, 1000)
  if (myhour == 0 && myMinute == 0 && myseconds == 0) {
    hour.value = 0
    minutes.value = 0
    seconds.value = 0
    time.innerHTML = `` 

  }
  else if (seconds.value != 0) {
    seconds.value--
   
  }
  else if (minutes.value != 0 && seconds.value ==0){
    seconds.value = 59
    minutes.value--
    time.innerHTML = `<div id="clock"><div id="long"> </div> </div>`
  }

  else if(hour.value != 0 && minutes.value == 0){
    minutes.value = 59
    seconds.value = 59
    hour.value --
  time.innerHTML = `<div id="clock"><div id="long"> </div> </div>`
  }

  else{
    time.innerHTML = ``
  }
}

const countStop =() =>{

clearTimeout(myTime)
   hour.value = 0
  minutes.value = 0
 seconds.value = 0
 time.innerHTML = ``  
}

const countPause =() =>{

  clearTimeout(myTime)
  time.innerHTML = ``
  }
  