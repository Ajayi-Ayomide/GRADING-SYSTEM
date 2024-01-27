
var song = "Audio/DKT.mp3"
var songToPlay = new Audio (song)

var song2 = "Audio/20231205_101910.mp3"
var songToPlay2 = new Audio (song2)

var song3 = "Audio/VID-20231205-WA0000.mp3"
var songToPlay3 = new Audio (song3)

var song4 = "Audio/VID-20231205-WA0003 (1).mp3"
var songToPlay4 = new Audio (song4)

var song5 = "Audio/VID-20231205-WA0000 (2).mp3"
var songToPlay5 = new Audio (song5)

var song6 = "Audio/VID-20231205-WA0000 (2).mp3"
var songToPlay6 = new Audio (song6)

function score(){
    if (num.value != "") {
        if (num.value >= 0 && num.value < 40) {
            display.value = "F 😭😭😭"
            display.style.color ="red"
            songToPlay.play()
        }
        else if (num.value >= 40 && num.value < 45) {
            display.value = "E"
            display.style.color ="brown"
            songToPlay2.play(song2)
    
        }  else if (num.value >= 45 && num.value < 49) {
            display.value = "D"
            display.style.color ="purple"
            songToPlay3.play(song3)
    
        }  else if (num.value >= 49 && num.value < 55) {
            display.value = "C"
            display.style.color ="blue"
            songToPlay4.play(song4)
    
        }  else if (num.value >= 55 && num.value < 70) {
            display.value = "B"
            display.style.color ="yellow"
            songToPlay5.play(song5)
    
        }  else if (num.value >= 70 && num.value <= 100) {
            display.value = "A"
            display.style.color ="Green"
            songToPlay6.play(song6)
        }
        else  {
           display.value ="You've exceeded the range"
        }
    }
}
