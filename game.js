
initialize();

function initialize() {
    enableMovement();
    $('.reset').on('click', reset);
}

function reset() {
    enableMovement();
    $('.reset').hide();
    const player = $('.player').detach();
    $('.start').append(player);
}

function finish() {
    disableMovement();
    $('.reset').show();
}

function disableMovement() {
    $('.up').off('click');
    $('.left').off('click');
    $('.right').off('click');
    $('.down').off('click');
}

function enableMovement() {
    $('.up').on('click', moveUp);
    $('.left').on('click', moveLeft);
    $('.right').on('click', moveRight);
    $('.down').on('click', moveDown);
}

function moveUp() {
    const isAllowed = $('.player').parent().hasClass('open-up');
    if (isAllowed) {
        disableMovement();
        $('.player').addClass('moving-up');

        setTimeout(function () {
            const originRow = $('.player').parent().attr('row');
            const originCol = $('.player').parent().attr('col');
            const player = $('.player').removeClass('moving-up').detach();
            const targetRow = parseInt(originRow) - 1;
            const targetCol = originCol;
            targetSelector = '.r' + targetRow + '.c' + targetCol;
            console.log(targetSelector);
            $(targetSelector).append(player);
            const isFinished = $(targetSelector).hasClass('finish');
            if (isFinished) {
                finish();
            } else {
                enableMovement();
            }
        }, 150)
    }

}

function moveLeft() {
    const isAllowed = $('.player').parent().hasClass('open-left');
    if (isAllowed) {
        disableMovement();
        $('.player').addClass('moving-left');

        setTimeout(function () {
            const originRow = $('.player').parent().attr('row');
            const originCol = $('.player').parent().attr('col');
            const player = $('.player').removeClass('moving-left').detach();
            const targetCol = parseInt(originCol) - 1;
            const targetRow = originRow;
            targetSelector = '.r' + targetRow + '.c' + targetCol;
            $(targetSelector).append(player);
            const isFinished = $(targetSelector).hasClass('finish');
            if (isFinished) {
                finish();
            } else {
                enableMovement();
            }
        }, 150);
    }
}

function moveRight() {
    const isAllowed = $('.player').parent().hasClass('open-right');
    if (isAllowed) {
        disableMovement();
        $('.player').addClass('moving-right');

        setTimeout(function () {
            const originRow = $('.player').parent().attr('row');
            const originCol = $('.player').parent().attr('col');
            const player = $('.player').removeClass('moving-right').detach();
            const targetCol = parseInt(originCol) + 1;
            const targetRow = originRow;
            targetSelector = '.r' + targetRow + '.c' + targetCol;
            $(targetSelector).append(player);
            const isFinished = $(targetSelector).hasClass('finish');
            if (isFinished) {
                finish();
            } else {
                enableMovement();
            }
        }, 150);
    }
}


function moveDown() {
    const isAllowed = $('.player').parent().hasClass('open-down');
    if (isAllowed) {
        disableMovement();
        $('.player').addClass('moving-down');

        setTimeout(function () {
            const originRow = $('.player').parent().attr('row');
            const originCol = $('.player').parent().attr('col');
            const player = $('.player').removeClass('moving-down').detach();
            const targetRow = parseInt(originRow) + 1;
            const targetCol = originCol;
            targetSelector = '.r' + targetRow + '.c' + targetCol;
            $(targetSelector).append(player);
            const isFinished = $(targetSelector).hasClass('finish');
            if (isFinished) {
                finish();
            } else {
                enableMovement();
            }
        }, 150);

    }
}
