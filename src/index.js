import './style.scss'

class Bork {
    // Property initializer syntax

    instanceProperty = 'bork';
    boundFunction = () => {
        return this.instanceProperty;
    };

    // Static class properties

    static staticProperty = 'babelIsCool';
    static staticFunction = function() {
        return Bork.staticProperty;
    };
}

async function start() {
    await Promise.resolve()
}

start();

console.log('App is working...');
