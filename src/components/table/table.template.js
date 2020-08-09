const CODES = {
    A: 65,
    Z: 90
};

function createRow(content, info = '') {
    return `
        <div class="row">
            <div class="row__info">
                ${info}
            </div>
            <div class="row__data">
                ${content}
            </div>
        </div>
    `
}

function toColumn(char) {
    return `
        <div class="column">
            ${char}
        </div>
    `
}

function toCell() {
    return `
        <div contenteditable="" class="cell">
            
        </div>
    `
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

    const cellsCols = new Array(CODES.Z - CODES.A + 1)
        .fill('')
        .map(toCell)
        .join('');

    for (let i = 0; i < rowsCount; i++) {
        rows.push(createRow(cellsCols, i + 1));
    }

    return rows.join('')
}
