function locateArray(data) {
    if (Array.isArray(data)) {
        return data;
    }
    else {
        for (var key in data) {
            sub = data[key];
            var subArray = locateArray(sub);
            if (subArray != null) {
                return subArray;
            }
        }
    }
    return null;
}

function analyzeKeys(array) {
    var keys = [];
    for (var obj of array) {
        for (var key in obj) {
            if (!keys.includes(key))
                keys.push(key);
        }
    }
    return keys
}

function generateFieldObject(array, keys) {
    var result = {};
    for (var obj of array) {
        for (var key of keys) {
            if (!(key in result))
                result[key] = [];
            if (key in obj)
                result[key].push(obj[key]);
            else
                result[key].push("");
        }
    }
    return result;
}

function csvFromFieldObject(fieldObject) {
    if (Object.keys(fieldObject).length == 0)
        return "";

    var result = "";

    for (var key in fieldObject) {
        result += `"${key}",`;
    }
    result = result.substr(0, result.length - 1) + "\n";

    var length = fieldObject[key].length;
    for (i = 0; i < length; i++) {
        for (var key in fieldObject) {
            result += `"${fieldObject[key][i]}",`;
        }
        result = result.substr(0, result.length - 1) + "\n";
    }

    return result;
}

function json2csv(json) {
    var array = locateArray(json);
    var keys = analyzeKeys(array);
    var fieldObject = generateFieldObject(array, keys);
    return csvFromFieldObject(fieldObject);
}

if (typeof module != "undefined") {
    module.exports = {
        json2csv: json2csv
    };
}

// console.log(csvFromFieldObject({
//     id: [
//         "1", "2"
//     ],
//     name: [
//         "Matt Glosson", "Gmail Man"
//     ]
// }))