let cont = document.querySelector('.container');
let dog1 = document.querySelector('.dog1');
let dog2 = document.querySelector('.dog2');
let dog3 = document.querySelector('.dog3');

// Крок переміщення собаки
let delta = 20;

// Початкові координати собак
let dog1_top = 100;
let dog1_left = 100;
dog1.style.top = `${dog1_top}px`;
dog1.style.left = `${dog1_left}px`;

let dog2_top = 300;
let dog2_left = 400;
dog2.style.top = `${dog2_top}px`;
dog2.style.left = `${dog2_left}px`;

let dog3_top = 600;
let dog3_left = 800;
dog3.style.top = `${dog3_top}px`;
dog3.style.left = `${dog3_left}px`;

const gav = () => {
  let audio = new Audio();
        audio.preload = 'auto';
        audio.src = 'zvuk1.mp3';
        audio.play();
}

// Собака №1
const dog1Move = (ev) => {

  // координати кліка миші відносно вікна
    let x = ev.pageX, y = ev.pageY;
  // координати кліка миші відносно елемента  
    let xd = x-dog1.getBoundingClientRect().left;
    let yd = y-dog1.getBoundingClientRect().top;
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
  
// Собака №2
const dog2Move = (ev) => {

  // координати кліка миші відносно вікна
    let x = ev.pageX, y = ev.pageY;
  // координати кліка миші відносно елемента  
    let xd = x-dog2.getBoundingClientRect().left;
    let yd = y-dog2.getBoundingClientRect().top;
  // отримуємо поточні координати елемента  
    let t = Number(dog2.style.top.slice(0,dog2.style.top.length-2));
    let l = Number(dog2.style.left.slice(0,dog2.style.left.length-2));
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
    // Перевірка відстані з собакою №1  
      let dt = nt-dog1_top;
      let dl = nl-dog1_left;
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
    dog2_top = nt;
    dog2_left = nl; 
    dog2.style.top = `${dog2_top}px`;
    dog2.style.left = `${dog2_left}px`;    
    
  };
  
  // Собака №3
const dog3Move = (ev) => {

  // координати кліка миші відносно вікна
    let x = ev.pageX, y = ev.pageY;
  // координати кліка миші відносно елемента  
    let xd = x-dog3.getBoundingClientRect().left;
    let yd = y-dog3.getBoundingClientRect().top;
  // отримуємо поточні координати елемента  
    let t = Number(dog3.style.top.slice(0,dog3.style.top.length-2));
    let l = Number(dog3.style.left.slice(0,dog3.style.left.length-2));
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
    // Перевірка відстані з собакою №1  
      let dt = nt-dog1_top;
      let dl = nl-dog1_left;
      if ((Math.abs(dt)<=100-delta) && (Math.abs(dl)<=100-delta)) {
        gav();
        nt = t;
        nl = l;
      }
      // Перевірка відстані з собакою №2  
      dt = nt-dog2_top;
      dl = nl-dog2_left;
      if ((Math.abs(dt)<=100-delta) && (Math.abs(dl)<=100-delta)) {
        gav();
        nt = t;
        nl = l;
      }
    // Встановлюємо координати елемента
    dog3_top = nt;
    dog3_left = nl; 
    dog3.style.top = `${dog3_top}px`;
    dog3.style.left = `${dog3_left}px`;    
    
  };
  
  
dog1.addEventListener('click', dog1Move);
dog2.addEventListener('click', dog2Move);
dog3.addEventListener('click', dog3Move);
