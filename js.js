

var rect = document.getElementById("img").getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);
var xC = rect.left+333;
var yC = rect.top=333;

// function mousemove(event){
//     console.log("pageX: ",event.pageX,
//         "pageY: ", event.pageY,
//         "clientX: ", event.clientX,
//         "clientY:", event.clientY)
// }
//
// window.addEventListener('mousemove', mousemove);
//




document.onmousemove = function(){
    var x = event.clientX * 100 / window.innerWidth-50;
    var y = -1*(event.clientY * 100 / window.innerHeight-50);

    if(Math.pow(x,2)+Math.pow(y,2)<=37){
        document.getElementById("img").src = "center.png";
    }
    else {

        let degrees = Math.abs(Math.atan(y / x) * (180 / Math.PI));
        console.log(x, y);

        if (x > 0 && y > 0) {
            //Q1
            if (degrees < 90 && degrees > 60) {
                console.log(1);
                document.getElementById("img").src = "1.png";
            } else if (degrees < 60 && degrees > 30) {
                console.log(2);
                document.getElementById("img").src = "2.png";
            } else if (degrees < 30 && degrees > 0) {
                console.log(3);
                document.getElementById("img").src = "3.png";
            }
        } else if (x < 0 && y > 0) {
            //Q2
            if (degrees < 90 && degrees > 60) {
                console.log(12);
                document.getElementById("img").src = "12.png";
            } else if (degrees < 60 && degrees > 30) {
                console.log(11);
                document.getElementById("img").src = "11.png";

            } else if (degrees < 30 && degrees > 0) {
                console.log(10);
                document.getElementById("img").src = "10.png";

            }
        } else if (x < 0 && y < 0) {
            //Q3
            if (degrees < 90 && degrees > 60) {
                console.log(7);
                document.getElementById("img").src = "7.png";

            } else if (degrees < 60 && degrees > 30) {
                console.log(8);
                //    document.getElementById("img").src = "8.png";

            } else if (degrees < 30 && degrees > 0) {
                console.log(9);
                document.getElementById("img").src = "9.png";

            }
        } else if (x > 0 && y < 0) {
            //Q4
            if (degrees < 90 && degrees > 60) {
                console.log(6);
                document.getElementById("img").src = "6.png";

            } else if (degrees < 60 && degrees > 30) {
                console.log(5);
                document.getElementById("img").src = "5.png";

            } else if (degrees < 30 && degrees > 0) {
                console.log(4);
                document.getElementById("img").src = "4.png";

            }
        }

    }

}

