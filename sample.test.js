const assert = require('assert');

const obj1 = {
    a: {
        b:1
    }
};

const obj2 = {
    a: {
        c:1
    }
}

assert.deepStrictEqual(obj1,obj2, 'オブジェクトは等しい');