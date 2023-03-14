// розмір собаки і кота в пікселях
let size = 120;
// Крок переміщення собаки
let delta = 20;

let cont = document.querySelector('.container');
let dogDiv = document.querySelectorAll('.dog');
let catDiv = document.querySelectorAll('.cat');

// встановлення картинок та їх розмірів
dogDiv[0].style.backgroundImage = "url('./img/dog1.png')";
dogDiv[1].style.backgroundImage = "url('./img/dog2.png')"; 
dogDiv[2].style.backgroundImage = "url('./img/dog3.png')";
for (let i=0; i<dogDiv.length; i++) {
  dogDiv[i].style.width=`${size}px`;
  dogDiv[i].style.height=`${size}px`; 
}
catDiv[0].style.backgroundImage = "url('./img/cat1.png')";
catDiv[1].style.backgroundImage = "url('./img/cat2.png')";
for (let i=0; i<catDiv.length; i++) {
  catDiv[i].style.width=`${size}px`;
  catDiv[i].style.height=`${size}px`; 
}

// координати собак
let dogs = [ 
  {top: 100, left: 100},
  {top: 300, left: 400},
  {top: 600, left: 800}
];
 // координати котів
let cats = [
  {top: 600, left: 100},
  {top: 100, left: 800}
];

// гавкіт собаки
const gav = () => {
  let audio = new Audio();
        audio.preload = 'auto';
        audio.src = 'zvuk1.mp3';
        audio.play();
};

// мявчання кота
const myau = () => {
  let audio = new Audio();
        audio.preload = 'auto';
        audio.src = 'zvuk2.mp3';
        audio.play();
};

// розміщення тварин по координатам на екрані
const render = () => {
  for (let i=0; i<dogs.length; i++) {
    dogDiv[i].style.top = `${dogs[i].top}px`;
    dogDiv[i].style.left = `${dogs[i].left}px`;
  }
  for (let i=0; i<cats.length; i++) {
    catDiv[i].style.top = `${cats[i].top}px`;
    catDiv[i].style.left = `${cats[i].left}px`;
  }
}; 

render();

// обробка кліка по екрану 
const work = (ev) => {
  
  // координати кліка миші відносно вікна браузера
  let xw = ev.pageX, yw = ev.pageY;
  
  // координати кліка миші відносно контейнера  
  let xc = xw-cont.getBoundingClientRect().left;
  let yc = yw-cont.getBoundingClientRect().top;
  
  // визначаємо номер собаки, на якого клікнули
  let n = -1;
  for (let i=0; i<dogs.length; i++) {
    if( (xc>dogs[i].left) && (xc<dogs[i].left+size) && (yc>dogs[i].top) && (yc<dogs[i].top+size)) {
      n = i;
    }
  }
  // якщо клікнули не по собаці виходимо
  if (n === -1) return;
  
  // зберігаємо старі координати собаки
  let x_ = dogs[n].left;
  let y_ = dogs[n].top;
  
  // розраховуємо нові координати собаки
  if ((xc < dogs[n].left+size/2) && (yc < dogs[n].top+size/2)){
    dogs[n].top = dogs[n].top + delta;
    dogs[n].left = dogs[n].left + delta;
  } 
  if ((xc > dogs[n].left+size/2) && (yc < dogs[n].top+size/2)){
    dogs[n].top = dogs[n].top + delta;
    dogs[n].left = dogs[n].left - delta;
  } 
  if ((xc < dogs[n].left+size/2) && (yc > dogs[n].top+size/2)){
    dogs[n].top = dogs[n].top - delta;
    dogs[n].left = dogs[n].left + delta;
  } 
  if ((xc > dogs[n].left+size/2) && (yc > dogs[n].top+size/2)){
    dogs[n].top = dogs[n].top - delta;
    dogs[n].left = dogs[n].left - delta;
  } 
  // Перевірка виходу за межі контейнера
  if (dogs[n].top < 0) dogs[n].top = 0;
  if (dogs[n].left < 0) dogs[n].left = 0; 
  if (dogs[n].top > cont.clientHeight-size) dogs[n].top = cont.clientHeight-size;
  if (dogs[n].left > cont.clientWidth-size) dogs[n].left = cont.clientWidth-size;
  
  // перевірка зіткнень собак між собою
  let flag1 = false; 
  for (let i=0; i<dogs.length; i++) {
    for (let j=0; j<dogs.length; j++){
      if (i === j) continue;
      let dt = dogs[i].top - dogs[j].top;
      let dl = dogs[i].left - dogs[j].left;
      if ((Math.abs(dt)<=size-delta) && (Math.abs(dl)<=size-delta)) {
        flag1 = true;
      }
    }
  }
  // перевірка зіткнень собак з котами
let flag2 = false; 
for (let i=0; i<dogs.length; i++) {
  for (let j=0; j<cats.length; j++){
    let dt = dogs[i].top - cats[j].top;
    let dl = dogs[i].left - cats[j].left;
    if ((Math.abs(dt)<=size-delta) && (Math.abs(dl)<=size-delta)) {
      flag2 = true;
    }
  }
}
  
  render();

  if (flag1) {
     gav();
     dogs[n].top = y_;
     dogs[n].left = x_;
     setTimeout(render,1000);
  }
  if (flag2) {
    myau();
    dogs[n].top = y_;
    dogs[n].left = x_;
    setTimeout(render,1000);
 }

};

cont.addEventListener('click', work);


/*
// Крок переміщення собаки


// Собака №1
const dog1Move = (ev) => {

// Крок переміщення собаки
let delta = 20;
  // отримуємо поточні координати елемента  
    let t = Number(dog1.style.top.slice(0,dog1.style.top.length-2));
    let l = Number(dog1.style.left.slice(0,dog1.style.left.length-2));
    let nt = t, nl = l;
    // розраховуємо нові координати елемента
    if ((xd < 50) && (yd < 50)){
      nt = t + delta;
      nl = l + delta;
    } 
    if ((xd > 50) && (yd < 50)){
      nt = t + delta;
      nl = l - delta;
    } 
    if ((xd < 50) && (yd > 50)){
      nt = t - delta;
      nl = l + delta;
    } 
    if ((xd > 50) && (yd > 50)){
      nt = t - delta;
      nl = l - delta;
    } 
    // Перевірка виходу за межі контейнера
      if (nt < 0) nt = 0;
      if (nl < 0) nl = 0; 
      if (nt > cont.clientHeight-100) nt = cont.clientHeight-100;
      if (nl > cont.clientWidth-100) nl = cont.clientWidth-100;


      // Перевірка відстані з собакою №2  
      let dt = nt-dog2_top;
      let dl = nl-dog2_left;
      if ((Math.abs(dt)<=100-delta) && (Math.abs(dl)<=100-delta)) {
        gav();
        nt = t;
        nl = l;
      }
      // Перевірка відстані з собакою №3  
      dt = nt-dog3_top;
      dl = nl-dog3_left;
      if ((Math.abs(dt)<=100-delta) && (Math.abs(dl)<=100-delta)) {
        gav();
        nt = t;
        nl = l;
      }
    // Встановлюємо координати елемента
    dog1_top = nt;
    dog1_left = nl; 
    dog1.style.top = `${dog1_top}px`;
    dog1.style.left = `${dog1_left}px`;    
    
  };
  

  
dog1.addEventListener('click', dog1Move);
dog2.addEventListener('click', dog2Move);
dog3.addEventListener('click', dog3Move);
*/