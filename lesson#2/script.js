let money = prompt("Ваш бюджет?");
let nameShop = prompt("Название вашего магазина?");
let time = 19;

let mainList = {
	"Бюджет": money,
	"Имя магазина": nameShop,
	shopGoods: [],
	"Объект с сотрудниками employers": {},
	"Свойство open": false
}
// Цикл через FOR
/*for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string'  && (typeof(a)) === null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	}
}*/
// Цикл через While
/*let i = 0;
while (i < 5) {
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string'  && (typeof(a)) === null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	}
	i++;
}*/
// Цикл через While do
/*let i = 0;
do {
	let a = prompt("Какой тип товаров будем продавать?");
	if ((typeof(a)) === 'string'  && (typeof(a)) === null && a != '' && a.length < 50) {
		console.log('Все верно!');
		mainList.shopGoods[i] = a;
	}
	i++;
}
while (i < 5) */
if (time < 0) {
	console.log('Не может быть');
} else if (time > 8 && time < 20) {
	console.log('Время работать');
} else if (time < 24) {
	console.log('Уже поздно');
} else {
	console.log('В сутках только 24 часа!')
}
console.log(mainList);
alert(+money / 30 + " руб. Ваш дневной бюджет");

let arr = [31,23,53,65,12,76,35];
for (let a = 0; a < 7; a++) {
	let b = arr[a];
	if (((b - (b % 10))/10) == 3 || ((b - (b % 10))/10) == 7) {
		console.log(b);
	}
}