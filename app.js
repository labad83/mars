// Rover Object Goes Here
// ======================
var roverlau = {
    x: 0,
    y: 0,
    direction: "N",
    travelog: [
        [0, 0],
    ]

}

// ======================
function turnLeft(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            break;

        case "W":
            rover.direction = "S";
            break;

        case "S":
            rover.direction = "E";
            break;

        case "E":
            rover.direction = "N";

    }

    console.log("turnLeft was called!");

}

function turnRight(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            break;

        case "E":
            rover.direction = "S";
            break;

        case "S":
            rover.direction = "W";
            break;

        case "W":
            rover.direction = "N";

    }

    console.log("turnRight was called!");
}

function moveForward(rover) {
    switch (rover.direction) {

        //Eje de las Y
        case "N":
            if (rover.y > 0) {
                rover.y -= 1;
            }
            rover.travelog.push([rover.x, rover.y]);
            break;

        case "S":
            if (rover.y < 9) {
                rover.y += 1;
            }
            rover.travelog.push([rover.x, rover.y]);
            break;

            //Eje de las X
        case "E":
            if (rover.x < 9) {
                rover.x += 1;
            }
            rover.travelog.push([rover.x, rover.y]);
            break;

        case "W":
            if (rover.x > 0) {
                rover.x -= 1;
            }
            rover.travelog.push([rover.x, rover.y]);

    }
    console.log("moveForward was called!");
}

function moveBackward(rover) {
    switch (rover.direction) {

        //Eje de las Y
        case "N":
            if (rover.y < 9) {
                rover.y += 1;
            }
            rover.travelog.push([rover.x, rover.y]);
            break;

        case "S":
            if (rover.y > 0) {
                rover.y -= 1;
            }
            rover.travelog.push([rover.x, rover.y]);
            break;

            //Eje de las X
        case "E":
            if (rover.x > 0) {
                rover.x -= 1;
            }
            rover.travelog.push([rover.x, rover.y]);
            break;

        case "W":
            if (rover.x < 9) {
                rover.x += 1;
            }
            rover.travelog.push([rover.x, rover.y]);

    }
    console.log("moveBackward was called!");
}


function move(rover, commands) {
    for (var i = 0; i < commands.length; i++) {
        switch (commands[i]) {
            case 'f':
                moveForward(rover);
                break;
            case 'b':
                moveBackward(rover);
                break;
            case 'r':
                turnRight(rover);
                break;
            case 'l':
                turnLeft(rover);
                break;

        }

    }

}


move(roverlau, 'rffrfflfrff');

console.log(roverlau.travelog);