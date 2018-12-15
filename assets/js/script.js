/*!
 * Basecode originally coded by w3schools(https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown)
 * Modified by M4xtat3(https://jeongjy.kr)
*/

function getLeft(getType){
    // Set datetime here
    var countDownDate = new Date("November 14, 2019 08:40:00").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);
    switch(getType){
        case 1:
            return d;
            break;
        case 2:
            return h;
            break;
        case 3:
            return m;
            break;
        case 4:
            return s;
            break;
        default:
            return null;
            break;
    }
}