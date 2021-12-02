const btn = document.querySelector('.btn-start')
const calendarContainer = document.querySelector('.container')
const calendarday = 24;
const countdown = document.querySelector('.countdown')
const targetDate = new Date('Dec 24,2021,00:00:01').getTime();

btn.addEventListener('click',(event)=>{
    for (let index = 0; index < calendarday; index++) {
        const calendarDoor = document.createElement('div')
        calendarDoor.classList.add('image')
        const calendarDoorText = document.createElement('div')
        calendarDoorText.classList.add('text')

        calendarDoor.style.gridArea = `day${index+1}`
        calendarDoorText.innerHTML = index + 1

        calendarDoor.appendChild(calendarDoorText)
        calendarContainer.appendChild(calendarDoor)

        let picNumber = index + 1
        let picPath = `./img/pic${picNumber}.jpg`

        calendarDoorText.addEventListener('click',(event)=>{
            event.target.parentNode.style.backgroundImage = `url("${picPath}")`
            event.target.style.opacity = 0;
            event.target.style.backgroundColor = `#333`
        })
    }

    event.preventDefault();
})


//milliseconds since Jan 1,1970,00:00:00.000 GMT

const interval = setInterval(()=>{
    const now = new Date().getTime(); //get current
    const timeLeft = targetDate - now;
    const days = Math.floor(timeLeft/(1000*60*60*24))
    const hours = Math.floor(timeLeft%(1000*60*60*24)/(1000*60*60))
    const minutes = Math.floor(timeLeft%(1000*60*60)/(1000*60))
    const seconds = Math.floor(timeLeft%(1000*60)/1000)

    
    countdown.innerHTML = `<div><span>${days} päeva</span></div>
    <div><span>${hours} tundi</span></div>
    <div><span>${minutes} minutit</span></div>
    <div><span>${seconds} sekundit</span></div>`;
},1000)