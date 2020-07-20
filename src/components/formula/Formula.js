import ExcelComponent from '@core/ExcelComponent';

export default class Formula extends ExcelComponent {
    static className = 'excel__formula';

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
}
