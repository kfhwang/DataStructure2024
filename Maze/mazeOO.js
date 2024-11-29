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

var MAZE2 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]; //1,1  end:8,10


class Point {
    constructor(_row, _col) {
        this.row = _row;
        this.col = _col;
    }
    // isEnd() {
    //     return this.row === end.row && this.col === end.col;
    // }
}

class Maze{
    constructor(_maze, _start, _end, _map){
        this.maze=_maze;
        this.start=_start;
        this.end=_end;
        this.Stack=[];
        this.map = _map;
    }
    isEnd = function(step){
        return this.end.row === step.row && this.end.col === step.col;
    }
    //
    go = function(){
        var rollBack = false;
        var dir = [{ x: -1, y: 0 }, { x: 1, y: 0 }, { x: 0, y: -1 }, { x: 0, y: 1 }];
        dir.sort((a, b) => { return Math.random() - 0.5 });

        var step=this.start;
        this.Stack.push(step);
        while (!this.isEnd(step)) {
            this.drawBoard();
            this.maze[step.row][step.col] = 2;
            if (this.maze[step.row + dir[0].x][step.col + dir[0].y] == 0) { // 如果步數上方為0
                if (rollBack) {
                    this.Stack.push(step)
                    rollBack = false; 
                }
                step = new Point(step.row + dir[0].x, step.col + dir[0].y);
                this.Stack.push(step);
            } else if (this.maze[step.row + dir[1].x][step.col + dir[1].y] == 0) { // 如果步數下方為0
                if (rollBack) {
                    this.Stack.push(step)
                    rollBack = false;
                }
                step = new Point(step.row + dir[1].x, step.col + dir[1].y);
                this.Stack.push(step);
    
            } else if (this.maze[step.row + dir[2].x][step.col + dir[2].y] == 0) { // 
                if (rollBack) {
                    this.Stack.push(step)
                    rollBack = false;
                }
                step = new Point(step.row + dir[2].x, step.col + dir[2].y);
                this.Stack.push(step);
    
            } else if (this.maze[step.row + dir[3].x][step.col + dir[3].y] == 0) { // 
                if (rollBack) {
                    this.Stack.push(step)
                    rollBack = false;
                }
                step = new Point(step.row + dir[3].x, step.col + dir[3].y);
                this.Stack.push(step);
            } else // 如果四個方向都無法前進
                if (this.Stack.length > 0) {
                    step = this.Stack.pop();
                    rollBack = true;
                }
                else
                    break;
        }
        if (this.Stack.length == 0)
            console.log("No solution!");
        else {
            console.log("Done!");
            this.drawPath();
        }
    }
    
    drawPath = function() {
        this.Stack.forEach(item => {
            var canvas = document.getElementById(this.map).getContext("2d");
            var size = Math.min(canvas.canvas.height / this.maze.length, canvas.canvas.width / this.maze[0].length);
            canvas.fillStyle = "#ff0000";
            canvas.fillRect(item.col * size, item.row * size, size, size);
            //canvas.strokeRect(_col*size,_row*size,size,size);
        })
    
    }


    drawBoard=function() {
        var canvas = document.getElementById(this.map).getContext("2d");
        var size = Math.min(canvas.canvas.height / this.maze.length, canvas.canvas.width / this.maze[0].length);
        for (var _row = 0; _row < this.maze.length; _row++) {
            for (var _col = 0; _col < this.maze[0].length; _col++) {
                //ar2d[_row][_col]=>0,1
                if (this.maze[_row][_col] == 1) {
                    canvas.fillStyle = "#000000"
                } else if (this.maze[_row][_col] == 0) {
                    canvas.fillStyle = "#ffffff"
                } else if (this.maze[_row][_col] == 2) {
                    canvas.fillStyle = "#ffff00"
                }
                //600/5=>120  coordinate x,y , width, heigth
                canvas.fillRect(_col * size, _row * size, size, size);
                canvas.strokeRect(_col * size, _row * size, size, size);
            }
        }
    }
}




function go(){
    var myMaze=new Maze(MAZE, new Point(1, 1),new Point(8, 10), "map");
    var myMaze2=new Maze(MAZE2, new Point(1, 1),new Point(8, 10), "map2"); 
    myMaze.go();
    myMaze2.go();
};