const weatherClass = {
    Clouds: {
        src: 'images/cloud.svg',
        alt: 'Cloudy'
    },
    broken: {
        src: 'images/broken.svg',
        alt: 'Broken clouds'
    },
    Clear: {
        src: 'images/sun.svg',
        alt: 'Clear skies'
    },
    Snow: {
        src: 'images/snow.svg',
        alt: 'Snowy'
    },
    few: {
        src: 'images/broken.svg',
        alt: 'Few clouds'
    },
    clear: {
        src: 'images/sun.svg',
        alt: 'Clear skies'
    },
    light: {
        src: 'images/lightRain.svg',
        alt: 'Light rain'
    },
    overcast: {
        src: 'images/cloud.svg',
        alt: 'Overcast'
    },
    scattered: {
        src: 'images/broken.svg',
        alt: 'Scattered clouds'
    },
    moderate: {
        src: 'images/havy.svg',
        alt: 'Heavy rain'
    },
    night: {
        src: 'images/clearNight.svg',
        alt: 'Clear night'
    },
    nightClouds: {
        src: 'images/fewCloudsNight.svg',
        alt: 'Few clouds at night'
    }
};





const btn = document.getElementById('btn');
const api = 'aa2ed12d93ba18e5ef77cfe8606163d5'
    // const defaultCity = 'Belfast'
let iconNow = document.getElementById('icon__now')

function btnChangeTemp(data) {
    const btnCity = data.list[0].main.temp
    const roundBtnCity = Math.round(btnCity)
    document.querySelector('.weather__temp').textContent = roundBtnCity

    // document.querySelector('.locationCity').textContent = city



}





// let iconNow = document.getElementById('icon__now')


window.onload = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;


        const urlOnload = `https://api.openweathermap.org/data/2.5/forecast?q=&lat=${lat}&lon=${lon}&appid=${api}&units=metric`

        // console.log(urlOnload)


        // const urlNav = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lat=${lat}&lon=${lon}&appid=${api}&units=metric`;


        fetch(urlOnload)
            .then((Response) => Response.json())
            .then((data) => {
                // get location NAME
                dddd(data)

                timeOnly4(data)
                timeOnly3(data)
                timeOnly2(data)
                timeOnly1(data)


                twelveTime(data)
                threeTime(data)
                sixTime(data)
                nineTime(data)
                    // const time = data.list[0].dt_txt
                    //     // console.log(time)
                    // const dataSplit = time.split(' ')[1]
                    // const timeOnly = dataSplit.substring(0, 5)
                    // document.getElementById('first__time').textContent = timeOnly
                    // 2nd time
                    // const time2 = data.list[1].dt_txt
                    //     // console.log(time2)
                    // const dataSplit2 = time2.split(' ')[1]
                    // const timeOnly2 = dataSplit2.substring(0, 5)
                    // document.getElementById('second__time').textContent = timeOnly2
                    //    3rd time     

                // const time3 = data.list[2].dt_txt
                //     // console.log(time2)
                // const dataSplit3 = time3.split(' ')[1]
                // const timeOnly3 = dataSplit3.substring(0, 5)
                // document.getElementById('third__time').textContent = timeOnly3
                // 4 time
                // const time4 = data.list[3].dt_txt
                //     // console.log(time2)
                // const dataSplit4 = time4.split(' ')[1]
                // const timeOnly4 = dataSplit4.substring(0, 5)
                // document.getElementById('four__time').textContent = timeOnly4

                // const realTime = data.list[0].dt_txt
                // const realTimeSplit = realTime.split(' ')[0]
                // const realTimeOnly = realTimeSplit.substring(0, 10)
                // document.getElementById('date').textContent = realTimeOnly


                const cityName = data.city.name;
                // console.log(cityName);
                document.querySelector('.locationCity').textContent = cityName

                const openWindow = data.list[0].main.temp;
                const openWindowDecimal = Math.round(openWindow)
                document.querySelector('.weather__temp').textContent = openWindowDecimal;



            })
    })
}

function timeOnly1(data) {
    const time = data.list[0].dt_txt
        // console.log(time)
    const dataSplit = time.split(' ')[1]
    const timeOnly = dataSplit.substring(0, 5)
    document.getElementById('first__time').textContent = timeOnly
}

function timeOnly2(data) {
    const time2 = data.list[1].dt_txt
        // console.log(time2)
    const dataSplit2 = time2.split(' ')[1]
    const timeOnly2 = dataSplit2.substring(0, 5)
    document.getElementById('second__time').textContent = timeOnly2
}

function timeOnly3(data) {

    const time3 = data.list[2].dt_txt
        // console.log(time2)
    const dataSplit3 = time3.split(' ')[1]
    const timeOnly3 = dataSplit3.substring(0, 5)
    document.getElementById('third__time').textContent = timeOnly3
}


function timeOnly4(data) {
    const time4 = data.list[3].dt_txt
        // console.log(time2)
    const dataSplit4 = time4.split(' ')[1]
    const timeOnly4 = dataSplit4.substring(0, 5)
    document.getElementById('four__time').textContent = timeOnly4

    const realTime = data.list[0].dt_txt
    const realTimeSplit = realTime.split(' ')[0]
    const realTimeOnly = realTimeSplit.substring(0, 10)
    document.getElementById('date').textContent = realTimeOnly
}

// https://api.openweathermap.org/data/2.5/forecast?q=kaunas&appid=aa2ed12d93ba18e5ef77cfe8606163d5&units=metric


btn.addEventListener('click', () => {


    const city = document.getElementById('city').value;
    const capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
    document.querySelector('.locationCity').textContent = capitalizedCity;




    // navigator.geolocation.getCurrentPosition((position) => {
    //     const lat = position.coords.latitude;
    //     const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}&units=metric`;

    // console.log(url)
    fetch(url)
        .then((Response) => Response.json())
        .then((data) => {

            dddd(data)
            twelveTime(data)
            threeTime(data)
            sixTime(data)
            nineTime(data)

            btnChangeTemp(data)



            const realTime = data.list[0].dt_txt
            const realTimeSplit = realTime.split(' ')[0]
            const realTimeOnly = realTimeSplit.substring(0, 10)
            document.getElementById('date').textContent = realTimeOnly


            // weather 15 o'clock

            //   1st time
            const time = data.list[0].dt_txt
                // console.log(time)
            const dataSplit = time.split(' ')[1]
            const timeOnly = dataSplit.substring(0, 5)
            document.getElementById('first__time').textContent = timeOnly
                // 2nd time
            const time2 = data.list[1].dt_txt
                // console.log(time2)
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


            const city = data.city.name;
            document.getElementById('city').textContent = city;

        })
        .catch((error) => console.log(error));

    // }

})





// function btnChangeTemp(data) {
//     const btnCity = data.list[0].main.temp
//     const roundBtnCity = Math.round(btnCity)
//     document.querySelector('.weather__temp').textContent = roundBtnCity

//     // document.querySelector('.locationCity').textContent = city



// }


// 12:00 o'clock
function twelveTime(data) {
    // weatherNow()
    const time = data.list[0].dt_txt
        // console.log(time)

    const dataSplit = time.split(' ')[1]
    const timeOnly = dataSplit.substring(0, 5)

    // console.log(timeOnly)
    // document.getElementById('first__time').textContent = timeOnly

    const makeNumber = parseInt(timeOnly)
        // console.log(makeNumber)

    const tempTwelve = data.list[0].main.temp;
    const roundTempTwelve = Math.round(tempTwelve)
    document.querySelector('.twelve').textContent = roundTempTwelve;





    const airConditionTvelweTime = data.list[0].weather[0].description;

    let description1 = airConditionTvelweTime.split(' ')[0];
    // console.log(description1)




    if (makeNumber >= 21 || makeNumber <= 6) {

        if (description1 === 'clear') {
            description1 = 'night'
        } else if (description1 === 'few') {
            description1 = 'nightClouds'
        } else if (description1 === 'broken') {
            description1 = 'nightClouds'
        } else if (description1 === 'scattered') {
            description1 = 'nightClouds'
        }
    }

    const airConditionTvelwe = document.createElement('img')
    airConditionTvelwe.src = weatherClass[description1].src
    airConditionTvelwe.alt = 'weather condition'
    airConditionTvelwe.style.width = '50px'
    airConditionTvelwe.style.height = '50px'

    const airConditionTvelweSky = document.getElementById('airConditionTvelweSky')
    airConditionTvelweSky.innerHTML = '';
    airConditionTvelweSky.appendChild(airConditionTvelwe)






}



function threeTime(data) {
    const time = data.list[1].dt_txt
        // console.log(time)

    const dataSplit = time.split(' ')[1]

    const timeOnly = dataSplit.substring(0, 5)
        // console.log(timeOnly)
        // document.getElementById('first__time').textContent = timeOnly

    const makeNumber = parseInt(timeOnly)
        // console.log(makeNumber)

    const tempThree = data.list[1].main.temp;
    const roundTempThree = Math.round(tempThree)
    document.querySelector('.three').textContent = roundTempThree
        // document.querySelector('.three').textContent = roundTempThree;

    const airConditionThreeTime = data.list[1].weather[0].description;
    let description2 = airConditionThreeTime.split(' ')[0]
    if (makeNumber >= 21 || makeNumber <= 6) {

        if (description2 === 'clear') {
            description2 = 'night'
        } else if (description2 === 'few') {
            description2 = 'nightClouds'
        } else if (description2 === 'broken') {
            description2 = 'nightClouds'
        } else if (description2 === 'scattered') {
            description2 = 'nightClouds'
        }
    }
    const airConditionThree = document.createElement('img')
    airConditionThree.src = weatherClass[description2].src
    airConditionThree.alt = 'weather condition'
    airConditionThree.style.width = '50px'
    airConditionThree.style.height = '50px'
    const airConditionThreeSky = document.getElementById('airConditionThreeSky')
    airConditionThreeSky.innerHTML = ''
    airConditionThreeSky.appendChild(airConditionThree)

}

function sixTime(data) {
    const time = data.list[2].dt_txt
        // console.log(time)

    const dataSplit = time.split(' ')[1]

    const timeOnly = dataSplit.substring(0, 5)
        // console.log(timeOnly)
        // document.getElementById('first__time').textContent = timeOnly

    const makeNumber = parseInt(timeOnly)
        // console.log(makeNumber)

    const tempSix = data.list[2].main.temp;
    const roundTempSix = Math.round(tempSix)
    document.querySelector('.six').textContent = roundTempSix
        // document.querySelector('.six').textContent = roundTempSix;

    const airConditionSixTime = data.list[2].weather[0].description;
    let description3 = airConditionSixTime.split(' ')[0]
    if (makeNumber >= 21 || makeNumber <= 6) {

        if (description3 === 'clear') {
            description3 = 'night'
        } else if (description3 === 'few') {
            description3 = 'nightClouds'
        } else if (description3 === 'broken') {
            description3 = 'nightClouds'
        } else if (description3 === 'scattered') {
            description3 = 'nightClouds'
        }
    }
    // console.log(description3)
    const airConditionSix = document.createElement('img')
    airConditionSix.src = weatherClass[description3].src
    airConditionSix.alt = 'weather condition'
    airConditionSix.style.width = '50px'
    airConditionSix.style.height = '50px'
    const airConditionSixSky = document.getElementById('airConditionSixSky')
    airConditionSixSky.innerHTML = ''
    airConditionSixSky.appendChild(airConditionSix)

}

function nineTime(data) {
    const time = data.list[3].dt_txt
        // console.log(time)

    const dataSplit = time.split(' ')[1]

    const timeOnly = dataSplit.substring(0, 5)
        // console.log(timeOnly)
        // document.getElementById('first__time').textContent = timeOnly

    const makeNumber = parseInt(timeOnly)
        // console.log(makeNumber)

    const tempNine = data.list[3].main.temp;
    const roundTempNine = Math.round(tempNine)
    document.querySelector('.nine').textContent = roundTempNine;

    const airConditionNineTime = data.list[3].weather[0].description;
    let description4 = airConditionNineTime.split(' ')[0]
    if (makeNumber >= 21 || makeNumber <= 6) {

        if (description4 === 'clear') {
            description4 = 'night'
        } else if (description4 === 'few') {
            description4 = 'nightClouds'
        } else if (description4 === 'broken') {
            description4 = 'nightClouds'
        } else if (description4 === 'scattered') {
            description4 = 'nightClouds'
        }
    }
    const airConditionNine = document.createElement('img')
    airConditionNine.src = weatherClass[description4].src
    airConditionNine.alt = 'weather condition'

    airConditionNine.style.width = '50px'
    airConditionNine.style.height = '50px'
    const airConditionNineSky = document.getElementById('airConditionNineSky')
    airConditionNineSky.innerHTML = ''
    airConditionNineSky.appendChild(airConditionNine)

}

function dddd(data) {
    const timeTimeNow = data.list[0].dt_txt


    const dataSplit = timeTimeNow.split(' ')[1]
    const timeOnly = dataSplit.substring(0, 5)



    const getTime = parseInt(timeOnly)
    const openWindowIcon = data.list[0].weather[0].description

    // console.log(openWindowIcon)
    let description5 = openWindowIcon.split(' ')[0]
    if (getTime >= 21 || getTime <= 6) {

        if (description5 === 'clear') {
            description5 = 'night'
        } else if (description5 === 'few') {
            description5 = 'nightClouds'
        } else if (description5 === 'broken') {
            description5 = 'nightClouds'
        } else if (description5 === 'scattered') {
            description5 = 'nightClouds'
        }
    }


    const openWindowShowIcon = document.createElement('img')
    openWindowShowIcon.setAttribute('alt', 'weather condition')
    openWindowShowIcon.src = weatherClass[description5].src
    openWindowShowIcon.style.width = '120px'
    openWindowShowIcon.style.height = '120px'

    iconNow = document.getElementById('icon__now')

    iconNow.innerHTML = '';
    iconNow.appendChild(openWindowShowIcon)
}
