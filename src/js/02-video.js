import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const timeKey = 'videoplayer-current-time'
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const onTimeupdate = function ({ seconds }) {
  localStorage.setItem(timeKey, seconds);
};

player.on('timeupdate', throttle(onTimeupdate, 1000));
const timeStart = localStorage.getItem(timeKey);

if (timeStart) {
  player
    .setCurrentTime(timeStart)
    .then(function (seconds) {
      // seconds = the actual time that the player seeked to
    })
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
}