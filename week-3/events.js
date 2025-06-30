//events
//event handling - functions taking action to respond to the action
//event listening - method which takes the method to do the action, HTML element
//element.addEventListner(eventType, handlerFunction)

const button = document.getElementById('submitButton')
//element.addEventsListner
function handlesubmit() {
  alert('your chick request has been submitted'); 
  console.log()

}
button.addEventListener('click', handlesubmit)
button.removeEventListener('click', handlesubmit)
//event objects

document.addEventListener('click', function(event){
    //game development to know where the click happened
    console.log(event.clientX, event.clientY)
})

document.addEventListener('key', function(event){
    //how to detect the key that is pressed on the keyboard
    console.log(event.key)
})


