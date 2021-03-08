export const farray = [1,2,3,4,5,1,2,3,4,5];

export const getUniqueValue = array => (
    array.filter((currentValue, index, arr) => arr.indexOf(currentValue) === index)
);
