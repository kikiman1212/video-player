const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $retroceder = document.querySelector('#retroceder')
const $adelantar = document.querySelector('#adelantar')



$play.addEventListener('click', ponlePlay)
$pause.addEventListener('click', ponlePause)



function ponlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('kiko dice le diste click a play')
}
function ponlePause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('kiko dice le diste click a pause')
}

$retroceder.addEventListener('click',retroceder)

function retroceder() {
    $video.currentTime = $video.currentTime - 5
    console.log('kiko dice le diste click a retroceder')
}

$adelantar.addEventListener('click', adelantar)

function adelantar() {
    $video.currentTime = $video.currentTime + 5
    console.log('kiko dice le diste click a adelantar')
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
  $progress.max = $video.duration
  console.log('ha cargado mi video', $video.duration)
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime
  // console.log('tiempo actual', $video.currentTime)
}

$progress.addEventListener('input', handleInput)

function handleInput() {
  $video.currentTime = $progress.value
  console.log($progress.value)
}






