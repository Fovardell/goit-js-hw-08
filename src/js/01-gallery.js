/* TODO: ця робота виконується вже за допомогою Парсела, тому уважно читаєм ТЗ і файл readme в шаблоній збірці Саші Репети, щоб правильно звʼязати ваш репозиторій з шаблоном, встановити всі залежності, налаштувати gh-pages і правильно запускати збірку.
Go Live в цій роботі вже не використовуємо. Для запуска процеса розробки в терміналі використовуємо команду npm start і використовуємо локальний сервер, який створює Парсел для перегляду результату в браузері.
У кого система Віндовс, не використовуєм термінал powershell. Замінюємо його на bash або git bash
Усі бібліотеки встановлюємо в проект за допомогою npm. cdn-посилання на бібліотеки не використовуєм.
В завданні 2 домашньої роботи уважно читаємо ТЗ, щоб правильно використати потрібні методи бібліотеки, а саме метод on() з подією timeupdate і метод setCurrentTime() для встановлення часу після перезавантаження сторінки. Також не забуваємо перевіряти наявність данних, коли читаєте з localStorage. Якщо в localStorage немає ключа, який ви намагаєтесь прочитати, метод getItem(key) поверне вам null.
В завданні 3 також потрібно перевіряти всі значення, які ви читаєте з localStorage і записуєте в поля форми. Якщо там пусто, вам у поля запишеться undefined. При сабміті форми не забувайте чистити обʼєкт в якому зберігаєте значення з полів форми, щоб інформація не тягнулась в наступні сабміти. Форма має відправлятись при заповнених 2-х полях форми
Також залишу вам відео-інструкцію, як користуватись Парселем:
https://www.loom.com/share/88768db322604d6e8e227e590db52f00
Всім продуктивного тижня :wink:*/



// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
