const btn = document.getElementById('btn');
const api = 'aa2ed12d93ba18e5ef77cfe8606163d5'

const weatherClass = {
    Clouds: 'images/cloud.svg',
    broken: 'images/broken.svg',
    Clear: 'images/sun.svg',
    Snow: 'images/snow.svg',
    few: 'images/light.svg',
    clear: 'images/sun.svg',
    light: 'images/lightSnow.svg',
    overcast: 'images/cloud.svg'

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

                const realTime = data.list[0].dt_txt
                const realTimeSplit = realTime.split(' ')[0]
                const realTimeOnly = realTimeSplit.substring(0, 10)
                document.getElementById('date').textContent = realTimeOnly

                // 
                // weather now
                const temp = data.list[0].main.temp
                const roundTempNow = Math.round(temp)
                document.querySelector('.weather__temp').textContent = roundTempNow;


                // wheatherCondition NOW


                const wheatherConditionNow = data.list[0].weather[0].description
                const description1 = wheatherConditionNow.split(' ')[0]

                console.log(description1)


                const wheatherIcon = document.createElement('img')
                wheatherIcon.src = weatherClass[description1]
                wheatherIcon.style.width = '100px'
                wheatherIcon.style.height = '100px'

                const icon = document.getElementById('icon')
                icon.innerHTML = '';
                // console.log(wheatherIcon)
                icon.appendChild(wheatherIcon)

                // weather 15 o'clock

                //   1st time
                const time = data.list[0].dt_txt
                console.log(time)
                const dataSplit = time.split(' ')[1]
                const timeOnly = dataSplit.substring(0, 5)
                document.getElementById('first__time').textContent = timeOnly
                    // 2nd time
                const time2 = data.list[1].dt_txt
                console.log(time2)
                const dataSplit2 = time2.split(' ')[1]
                const timeOnly2 = dataSplit2.substring(0, 5)
                document.getElementById('second__time').textContent = timeOnly2
                    //    3rd time     

                const time3 = data.list[2].dt_txt
                    // console.log(time2)
                const dataSplit3 = time3.split(' ')[1]
                const timeOnly3 = dataSplit3.substring(0, 5)
                document.getElementById('third__time').textContent = timeOnly3
                    // 4 time
                const time4 = data.list[3].dt_txt
                    // console.log(time2)
                const dataSplit4 = time4.split(' ')[1]
                const timeOnly4 = dataSplit4.substring(0, 5)
                document.getElementById('four__time').textContent = timeOnly4



            })
            .catch((error) => console.log(error));

    })
    // 12:00 o'clock
function twelveTime(data) {
    const tempTwelve = data.list[0].main.temp;
    const roundTempTwelve = Math.round(tempTwelve)
    document.querySelector('.twelve').textContent = roundTempTwelve;

    const airConditionTvelweTime = data.list[0].weather[0].main;
    // const airgfg = airConditionTvelwe.split(' ')[0]
    // console.log(airgfg)


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
    const tempThree = data.list[1].main.temp;
    const roundTempThree = Math.round(tempThree)
    document.querySelector('.three').textContent = roundTempThree;

    const airConditionThreeTime = data.list[1].weather[0].main;
    const airConditionThree = document.createElement('img')
    airConditionThree.src = weatherClass[airConditionThreeTime]
    airConditionThree.style.width = '50px'
    airConditionThree.style.height = '50px'
    const airConditionThreeSky = document.getElementById('airConditionThreeSky')
    airConditionThreeSky.innerHTML = ''
    airConditionThreeSky.appendChild(airConditionThree)

}

function sixTime(data) {
    const tempSix = data.list[2].main.temp;
    const roundTempSix = Math.round(tempSix)
    document.querySelector('.six').textContent = roundTempSix;

    const airConditionSixTime = data.list[2].weather[0].description;
    const description3 = airConditionSixTime.split(' ')[0]
    const airConditionSix = document.createElement('img')
    airConditionSix.src = weatherClass[description3]
    airConditionSix.style.width = '50px'
    airConditionSix.style.height = '50px'
    const airConditionSixSky = document.getElementById('airConditionSixSky')
    airConditionSixSky.innerHTML = ''
    airConditionSixSky.appendChild(airConditionSix)

}

function nineTime(data) {
    const tempNine = data.list[3].main.temp;
    const roundTempNine = Math.round(tempNine)
    document.querySelector('.nine').textContent = roundTempNine;

    const airConditionNineTime = data.list[3].weather[0].main;
    const airConditionNine = document.createElement('img')
    airConditionNine.src = weatherClass[airConditionNineTime]
    airConditionNine.style.width = '50px'
    airConditionNine.style.height = '50px'
    const airConditionNineSky = document.getElementById('airConditionNineSky')
    airConditionNineSky.innerHTML = ''
    airConditionNineSky.appendChild(airConditionNine)

}
