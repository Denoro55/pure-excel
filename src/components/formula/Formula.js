import ExcelComponent from '@core/ExcelComponent';

export default class Formula extends ExcelComponent {
    static className = 'excel__formula';

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click']
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

    onInput(event) {
        console.log(this, event.target.value)
    }

    onClick(event) {
        console.log('click')
    }
}
