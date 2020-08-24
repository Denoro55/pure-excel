export function shouldResize(event) {
    return event.target.dataset.resize;
}

export function isCell(event) {
    return event.target.dataset.type === 'cell';
}

export function matrix($current, $target) {
    const target = $target.id(true);
    const current = $current.id(true);

    const cols = range(current.col, target.col);
    const rows = range(current.row, target.row);

    return rows.reduce((acc, row) => {
        cols.forEach(col => {
            acc.push(`${row}:${col}`)
        });
        return acc;
    }, []);
}

function range(from, to) {
    if (from > to) {
        [from, to] = [to, from];
    }
    return new Array(to - from + 1)
        .fill('')
        .map((_, index) => index + from);
}

export function nextSelector(key, {col, row}) {
    switch (key) {
    case 'Enter':
    case 'ArrowDown':
        row++;
        break;
    case 'ArrowRight':
    case 'Tab':
        col++;
        break;
    case 'ArrowLeft':
        col--;
        break;
    case 'ArrowUp':
        row--;
        break;
    }

    return `[data-id="${Math.max(row, 0)}:${Math.max(col, 0)}"]`;
}
