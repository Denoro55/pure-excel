export default class TableSelection {
    static className = 'selected';

    constructor() {
        this.group = [];
        this.$current = null;
    }

    select($cell) {
        this.clear();
        this.group.push($cell);
        this.$current = $cell;
        $cell.focus().addClass(TableSelection.className);
    }

    selectGroup($cells) {
        this.clear();
        this.group = $cells;

        $cells.forEach($cell => {
            $cell.addClass(TableSelection.className);
        })
    }

    clear() {
        this.group.forEach($el => {
            $el.removeClass(TableSelection.className);
        });
        this.group = [];
    }
}
