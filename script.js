
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

var song7 = "Audio/error-170796.mp3"
var songToPlay7 = new Audio (song7)

function score(){
    if (num.value != "") {
        if (num.value >= 0 && num.value < 40) {
            broadcast.innerHTML = `F stands for Flunked. Your grade is F, and let's be honest, you might as well have not even shown up.😭😭😭`
            broadcast.style.color = "red"
            songToPlay.play()
        }
        else if (num.value >= 40 && num.value < 45) {
            broadcast.innerHTML = "E for Effort? Not quite. Your grade is E, and it's a testament to how much you've missed the mark. 🙊🙊🙊"
            broadcast.style.color ="black"
            songToPlay2.play(song2)
    
        }  else if (num.value >= 45 && num.value < 50) {
            broadcast.innerHTML = "D is for Dismal. Your grade is D, and it's a clear sign that you need to seriously reevaluate your approach. 🥸🥸🥸"
            broadcast.style.color ="black"
            songToPlay3.play(song3)
    
        }  else if (num.value >= 50 && num.value < 60) {
            broadcast.innerHTML = "C is for Can't Quite Cut It. Your grade is C, and it's just not good enough. Time to buckle down and aim higher. 🐸🐸🐸"
            broadcast.style.color ="black"
            songToPlay4.play(song4)
    
        }  else if (num.value >= 60 && num.value < 75) {
            broadcast.innerHTML = "Barely scraping by with a B? Sorry, but that's just not going to cut it. Your grade is B, but it's a far cry from success. 🐭🐭🐭"
            broadcast.style.color ="black"
            songToPlay5.play(song5)
    
        }  else if (num.value >= 75 && num.value <= 100) {
            broadcast.innerHTML = "An A for Average? Not quite. Your grade is A, and while it's good, it's certainly not exceptional. Time to raise the Bar. 👿🥰👏"
            broadcast.style.color ="Green"
            songToPlay6.play(song6)
        }
        else  {
            songToPlay7.play(song7)
           broadcast.innerHTML ="You've exceeded the range. 🤺🪓"
        }
    }
}
