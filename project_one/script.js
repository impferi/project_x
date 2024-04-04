
// // const person = {
// //       name: 'romanSherman',
// //       age: 34,
// //       isMarried: false
// // } ;

// // let arr = ['roma', 'lazio', 'milan'] ;

// // const obj = {
// //     name: 'Alertio',
// //     surname: 'Berritini',
// //     age: 48
// // } ;


// // let jerkOff = 'Valeron' ;
// // console.log(typeof(parseInt(jerkOff))) ;

// // let shipName = null ;

// // if(shipName) { 
// //   console.log ('Верный результат')
// // } else {
// //   console.log('Очевидный результат')
// // } ;

// // let answer = prompt('Are you 18 age?', 'Укажите ваш возраст');

// // console.log(typeof(null)) ;
 
// // let romanK = true,
// //     laraR = true,
// //     chemiZ = true,
// //     molly = false;

// //     // console.log(romanK || laraR || chemiZ || molly) ;

// // if(2*2 == 5) {
// //   console.log('Thats right!')
// // } else {
// //   console.log('Wrong!')
// // }



// // if(num < 50) {
// //   console.log('Неверно')
// // } else if(num > 51) {
// //   console.log('Много!')
// // } else {
// //   console.log('Верно')
// // }

// // switch (num) {
// //   case num < 49:
// //      console.log('Нэверно');
// //   break;
// //   case num > 100:
// //      console.log('Много!');
// //   break;
// //   case num > 80:
// //      console.log('Много!');
// //   break;
// //   case num == 50:
// //      console.log('Верно!');
// //   break; 
// //   default:
// //     console.log('Выполняется в любом случае')
// //   break;
// //   }


// let num = 50;
// // while (num < 55) {
// //   console.log(num);
// //   num++;
// // }

// do {
//   console.log(num);
//   num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//   if (i == 6) {
//      break
//   }
//   console.log(i)
// }

let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
  budget: money,
  expenses: {},
  optionalExpenses: {},
  income: [],
  timeData: time,
  savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько это обойдется?', '');
        
    appData.expenses[a] = b;
}

alert(appData.budget / 30 );