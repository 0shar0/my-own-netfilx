export const reverse = (array) => {
    const result = [...array];
    for (let i = 0; i < array.length / 2; i++) {
        [result[i], result[array.length - 1 - i]] = [
            result[array.length - 1 - i],
            result[i],
        ];
    }
    return result;
};
