const CODES = {
    A: 65,
    Z: 90
};

function createRow(content, index) {
    const resize = index ?
        '<div data-resize="row" class="row-resize"></div>'
        : '';
    return `
        <div data-type="resizable" class="row">
            <div class="row__info">
                ${index ? index : ''}
                ${resize}
            </div>
            <div class="row__data">
                ${content}
            </div>
        </div>
    `
}

function toColumn(char, index) {
    return `
        <div data-col="${index}" data-type="resizable" class="column">
            ${char}
            <div class="col-resize" data-resize="col"></div>
        </div>
    `
}

function toCell(row) {
    return function(_, index) {
        return `
            <div 
                data-type="cell"
                data-row="${row}" 
                data-col="${index}" 
                data-id="${row}:${index}"
                contenteditable="" 
                class="cell">
                
            </div>
        `
    }
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index);
}

export default function createTable(rowsCount = 15) {
    const rows = [];

    const cols = new Array(CODES.Z - CODES.A + 1)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('');

    rows.push(createRow(cols));

    for (let i = 0; i < rowsCount; i++) {
        const cellsCols = new Array(CODES.Z - CODES.A + 1)
            .fill('')
            .map(toCell(i))
            .join('');

        rows.push(createRow(cellsCols, i + 1));
    }

    return rows.join('')
}
