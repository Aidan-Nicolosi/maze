
initialize();

function initialize() {
    $('.up').on('click', moveUp);
    $('.left').on('click', moveLeft);
    $('.right').on('click', moveRight);
    $('.down').on('click', moveDown);
    $('.reset').on('click', reset);
}

function reset() {
    $('.up').on('click', moveUp);
    $('.left').on('click', moveLeft);
    $('.right').on('click', moveRight);
    $('.down').on('click', moveDown);
    $('.reset').hide();
    const player = $('.player').detach();
    $('.start').append(player);
}

function disable() {
    $('.up').off('click');
    $('.left').off('click');
    $('.right').off('click');
    $('.down').off('click');
    $('.reset').show();
}

function moveUp() {
    const isAllowed = $('.player').parent().hasClass('open-up');
    if (isAllowed) {
        const originRow = $('.player').parent().attr('row');
        const originCol = $('.player').parent().attr('col');
        const player = $('.player').detach();
        const targetRow = parseInt(originRow) - 1;
        const targetCol = originCol;
        targetSelector = '.r' + targetRow + '.c' + targetCol;
        console.log(targetSelector);
        $(targetSelector).append(player);
        const isFinished = $(targetSelector).hasClass('finish');
        if (isFinished) {
            disable();
        }
    }

}

function moveLeft() {
    const isAllowed = $('.player').parent().hasClass('open-left');
    if (isAllowed) {
        const originRow = $('.player').parent().attr('row');
        const originCol = $('.player').parent().attr('col');
        const player = $('.player').detach();
        const targetCol = parseInt(originCol) - 1;
        const targetRow = originRow;
        targetSelector = '.r' + targetRow + '.c' + targetCol;
        console.log(targetSelector);
        $(targetSelector).append(player);
        const isFinished = $(targetSelector).hasClass('finish');
        if (isFinished) {
            disable();
        }
    }
}

function moveRight() {
    const isAllowed = $('.player').parent().hasClass('open-right');
    if (isAllowed) {
        const originRow = $('.player').parent().attr('row');
        const originCol = $('.player').parent().attr('col');
        const player = $('.player').detach();
        const targetCol = parseInt(originCol) + 1;
        const targetRow = originRow;
        targetSelector = '.r' + targetRow + '.c' + targetCol;
        console.log(targetSelector);
        $(targetSelector).append(player);
        const isFinished = $(targetSelector).hasClass('finish');
        if (isFinished) {
            disable();
        }
    }
}

function moveDown() {
    const isAllowed = $('.player').parent().hasClass('open-down');
    if (isAllowed) {
        const originRow = $('.player').parent().attr('row');
        const originCol = $('.player').parent().attr('col');
        const player = $('.player').detach();
        const targetRow = parseInt(originRow) + 1;
        const targetCol = originCol;
        targetSelector = '.r' + targetRow + '.c' + targetCol;
        console.log(targetSelector);
        $(targetSelector).append(player);
        const isFinished = $(targetSelector).hasClass('finish');
        if (isFinished) {
            disable();
        }
    }
}

