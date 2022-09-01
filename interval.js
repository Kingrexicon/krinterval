
const countTimer = () => {
    let myhour = hour.value
    let myMinute = minutes.value
    let myseconds = seconds.value
    
       myTime = setTimeout(countTimer, 1000)
      if (myhour == 0 && myMinute == 0 && myseconds == 0) {
        hour.value = 0
        minutes.value = 0
        seconds.value = 1
        time.innerHTML = `<div id="clock"><div id="long"> </div> </div>`
      }
      else if (seconds.value != 0 && seconds.value < 60) {
        seconds.value++

      }
      else if (minutes.value >= 0 && seconds.value == 60 && minutes.value < 60){
        seconds.value = 1
        minutes.value++
      }
    
      else if(hour.value >= 0 && minutes.value == 60 && seconds.value ==60  ){
        minutes.value = 1
        seconds.value = 1
        hour.value ++
      }

    }
  



    const countStop = () => {
clearTimeout(myTime)

 myhour = 0
 myMinute = 0
seconds.value = 0

    }

    const countPause =() =>{

      clearTimeout(myTime)
     
      }

    
     
    
      
    
    