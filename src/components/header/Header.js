import ExcelComponent from '@core/ExcelComponent';

export default class Header extends ExcelComponent {
    static className = 'excel__header';

    toHtml() {
        return `
           <div class="excel__header-input">
                <input type="text" class="input" value="Excel">
            </div>
            <div class="excel__header-right">
                <div class="material-icons button">
                    delete
                </div>
                <div class="material-icons button">
                    exit_to_app
                </div>
            </div>`;
    }
}
