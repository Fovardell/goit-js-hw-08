// /* TODO:
// В завданні 2 домашньої роботи уважно читаємо ТЗ, щоб правильно використати потрібні методи бібліотеки, а саме метод on() з подією timeupdate і метод setCurrentTime()
//  для встановлення часу після перезавантаження сторінки. Також не забуваємо перевіряти наявність данних, коли читаєте з localStorage. Якщо в localStorage немає ключа,
// 	який ви намагаєтесь прочитати, метод getItem(key) поверне вам null.

// 4 Вивчи документацію методу on() і почни відстежувати подію timeupdate - оновлення часу відтворення. https://github.com/vimeo/player.js/#onevent-string-callback-function-void https://github.com/vimeo/player.js/#events
// 5 Зберігай час відтворення у локальне сховище.Нехай ключем для сховища буде рядок "videoplayer-current-time".
// 6 Під час перезавантаження сторінки скористайся методом setCurrentTime() з метою відновлення відтворення зі збереженої позиції. https://github.com/vimeo/player.js/#setcurrenttimeseconds-number-promisenumber-rangeerrorerror
// 7 Додай до проекту бібліотеку lodash.throttle і зроби так, щоб час відтворення оновлювався у сховищі не частіше, ніж раз на секунду.; https://www.npmjs.com/package/lodash.throttle

import Player from '@vimeo/player';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
player.on('play', function () {
	console.log("played the video");
});