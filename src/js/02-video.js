import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const throttledTimer = throttle(({ seconds }) => {
	localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
}, 1000);

const timeCode = JSON.parse(localStorage.getItem("videoplayer-current-time")) ?? 0;

player.on('timeupdate', throttledTimer);
player.setCurrentTime(timeCode);

