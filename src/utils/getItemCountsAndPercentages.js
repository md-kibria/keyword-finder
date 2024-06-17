function getItemCountsAndPercentages(arr) {
    const itemCounts = {};
    const totalItems = arr.length;

    // Count occurrences of each item
    arr.forEach(item => {
        itemCounts[item] = (itemCounts[item] || 0) + 1;
    });

    // Create the result array with the desired format
    const result = [];
    for (let item in itemCounts) {
        result.push({
            key: item,
            count: itemCounts[item],
            perc: ((itemCounts[item] / totalItems) * 100).toFixed(2)
        });
    }

    result.sort((a, b) => {
        if(a.count > b.count) {
            return -1;
        } else if(a.count < b.count) {
            return 1;
        } else {
            return 0;
        }
    });
    return result;
}

export default getItemCountsAndPercentages;