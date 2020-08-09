import ExcelComponent from '@core/ExcelComponent';
import createTable from './table.template';

export default class Table extends ExcelComponent {
    static className = 'excel__table';

    toHtml() {
        return createTable();
    }

    // toHtml() {
    //     return `
    //         <div class="row">
    //             <div class="row__info">
    //
    //             </div>
    //             <div class="row__data">
    //                 <div class="column">
    //                     A
    //                 </div>
    //                 <div class="column">
    //                     B
    //                 </div>
    //                 <div class="column">
    //                     C
    //                 </div>
    //             </div>
    //         </div>
    //          <div class="row">
    //             <div class="row__info">
    //             1
    //             </div>
    //             <div class="row__data">
    //                 <div class="cell">
    //                     A1
    //                 </div>
    //                 <div class="cell">
    //                     B1
    //                 </div>
    //                 <div class="cell">
    //                     C2
    //                 </div>
    //             </div>
    //         </div>
    //     `;
    // }
}
