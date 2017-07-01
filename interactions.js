function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='block'></div>");
        };
    };

    $(".block").width(960/x);
    $(".block").height(960/x);
};

function refreshGrid() {
    var input = prompt("How many blocks per side?");
    clearGrid();
    createGrid(input);
};

function clearGrid() {
	$('.block').remove();
};

$(document).ready(function() {
	createGrid(16);

	$('body').on('click', 'input', function() {
	    refreshGrid();
	});

	$('body').on('mouseover', '.block', function() {
		var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
		$(this).css("background-color", newColor);
	});
});

