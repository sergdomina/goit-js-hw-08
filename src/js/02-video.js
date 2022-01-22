import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
import { times } from 'lodash';

const LOCALSTORAGE_KEY='videoplayer-current-time'
const playerRef=document.querySelector('#vimeo-player')
const player=new Player(playerRef)
player.on('play',onReadTime)
function onReadTime(){
    let saveTime=localStorage.getItem(LOCALSTORAGE_KEY)
    console.log(saveTime);
    if(saveTime){
        player.setCurrentTime(saveTime)
        player.off('play',onReadTime)
    }
}
player.on('timeupdate',throttle(onSaveTime,1000))
function onSaveTime(event){
    const time=event.seconds
    localStorage.setItem(LOCALSTORAGE_KEY,time)
}
onReadTime()