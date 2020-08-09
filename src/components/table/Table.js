import ExcelComponent from '@core/ExcelComponent';
import createTable from './template';
import resizeHandler from './resize';
import {shouldResize} from './helpers';

export default class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root) {
        super($root, {
            listeners: ['mousedown']
        });
    }

    toHtml() {
        return createTable(10);
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(this.$root, event);
        }
    }
}
