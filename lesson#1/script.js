var budjet = prompt("Ваш бюджет?");
var nameShop = prompt("Название вашего магазина?");
var shopTov1 = prompt("Какой тип товаров будем продавать?");
var shopTov2 = prompt("Какой тип товаров будем продавать?");
var shopTov3 = prompt("Какой тип товаров будем продавать?");

var shopGoods = [shopTov1, shopTov2, shopTov3];


mainList = {
	"Бюджет": budjet,
	"Имя магазина": nameShop,
	"Массив товаров shopGoods": shopGoods,
	"Объект с сотрудниками employers": "123",
	"Свойство open": "123"
}
console.log(mainList);
alert(+budjet / 30 + " руб. Ваш дневной бюджет");