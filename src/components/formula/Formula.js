import ExcelComponent from '@core/ExcelComponent';

export default class Formula extends ExcelComponent {
    static className = 'excel__formula';

    constructor($root, options) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'keydown'],
            ...options
        })
    }

    toHtml() {
        return `
            <div class="formula">
                <div class="formula__left">
                    FX
                </div>
                <div class="formula__right">
                    <input type="text" class="input">
                </div>
            </div>
        `;
    }

    init() {
        super.init();

        this.$formula = this.$root.find('input');
        this.$on('table:select', $cell => {
            console.log($cell.text(), this.$formula);
            this.$formula.text($cell.text());
        })
    }

    onInput(event) {
        this.$emit('formula:input', event.target.value);
    }

    onKeydown(event) {
        if (event.code === 'Enter') {
            this.$emit('formula:done');
        }
    }
}
