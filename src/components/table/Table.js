import ExcelComponent from '@core/ExcelComponent';
import createTable from './template';
import resizeHandler from './resize';
import {shouldResize, isCell, matrix, nextSelector} from './helpers';
import TableSelection from './TableSelection';
import {$} from '@core/Dom';

export default class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root, options) {
        super($root, {
            listeners: ['mousedown', 'keydown', 'input'],
            ...options
        });
    }

    toHtml() {
        return createTable(20);
    }

    prepare() {
        this.selection = new TableSelection();
    }

    init() {
        super.init();

        const $cell = this.$root.find('[data-id="0:0"]');
        this.selection.select($cell);

        this.$on('formula:input', (data) => {
            this.selection.$current.text(data);
        });

        this.$on('formula:done', () => {
            this.selection.$current.focus();
        });

        this.$emit('table:select', $cell);
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event);
        } else if (isCell(event)) {
            const $target = $(event.target);
            if (event.shiftKey) {
                const $cells = matrix(
                    this.selection.$current,
                    $target
                ).map(id => {
                    return this.$root.find(`[data-id="${id}"]`)
                });
                this.selection.selectGroup($cells);
            } else {
                this.selectCell($target);
            }
        }
    }

    selectCell($cell) {
        this.selection.select($cell);
        this.$emit('table:select', $cell);
    }

    onKeydown(event) {
        const key = event.code;
        const keys = [
            'Enter',
            'Tab',
            'ArrowRight',
            'ArrowLeft',
            'ArrowUp',
            'ArrowDown'
        ];
        if (keys.includes(key) && !event.shiftKey) {
            event.preventDefault();
            const {col, row} = this.selection.$current.id(true);
            const $next = this.$root.find(nextSelector(key, {col, row}));
            this.selectCell($next);
        }
    }

    onInput(event) {
        this.$emit('table:select', $(event.target));
    }
}
