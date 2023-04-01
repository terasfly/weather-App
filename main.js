const btn = document.getElementById('btn');
const api = 'aa2ed12d93ba18e5ef77cfe8606163d5'

const weatherClass = {
    Clouds: 'images/cloud.svg',
    Rain: 'images/rain.svg',
    Clear: 'images/sun.svg',
    Snow: 'images/snow.svg',
}

// https://api.openweathermap.org/data/2.5/forecast?q=kaunas&appid=aa2ed12d93ba18e5ef77cfe8606163d5&units=metric

btn.addEventListener('click', () => {
        const city = document.getElementById('city').value;
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}&units=metric`;

        fetch(url)
            .then((Response) => Response.json())
            .then((data) => {
                // console.log(url)
                twelveTime(data)
                threeTime(data)
                sixTime(data)
                nineTime(data)



                // 
                // weather now
                const temp = data.list[0].main.temp
                const roundTempNow = Math.round(temp)
                document.querySelector('.weather__temp').textContent = roundTempNow;

                const wheatherConditionNow = data.list[0].weather[0].main;
                const wheatherIcon = document.createElement('img')
                wheatherIcon.src = weatherClass[wheatherConditionNow]
                wheatherIcon.style.width = '100px'
                wheatherIcon.style.height = '100px'

                const icon = document.getElementById('icon')
                icon.innerHTML = '';
                // console.log(wheatherIcon)
                icon.appendChild(wheatherIcon)

                // weather 15 o'clock




            })
            .catch((error) => console.log(error));

    })
    // 12:00 o'clock
function twelveTime(data) {
    const tempTwelve = data.list[4].main.temp;
    const roundTempTwelve = Math.round(tempTwelve)
    document.querySelector('.twelve').textContent = roundTempTwelve;

    const airConditionTvelweTime = data.list[0].weather[0].main
    const airConditionTvelwe = document.createElement('img')
    airConditionTvelwe.src = weatherClass[airConditionTvelweTime]
    airConditionTvelwe.style.width = '50px'
    airConditionTvelwe.style.height = '50px'

    const airConditionTvelweSky = document.getElementById('airConditionTvelweSky')
    airConditionTvelweSky.innerHTML = '';
    airConditionTvelweSky.appendChild(airConditionTvelwe)

}
// 15:00 o'clock
function threeTime(data) {
    const tempThree = data.list[6].main.temp;
    const roundTempThree = Math.round(tempThree)
    document.querySelector('.three').textContent = roundTempThree;

    const airConditionThreeTime = data.list[6].weather[0].main;
    const airConditionThree = document.createElement('img')
    airConditionThree.src = weatherClass[airConditionThreeTime]
    airConditionThree.style.width = '50px'
    airConditionThree.style.height = '50px'
    const airConditionThreeSky = document.getElementById('airConditionThreeSky')
    airConditionThreeSky.innerHTML = ''
    airConditionThreeSky.appendChild(airConditionThree)

}

function sixTime(data) {
    const tempSix = data.list[11].main.temp;
    const roundTempSix = Math.round(tempSix)
    document.querySelector('.six').textContent = roundTempSix;

    const airConditionSixTime = data.list[11].weather[0].main;
    const airConditionSix = document.createElement('img')
    airConditionSix.src = weatherClass[airConditionSixTime]
    airConditionSix.style.width = '50px'
    airConditionSix.style.height = '50px'
    const airConditionSixSky = document.getElementById('airConditionSixSky')
    airConditionSixSky.innerHTML = ''
    airConditionSixSky.appendChild(airConditionSix)

}

function nineTime(data) {
    const tempNine = data.list[12].main.temp;
    const roundTempNine = Math.round(tempNine)
    document.querySelector('.nine').textContent = roundTempNine;

    const airConditionNineTime = data.list[12].weather[0].main;
    const airConditionNine = document.createElement('img')
    airConditionNine.src = weatherClass[airConditionNineTime]
    airConditionNine.style.width = '50px'
    airConditionNine.style.height = '50px'
    const airConditionNineSky = document.getElementById('airConditionNineSky')
    airConditionNineSky.innerHTML = ''
    airConditionNineSky.appendChild(airConditionNine)

}
