export const entries = function* (obj) {
    for (let key of Object.keys(obj)) {
        yield [key, obj[key]];
    }
};

export const props = function* (obj) {
    for (let key of Object.keys(obj)) {
        if (typeof obj[key] !== 'function') {
            yield key;
        }
    }
};

export const values = function* (obj) {
    for (let key of Object.keys(obj)) {
        yield  obj[key];
    }
};
