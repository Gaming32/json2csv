function locateArray(data) {
    if (Array.isArray(data)) {
        return data;
    }
    else {
        for (var key in data) {
            sub = data[key];
            if (Array.isArray(sub)) {
                return sub;
            }
            else {
                var subArray = locateArray(sub);
                if (subArray != null) {
                    return subArray;
                }
            }
        }
    }
    return null;
}

function json2csv(json) {
    return locateArray(json);
}

if (module) {
    module.exports = {
        json2csv: json2csv
    };
}