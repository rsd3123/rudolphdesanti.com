
var currentIndexList = [0]; //0th is DriveSS,

var driveSSQueue = ["drive-home-screen.png", "drive-sign-up.png", "drive-contacts.png", "drive-tour-guide.png", "drive-viewer.png", "drive-settings.png"];
var driveSSCaptions = ["Home Screen", "Sign-Up Screen", "Contacts Screen", "Tour Guide Screen", "Viewer Screen", "Settings Screen"];

var driveSSCurrentImg = document.getElementById("current-drive-img");

var driveSSCPrevImg = document.getElementById("prev-drive-img");
var driveSSCNextImg = document.getElementById("next-drive-img");

var driveSSCurrentCaption = document.getElementById("active-caption");

//Queue: Queue of images, Current: current index of queue, Index: index of index of Queue in index list, img: HTML img, captionQueue: Queue of caption
function moveForward(queue, current, index, img, captionQueue, caption, prev, next){
    if(current == queue.length - 1)
        current = 0;
    else
        current++;

    updateImage(queue, current, index, img, captionQueue, caption, prev, next);
}

function moveBack(queue, current, index, img, captionQueue, caption, prev, next){
    if(current == 0)
        current = queue.length - 1;
    else
        current--;

    updateImage(queue, current, index, img, captionQueue, caption, prev, next);
}

function updateImage(queue, current, index, img, captionQueue, caption, prev, next){
    img.src = "https://rudolphdesanti.com/images/" + queue[current];
    caption.innerHTML = captionQueue[current];

    var nextIndex = (current == queue.length - 1 ? 0 : current + 1)

    var prevIndex = (current == 0 ? queue.length - 1 : current - 1);

    prev.src = "https://rudolphdesanti.com/images/" + queue[prevIndex];
    next.src = "https://rudolphdesanti.com/images/" + queue[nextIndex];

    currentIndexList[index] = current;
}