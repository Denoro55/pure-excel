import ExcelComponent from '@core/ExcelComponent';

export default class Toolbar extends ExcelComponent {
    static className = 'excel__toolbar';

    constructor($root) {
        super($root, {
            name: 'Toolbar',
            listeners: ['click']
        })
    }

    toHtml() {
        return `
            <div class="toolbar">
                <div class="toolbar__list">
                    <div class="toolbar__item">
                        <div class="material-icons button">
                            format_align_left
                        </div>
                    </div>
                    <div class="toolbar__item">
                        <div class="material-icons button">
                            format_align_justify
                        </div>
                    </div>
                    <div class="toolbar__item">
                        <div class="material-icons button">
                            format_align_right
                        </div>
                    </div>
                    <div class="toolbar__item">
                        <div class="material-icons button">
                            format_bold
                        </div>
                    </div>
                    <div class="toolbar__item">
                        <div class="material-icons button">
                            format_italic
                        </div>
                    </div>
                    <div class="toolbar__item">
                        <div class="material-icons button">
                            format_underlined
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    onClick(event) {
        console.log(event.target)
    }
}
