class Users {
  // Параметры на страницу должны быть выведены от сюда
  users;

  /*
    1) Тебе понадобятся перебирающие методы массива
    2) Вывести можно 2-мя способами, создавать теги в html и обращаться к каждому (document.documentElement.querySelector('.selector'))
    2.1) Второй способ, ты генирируешь строку с html здесь а потом вставляешь на страницу:
    `<div>${parametr}</div>`
    Как это сделать смотри в гугле, это везде есть за одно поймешь зачем что в js
    3)Я хочу чтобы ты в карточках отобразила картинку и имя юзера.
    4) Все должно быть динамически происходить во время перебора массива users
    5) Да знаю, выглядит сложно, но тут  1 раз разобраться , а дальше как по маслу пойдет
    6) темы: 
    6.1) https://learn.javascript.ru/searching-elements-dom
    6.2) https://learn.javascript.ru/basic-dom-node-properties
    6.3) https://learn.javascript.ru/modifying-document
    6.4) https://doka.guide/js/element-innerhtml/
  */

  constructor() {
    this.getUsers();
  }

  getUsers() {
    // 1. Создаём новый XMLHttpRequest-объект
    const xhr = new XMLHttpRequest();

    // 2. Настраиваем его: GET-запрос по URL /article/.../load
    xhr.open("GET", "https://api.github.com/search/users?q=Olga&per_page=3 ");

    // 3. Отсылаем запрос
    xhr.send();

    // 4. Этот код сработает после того, как мы получим ответ сервера
    xhr.onload = () => {
      if (xhr.status != 200) {
        // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
        console.error(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
      } else {
        // если всё прошло гладко, выводим результат
        this.users = JSON.parse(xhr.response).items;
        console.log(this.users);
      }
    };

    xhr.onerror = (error) => {
      console.error(error);
    };
  }
}

const users = new Users();
