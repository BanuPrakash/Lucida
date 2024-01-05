export default function map(data, transformFn) {
    let result = [];
    data.forEach(elem => {
        result.push(transformFn(elem));
    })
    return result;
}
// HOF
export function filter(data, predicate) {
    let result = [];
    data.forEach(elem => {
        if (predicate(elem)) {
            result.push(elem);
        }
    })
    return result;
}