const url1 = 'https://pokeapi.co/api/v2/pokemon/484/'
const url2 = 'https://pokeapi.co/api/v2/pokemon/15/'
const url3 = 'https://pokeapi.co/api/v2/pokemon/397/'
const url4 = 'https://pokeapi.co/api/v2/pokemon/857/'
const url5 = 'https://pokeapi.co/api/v2/pokemon/164/'
const url6 = 'https://pokeapi.co/api/v2/pokemon/600/'

const url7 = 'https://pokeapi.co/api/v2/pokemon/26/'
const url8 = 'https://pokeapi.co/api/v2/pokemon/65/'
const url9 = 'https://pokeapi.co/api/v2/pokemon/68/'
const url10 = 'https://pokeapi.co/api/v2/pokemon/94/'
const url11 = 'https://pokeapi.co/api/v2/pokemon/97/'
const url12 = 'https://pokeapi.co/api/v2/pokemon/807/'

const url13 = 'https://pokeapi.co/api/v2/pokemon/94/'
const url14 = 'https://pokeapi.co/api/v2/pokemon/784/'
const url15 = 'https://pokeapi.co/api/v2/pokemon/769/'
const url16 = 'https://pokeapi.co/api/v2/pokemon/789/'
const url17 = 'https://pokeapi.co/api/v2/pokemon/727/'
const url18 = 'https://pokeapi.co/api/v2/pokemon/35/'

const url19 = 'https://pokeapi.co/api/v2/pokemon/133/'
const url20 = 'https://pokeapi.co/api/v2/pokemon/6/' 
const url21 = 'https://pokeapi.co/api/v2/pokemon/39/'
const url22 = 'https://pokeapi.co/api/v2/pokemon/94/'
const url23 = 'https://pokeapi.co/api/v2/pokemon/37/'
const url24 = 'https://pokeapi.co/api/v2/pokemon/151/'

const url25 = 'https://pokeapi.co/api/v2/pokemon/4/'
const url26 = 'https://pokeapi.co/api/v2/pokemon/7/'
const url27 = 'https://pokeapi.co/api/v2/pokemon/25/'
const url28 = 'https://pokeapi.co/api/v2/pokemon/58/'
const url29 = 'https://pokeapi.co/api/v2/pokemon/37/'
const url30 = 'https://pokeapi.co/api/v2/pokemon/77/'

const url31 = 'https://pokeapi.co/api/v2/pokemon/6/'
const url32 = 'https://pokeapi.co/api/v2/pokemon/rotom-wash/'
const url33 = 'https://pokeapi.co/api/v2/pokemon/778/'
const url34 = 'https://pokeapi.co/api/v2/pokemon/134/'
const url35 = 'https://pokeapi.co/api/v2/pokemon/445/'
const url36 = 'https://pokeapi.co/api/v2/pokemon/448/'

const url37 = 'https://pokeapi.co/api/v2/pokemon/112/'
const url38 = 'https://pokeapi.co/api/v2/pokemon/94/'
const url39 = 'https://pokeapi.co/api/v2/pokemon/10/'
const url40 = 'https://pokeapi.co/api/v2/pokemon/26/'
const url41 = 'https://pokeapi.co/api/v2/pokemon/71/'
const url42 = 'https://pokeapi.co/api/v2/pokemon/6/'

fetch(url1)
.then(response => response.json())
.then(pokemon1 => {
  let element = document.getElementById('elemento')
  element.innerHTML = 
        `<p>${pokemon1.name}<p>
        <img src='${pokemon1.sprites.front_shiny}'><p>${pokemon1.height}<p><p>${pokemon1.weight}<p>`;
        console.log(pokemon1)
})
.catch(error=>console.log(error))

fetch(url2)
.then(response => response.json())
.then(pokemon2 => {
  let element2 = document.getElementById('elemento2')
  element2.innerHTML = 
  `<p>${pokemon2.name}<p>
  <img src='${pokemon2.sprites.front_default}'><p>${pokemon2.height}<p><p>${pokemon2.weight}<p>`;
  console.log(pokemon2);
})
.catch(error=>console.log(error))

fetch(url3)
.then(response => response.json())
.then(pokemon3 => {
  let element3 = document.getElementById('elemento3')
  element3.innerHTML = 
        `<p>${pokemon3.name}<p>
        <img src='${pokemon3.sprites.front_default}'><p>${pokemon3.height}<p><p>${pokemon3.weight}<p>`;
        console.log(pokemon3);
})
.catch(error=>console.log(error))

fetch(url4)
.then(response => response.json())
.then(pokemon4 => {
  let element4 = document.getElementById('elemento4')
  element4.innerHTML = 
        `<p>${pokemon4.name}<p>
        <img src='${pokemon4.sprites.front_default}'><p>${pokemon4.height}<p><p>${pokemon4.weight}<p>`;
        console.log(pokemon4);
})
.catch(error=>console.log(error))

fetch(url5)
.then(response => response.json())
.then(pokemon5 => {
  let element5 = document.getElementById('elemento5')
  element5.innerHTML = 
        `<p>${pokemon5.name}<p>
        <img src='${pokemon5.sprites.front_default}'><p>${pokemon5.height}<p><p>${pokemon5.weight}<p>`;
        console.log(pokemon5);
})
.catch(error=>console.log(error))

fetch(url6)
.then(response => response.json())
.then(pokemon6 => {
  let element6 = document.getElementById('elemento6')
  element6.innerHTML = 
        `<p>${pokemon6.name}<p>
        <img src='${pokemon6.sprites.front_default}'><p>${pokemon6.height}<p><p>${pokemon6.weight}<p>`;
        console.log(pokemon6);
})
.catch(error=>console.log(error))

fetch(url7)
.then(response => response.json())
.then(pokemon7 => {
  let element7 = document.getElementById('elemento7')
element7.innerHTML = 
        `<p>${pokemon7.name}<p>
        <img src='${pokemon7.sprites.front_default}'><p>${pokemon7.height}<p><p>${pokemon7.weight}<p>`;
        console.log(pokemon7);
})
.catch(error=>console.log(error))

fetch(url8)
.then(response => response.json())
.then(pokemon8 => {
  let element8 = document.getElementById('elemento8')
  element8.innerHTML = 
        `<p>${pokemon8.name}<p>
        <img src='${pokemon8.sprites.front_default}'><p>${pokemon8.height}<p><p>${pokemon8.weight}<p>`;
        console.log(pokemon8);
})
.catch(error=>console.log(error))

fetch(url9)
.then(response => response.json())
.then(pokemon9 => {
  let element9 = document.getElementById('elemento9')
  element9.innerHTML = 
        `<p>${pokemon9.name}<p>
        <img src='${pokemon9.sprites.front_default}'><p>${pokemon9.height}<p><p>${pokemon9.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))

fetch(url10)
.then(response => response.json())
.then(pokemon10 => {
  let element10 = document.getElementById('elemento10')
  element10.innerHTML = 
      `<p>${pokemon10.name}<p>
        <img src='${pokemon10.sprites.front_default}'><p>${pokemon10.height}<p><p>${pokemon10.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))

fetch(url11)
.then(response => response.json())
.then(pokemon11 => {
  let element11 = document.getElementById('elemento11')
  element11.innerHTML = 
      `<p>${pokemon11.name}<p>
        <img src='${pokemon11.sprites.front_default}'><p>${pokemon11.height}<p><p>${pokemon11.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))


fetch(url12)
.then(response => response.json())
.then(pokemon12 => {
  let element12 = document.getElementById('elemento12')
  element12.innerHTML = 
      `<p>${pokemon12.name}<p>
        <img src='${pokemon12.sprites.front_default}'><p>${pokemon12.height}<p><p>${pokemon12.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))

fetch(url13)
.then(response => response.json())
.then(pokemon13 => {
  let element13 = document.getElementById('elemento13')
  element13.innerHTML = 
        `<p>${pokemon13.name}<p>
        <img src='${pokemon13.sprites.front_default}'><p>${pokemon13.height}<p><p>${pokemon13.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))

fetch(url14)
.then(response => response.json())
.then(pokemon14 => {
  let element14 = document.getElementById('elemento14')
  element14.innerHTML = 
      `<p>${pokemon14.name}<p>
        <img src='${pokemon14.sprites.front_default}'><p>${pokemon14.height}<p><p>${pokemon14.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))

fetch(url15)
.then(response => response.json())
.then(pokemon15 => {
  let element15 = document.getElementById('elemento15')
  element15.innerHTML = 
      `<p>${pokemon15.name}<p>
        <img src='${pokemon15.sprites.front_default}'><p>${pokemon15.height}<p><p>${pokemon15.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))


fetch(url16)
.then(response => response.json())
.then(pokemon16 => {
  let element16 = document.getElementById('elemento16')
  element16.innerHTML = 
      `<p>${pokemon16.name}<p>
        <img src='${pokemon16.sprites.front_default}'><p>${pokemon16.height}<p><p>${pokemon16.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))


fetch(url17)
.then(response => response.json())
.then(pokemon17 => {
  let element17 = document.getElementById('elemento17')
  element17.innerHTML = 
      `<p>${pokemon17.name}<p>
        <img src='${pokemon17.sprites.front_default}'><p>${pokemon17.height}<p><p>${pokemon17.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))

fetch(url18)
.then(response => response.json())
.then(pokemon18 => {
  let element18 = document.getElementById('elemento18')
  element18.innerHTML = 
      `<p>${pokemon18.name}<p>
        <img src='${pokemon18.sprites.front_default}'><p>${pokemon18.height}<p><p>${pokemon18.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))

fetch(url19)
.then(response => response.json())
.then(pokemon19 => {
  let element19 = document.getElementById('elemento19')
  element19.innerHTML = 
        `<p>${pokemon19.name}<p>
        <img src='${pokemon19.sprites.front_default}'><p>${pokemon19.height}<p><p>${pokemon19.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))

fetch(url20)
.then(response => response.json())
.then(pokemon20 => {
  let element20 = document.getElementById('elemento20')
  element20.innerHTML = 
      `<p>${pokemon20.name}<p>
        <img src='${pokemon20.sprites.front_default}'><p>${pokemon20.height}<p><p>${pokemon20.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))

fetch(url21)
.then(response => response.json())
.then(pokemon21 => {
  let element21 = document.getElementById('elemento21')
  element21.innerHTML = 
      `<p>${pokemon21.name}<p>
        <img src='${pokemon21.sprites.front_default}'><p>${pokemon21.height}<p><p>${pokemon21.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))


fetch(url22)
.then(response => response.json())
.then(pokemon22 => {
  let element22 = document.getElementById('elemento22')
  element22.innerHTML = 
      `<p>${pokemon22.name}<p>
        <img src='${pokemon22.sprites.front_default}'><p>${pokemon22.height}<p><p>${pokemon22.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))


fetch(url23)
.then(response => response.json())
.then(pokemon23 => {
  let element23 = document.getElementById('elemento23')
  element23.innerHTML = 
      `<p>${pokemon23.name}<p>
        <img src='${pokemon23.sprites.front_default}'><p>${pokemon23.height}<p><p>${pokemon23.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))

fetch(url24)
.then(response => response.json())
.then(pokemon24 => {
  let element24 = document.getElementById('elemento24')
  element24.innerHTML = 
      `<p>${pokemon24.name}<p>
        <img src='${pokemon24.sprites.front_default}'><p>${pokemon24.height}<p><p>${pokemon24.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))

fetch(url25)
.then(response => response.json())
.then(pokemon25 => {
  let element25 = document.getElementById('elemento25')
  element25.innerHTML = 
        `<p>${pokemon25.name}<p>
        <img src='${pokemon25.sprites.front_default}'><p>${pokemon25.height}<p><p>${pokemon25.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))

fetch(url26)
.then(response => response.json())
.then(pokemon26 => {
  let element26 = document.getElementById('elemento26')
  element26.innerHTML = 
      `<p>${pokemon26.name}<p>
        <img src='${pokemon26.sprites.front_default}'><p>${pokemon26.height}<p><p>${pokemon26.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))

fetch(url27)
.then(response => response.json())
.then(pokemon27 => {
  let element27 = document.getElementById('elemento27')
  element27.innerHTML = 
      `<p>${pokemon27.name}<p>
        <img src='${pokemon27.sprites.front_default}'><p>${pokemon27.height}<p><p>${pokemon27.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))


fetch(url28)
.then(response => response.json())
.then(pokemon28 => {
  let element28 = document.getElementById('elemento28')
  element28.innerHTML = 
      `<p>${pokemon28.name}<p>
        <img src='${pokemon28.sprites.front_default}'><p>${pokemon28.height}<p><p>${pokemon28.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))


fetch(url29)
.then(response => response.json())
.then(pokemon29 => {
  let element29 = document.getElementById('elemento29')
  element29.innerHTML = 
      `<p>${pokemon29.name}<p>
        <img src='${pokemon29.sprites.front_default}'><p>${pokemon29.height}<p><p>${pokemon29.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))

fetch(url30)
.then(response => response.json())
.then(pokemon30 => {
  let element30 = document.getElementById('elemento30')
  element30.innerHTML = 
      `<p>${pokemon30.name}<p>
        <img src='${pokemon30.sprites.front_default}'><p>${pokemon30.height}<p><p>${pokemon30.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))

fetch(url31)
.then(response => response.json())
.then(pokemon31 => {
  let element31 = document.getElementById('elemento31')
  element31.innerHTML = 
        `<p>${pokemon31.name}<p>
        <img src='${pokemon31.sprites.front_default}'><p>${pokemon31.height}<p><p>${pokemon31.weight}<p>`;
        console.log(pokemon)
})
.catch(err=>console.log(err))

fetch(url32)
.then(response => response.json())
.then(pokemon32 => {
  let elemento32 = document.getElementById('elemento32')
  elemento32.innerHTML = 
        `<p>${pokemon32.name}<p>
        <img src='${pokemon32.sprites.front_shiny}'><p>${pokemon32.height}<p><p>${pokemon32.weight}<p>`;
        console.log(pokemon32)
})
.catch(err=>console.log(err))

fetch(url33)
.then(response => response.json())
.then(pokemon33 => {
  let element33 = document.getElementById('elemento33')
  element33.innerHTML = 
  `<p>${pokemon33.name}<p>
  <img src='${pokemon33.sprites.front_default}'><p>${pokemon33.height}<p><p>${pokemon33.weight}<p>`;
  console.log(pokemon33)
})
.catch(err=>console.log(err))

fetch(url34)
.then(response => response.json())
.then(pokemon34 => {
  let element34 = document.getElementById('elemento34')
  element34.innerHTML = 
        `<p>${pokemon34.name}<p>
        <img src='${pokemon34.sprites.front_default}'><p>${pokemon34.height}<p><p>${pokemon34.weight}<p>`;
        console.log(pokemon34)
})
.catch(err=>console.log(err))

fetch(url35)
.then(response => response.json())
.then(pokemon35 => {
  let element35 = document.getElementById('elemento35')
  element35.innerHTML = 
        `<p>${pokemon35.name}<p>
        <img src='${pokemon35.sprites.front_default}'><p>${pokemon35.height}<p><p>${pokemon35.weight}<p>`;
        console.log(pokemon35)
})
.catch(err=>console.log(err))

fetch(url36)
.then(response => response.json())
.then(pokemon36 => {
  let element36 = document.getElementById('elemento36')
  element36.innerHTML = 
        `<p>${pokemon36.name}<p>
        <img src='${pokemon36.sprites.front_default}'><p>${pokemon36.height}<p><p>${pokemon36.weight}<p>`;
        console.log(pokemon36)
})
.catch(err=>console.log(err))

fetch(url37)
.then(response => response.json())
.then(pokemon37 => {
  let element37 = document.getElementById('elemento37')
  element37.innerHTML = 
        `<p>${pokemon37.name}<p>
        <img src='${pokemon37.sprites.front_default}'><p>${pokemon37.height}<p><p>${pokemon37.weight}<p>`;
        console.log(pokemon37)
})
.catch(err=>console.log(err)) 

fetch(url38)
.then(response => response.json())
.then(pokemon38 => {
  let element38 = document.getElementById('elemento38')
  element38.innerHTML = 
  `<p>${pokemon38.name}<p>
  <img src='${pokemon38.sprites.front_default}'><p>${pokemon38.height}<p><p>${pokemon38.weight}<p>`;
  console.log(pokemon38)
})
.catch(err=>console.log(err))

fetch(url39)
.then(response => response.json())
.then(pokemon39 => {
  let element39 = document.getElementById('elemento39')
  element39.innerHTML = 
        `<p>${pokemon39.name}<p>
        <img src='${pokemon39.sprites.front_default}'><p>${pokemon39.height}<p><p>${pokemon39.weight}<p>`;
        console.log(pokemon39)
})
.catch(err=>console.log(err))

fetch(url40)
.then(response => response.json())
.then(pokemon40 => {
  let element40 = document.getElementById('elemento40')
  element40.innerHTML = 
        `<p>${pokemon40.name}<p>
        <img src='${pokemon40.sprites.front_default}'><p>${pokemon40.height}<p><p>${pokemon40.weight}<p>`;
        console.log(pokemon40)
})
.catch(err=>console.log(err))

fetch(url41)
.then(response => response.json())
.then(pokemon41 => {
  let element41 = document.getElementById('elemento41')
  element41.innerHTML = 
        `<p>${pokemon41.name}<p>
        <img src='${pokemon41.sprites.front_default}'><p>${pokemon41.height}<p><p>${pokemon41.weight}<p>`;
        console.log(pokemon41)
})
.catch(err=>console.log(err))

fetch(url42)
.then(response => response.json())
.then(pokemon42 => {
  let element42 = document.getElementById('elemento42')
  element42.innerHTML = 
        `<p>${pokemon42.name}<p>
        <img src='${pokemon42.sprites.front_default}'><p>${pokemon42.height}<p><p>${pokemon42.weight}<p>`;
        console.log(pokemon42)
})
.catch(err=>console.log(err))
