var divSquare = '<div id="s$coord" class="square $color"></div>'
var divFigure = '<div id="f$coord" class="figure">$figure</div>'

function start() {
    map = new Array(64);
    addSquares();
    placeFigures();
}

function addSquares() {
    $('.board').html('');
    for (var i = 0; i < 8; i++){
        for (var j = 0; j < 8; j++){
            var coord = 8*i + j
            if (i % 2 == j % 2) {
                $('.board').append(divSquare
                    .replace('$coord', coord)
                    .replace('$color', 'white'));
            } else {
                $('.board').append(divSquare
                    .replace('$coord', coord)
                    .replace('$color', 'black'));
            }
        }
    }
    setDroppable();
}

function placeFigure(coord, figure) {
    map[coord] = figure;
    $('#s' + coord).html(divFigure
        .replace('$coord', coord)
        .replace('$figure', chessSymbol(figure)));
    setDraggable();
    console.log(map)
}

function setDraggable() {
    $('.figure').draggable();
}

function setDroppable() {
    $('.square').droppable({
        drop: function(event, ui) {
            var fromCoord = ui.draggable.attr('id').substring(1);
            var toCoord = this.id.substring(1);
            console.log('moved from ' + fromCoord + ' to ' + toCoord)
            moveFigure(fromCoord, toCoord);
            }
    });
}

function moveFigure(from, to) {
    figure = map[from];
    placeFigure(from, '0');
    placeFigure(to, figure);
}

function placeFigures() {
    for (var i = 0; i < 8; i++) { // Размещаем белые пешки
        placeFigure(48 + i, 'P');
    }
    for (var i = 0; i < 8; i++) { // Размещаем черные пешки
        placeFigure(8 + i, 'p');
    }
    placeFigure(60, 'K'); // Размещаем белые фигуры
    placeFigure(59, 'Q');
    placeFigure(56, 'R');
    placeFigure(63, 'R');
    placeFigure(58, 'B');
    placeFigure(61, 'B');
    placeFigure(57, 'N');
    placeFigure(62, 'N');

    placeFigure(4, 'k'); // Размещаем черные фигуры
    placeFigure(3, 'q');
    placeFigure(0, 'r');
    placeFigure(7, 'r');
    placeFigure(2, 'b');
    placeFigure(5, 'b');
    placeFigure(1, 'n');
    placeFigure(6, 'n');
    
}

function chessSymbol(figure) {
    switch (figure) {
        case 'K' : return '&#9812;';
        case 'Q' : return '&#9813;';
        case 'R' : return '&#9814;';
        case 'B' : return '&#9815;';
        case 'N' : return '&#9816;';
        case 'P' : return '&#9817;';
        case 'k' : return '&#9818;';
        case 'q' : return '&#9819;';
        case 'r' : return '&#9820;';
        case 'b' : return '&#9821;';
        case 'n' : return '&#9822;';
        case 'p' : return '&#9823;';
        default: return ''; 
    }
}

$(function() {
    start();
})