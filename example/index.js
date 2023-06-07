import  {generateCalender, showCalendar} from '../calendar/utils.js';

//set the current month to zero, next month will be 1 and previous month will be -1
// const getMonth = generateCalender(currentMonth);
// const dayElement =``;
// document.querySelector('.weeks').innerHTML =``;
// const showCalendar = async (currentMonth=0) => {
//     const month = generateCalender(currentMonth)
//     let monthHtml = ``;
//     month?.weeks.map((week, weekIndex)=>{
//         let weekHtml = `<div class="row week">`;
//         week.map((day, dayIndex)=>{
//             let dayHtml = `<div class="col day"> <span>${day.day ? day.day : ''}</span> </div>`;
//             weekHtml+=dayHtml;
//         })

//         weekHtml+=`</div>`;
//         monthHtml+=weekHtml;

//     });
//     document.querySelector('.weeks').innerHTML = monthHtml;
// }


// let currentMonth = 0
// showCalendar(currentMonth);


// export const showNextMonth = () => {
//     currentMonth = currentMonth+1;
//     showCalendar(currentMonth);
// }

// export const showPreviousMonth = () => {
//     currentMonth = currentMonth-1;
//     showCalendar(currentMonth);
// }

const clickHandler = (event) => {
    console.log(event.target)
    
}

const doubleClickHandler = (event) => {
    console.log(event)
}
const mouseOverHandler = () => {
    // console.log("Hovered")
}

const rangeSelectHandler = () => {
    return 
}

const config = {
    eventHandlers:{
        clickHandler: clickHandler,
        doubleClickHandler:doubleClickHandler,
        mouseOverHandler:mouseOverHandler,
        rangeSelectHandler:rangeSelectHandler
    },
    layout:'classic',
    utils:true
}

const calendar = showCalendar(0, config);