import {$} from '@core/Dom'

export default function resizeHandler($root, event) {
    const data = event.target.dataset;

    const $resizer = $(event.target);
    let value;
    const sideProp = data.resize === 'col' ? 'bottom' : 'right';
    $resizer.css({
        'opacity': 1,
        'z-index': 1,
        [sideProp]: '-5000px',
    });
    const $parent = $resizer.closest('[data-type="resizable"]');
    const coords = $parent.getCoords();

    if (data.resize === 'col') {
        document.onmousemove = e => {
            const delta = e.pageX - coords.right;
            value = coords.width + delta;

            $resizer.css({
                'transform': `translateX(${delta}px)`
            });
        };
    } else {
        document.onmousemove = e => {
            const delta = e.pageY - coords.bottom;
            value = coords.height + delta;

            $resizer.css({
                'transform': `translateY(${delta}px)`
            });
        };
    }

    document.onmouseup = e => {
        document.onmousemove = null;
        document.onmouseup = null;
        $resizer.css({
            'opacity': '',
            'z-index': '',
            'transform': '',
            'bottom': '',
        });
        if (data.resize === 'col') {
            const index = $parent.data.col;
            // eslint-disable-next-line max-len
            const elements = $root.findAll(`[data-col="${index}"]`);
            elements.forEach(el => {
                $(el).css({'width': value + 'px'});
            })
        } else {
            $parent.css({'height': value + 'px'})
        }
    }
}
