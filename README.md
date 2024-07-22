### Тестовое задание для компании DIGINETICA

1. **Каким будет результат следующей операции на языке JavaScript: \[1, 2, 3] + \[4, 5, 6]. Почему был получен такой результат?**

Результатом будет строка "1,2,34,5,6", так как при сложении массивы будут конвертированы в строки "1,2,3" и "4,5,6".
___
2. **Дано выражение:**
```js
var a = {b: 1};
var b = a;
b.b = 2;
console.log(a);
```
**Что будет выведено в консоли? Почему был получен такой результат?**

В консоль будет выведено "{ b: 2 }". Это связано с тем, что объект — ссылочный тип данных. При присваивании a к b, присваивается ссылка на объект, таким образом и a и b указывают на один тот же объект (один и тот же фрагмент в памяти). Это означает, что при мутации объекта через одну из ссылок, будет изменяться сам объект.
___
3. **Написать регулярное выражение, совпадающее с числом с плавающей точкой с точностью до 3 знака после запятой.**
```js
/^-?(0|[1-9]\d*)([.,]\d{1,3})?$/
```
___
4. **Написать регулярное выражение, по которому определяется является ли строка ссылкой. Объяснить, как оно работает**
```js
/^(https?:\/\/)?[a-zA-Z0-9@:%._\+~#=]+\.[a-zA-Z]{2,}(\/\S*)?$/
```
+ ^ - начало строки.
+ (https?:\/\/)? - указание протокола http или https с `://` 0 или 1 раз
+ [a-zA-Z0-9@:%._\+~#=]+ - доменное имя (разрешённый символ для доменного имени 1 и более раз)
+ \.[a-zA-Z]{2,6} - домен верхнего уровня, например, '.com', '.org', '.net' (точка и от 2 до 6 латинских букв)
+ (\/\S*)? - необязательный путь, например, '/path/to/resource' (/ и не пробельные символы)
___
5. **Каким будет значение переменной text после выполнения данного JavaScript кода?**
```js
function setText(message) { 
	text = message;
}
var text = 'Текст';
setText('Сообщение');
```
**Опишите, почему получился такой результат.**

После выполнения данного кода, в переменной *text* будет находиться строка "Сообщение". Это связано с таким механизмом JavaScript, как замыкание — при объявлении функции, она сохраняет ссылку на внешнее лексическое окружение. Таким образом, в теле функции можно изменять переменные из внешнего окружения (в данном примере это переменная *text*)
___
6. **Написать функцию для получения списка всех артикулов товаров в консоли браузера на странице [https://groupprice.ru/categories/jenskaya-odejda?referer_from=main_catalog](https://groupprice.ru/categories/jenskaya-odejda?referer_from=main_catalog)**

```js
function printArticles() {
  const articles = [];
  
  const products = document.querySelectorAll("._product");
  products.forEach((product) => articles.push("0" + product.dataset.id));

  console.log(articles);
}
```
Результат вызова функции:
![[Pasted image 20240722163318.png]]
В начале строк был добавлен 0, так как артикул имеет именно такой формат:
![[Pasted image 20240722163407.png]]
___
7. **Написать функцию для получения всех характеристики товара в консоли браузера в виде объекта в формате attributeName: value на странице [https://nir-vanna.ru/product/smesitel-bravat-art-f175109c-dlya-rakoviny/](https://nir-vanna.ru/product/smesitel-bravat-art-f175109c-dlya-rakoviny/)**
```js
function printParameters() {
  const productParameters = {};

  const parameters = document.querySelectorAll(
    ".tab-pane-product-parameter-item"
  );

  parameters.forEach((parameter) => {
    const parameterName = parameter
      .querySelector(".parameter-name")
      .textContent.split("\n")[1];
      
    const parameterValue =
      parameter.querySelector(".parameter-value").textContent;
      
    productParameters[parameterName.trim()] = parameterValue;
  });
  
  console.log(productParameters);
}

printParameters();
```
Результат вызова функции:
![[Pasted image 20240722171107.png]]