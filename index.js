function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else {
        for (let key in collection) {
            callback(collection[key], key, collection);
        }
    }
    return collection;
}

function myMap(collection, callback) {
    let result = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection));
        }
    } else {
        for (let key in collection) {
            result.push(callback(collection[key], key, collection));
        }
    }
    
    return result;
}

function myReduce(collection, callback, acc) {
    let startIdx = 0;

    if (!acc) {
        acc = collection[0];
        startIdx = 1;
    }

    if (Array.isArray(collection)) {
        for (let i = startIdx; i < collection.length; i++) {
            acc = callback(acc, collection[i], collection);
        }
    } else {
        for (let key in collection) {
            acc = callback(acc, collection[key], collection);
        }
    }
    
    return acc;
}

function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i];
            }
        }
    } else {
        for (let key in collection) {
            if (predicate(collection[key])) {
                return collection[key];
            }
        }
    }
    
    return undefined;
}

function myFilter(collection, predicate) {
    let result = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                result.push(collection[i]);
            }
        }
    } else {
        for (let key in collection) {
            if (predicate(collection[key])) {
                result.push(collection[key]);
            }
        }
    }
    
    return result;
}

function mySize(collection) {
    if (Array.isArray(collection)) {
        return collection.length;
    } else {
        return Object.keys(collection).length;
    }
}

function myLast(array, n) {
    if (n) {
        return array.slice(-n);
    } else {
        return array[array.length - 1];
    }
}