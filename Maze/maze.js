var MAZE = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]; //1,1  end:8,10

class Point {
    constructor(_row, _col) {
        this.row = _row;
        this.col = _col;
    }
    isEnd() {
        return this.row === end.row && this.col === end.col;
    }
}

var start = new Point(1, 1);
var end = new Point(8, 10);
var Stack = [];
var step = start;
var rollBack = false;

var ary = [1, 5, 6, 2, 9];
ary.sort((a, b) => { return b - a })
ary.sort((a, b) => { return Math.random() - 0.5 });

var dir = [{ x: -1, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }, { x: 0, y: 1 }];
dir.sort((a, b) => { return b.x - a.x });
dir.sort((a, b) => { return Math.random() - 0.5 });



function go() {
    Stack.push(step);
    while (!step.isEnd()) {
        drawBoard()
        MAZE[step.row][step.col] = 2;
        if (MAZE[step.row + dir[0].x][step.col + dir[0].y] == 0) { // 如果步數上方為0
            if (rollBack) {
                Stack.push(step)
                rollBack = false;
            }
            step = new Point(step.row + dir[0].x, step.col + dir[0].y);
            Stack.push(step);
        } else if (MAZE[step.row + dir[1].x][step.col + dir[1].y] == 0) { // 如果步數下方為0
            if (rollBack) {
                Stack.push(step)
                rollBack = false;
            }
            step = new Point(step.row + dir[1].x, step.col + dir[1].y);
            Stack.push(step);

        } else if (MAZE[step.row + dir[2].x][step.col + dir[2].y] == 0) { // 
            if (rollBack) {
                Stack.push(step)
                rollBack = false;
            }
            step = new Point(step.row + dir[2].x, step.col + dir[2].y);
            Stack.push(step);

        } else if (MAZE[step.row + dir[3].x][step.col + dir[3].y] == 0) { // 
            if (rollBack) {
                Stack.push(step)
                rollBack = false;
            }
            step = new Point(step.row + dir[3].x, step.col + dir[3].y);
            Stack.push(step);
        } else // 如果四個方向都無法前進
            if (Stack.length > 0) {
                step = Stack.pop();
                rollBack = true;
            }
            else
                break;
    }
    if (Stack.length == 0)
        console.log("No solution!");
    else {
        console.log("Done!");
        drawPath(Stack);
    }
}
function drawPath(_stack) {
    _stack.forEach(item => {
        var canvas = document.getElementById("map").getContext("2d");
        var size = Math.min(canvas.canvas.height / MAZE.length, canvas.canvas.width / MAZE[0].length);
        canvas.fillStyle = "#ff0000";
        canvas.fillRect(item.col * size, item.row * size, size, size);
        //canvas.strokeRect(_col*size,_row*size,size,size);
    })

}

function drawBoard() {
    var canvas = document.getElementById("map").getContext("2d");
    var size = Math.min(canvas.canvas.height / MAZE.length, canvas.canvas.width / MAZE[0].length);
    for (var _row = 0; _row < MAZE.length; _row++) {
        for (var _col = 0; _col < MAZE[0].length; _col++) {
            //ar2d[_row][_col]=>0,1
            if (MAZE[_row][_col] == 1) {
                canvas.fillStyle = "#000000"
            } else if (MAZE[_row][_col] == 0) {
                canvas.fillStyle = "#ffffff"
            } else if (MAZE[_row][_col] == 2) {
                canvas.fillStyle = "#ffff00"
            }
            //600/5=>120  coordinate x,y , width, heigth
            canvas.fillRect(_col * size, _row * size, size, size);
            canvas.strokeRect(_col * size, _row * size, size, size);
        }
    }
}

// go();