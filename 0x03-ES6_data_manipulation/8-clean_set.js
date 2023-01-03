export function cleanSet(set, startString) {
    let result = "";
    for (const value of set) {
        if (value.startsWith(startString)) {
            result += value.substring(startString.length) + "-";
        }
    }
    return result.slice(0, -1);
}
