/**
 * @param {number} house
 * @param {number[]} heaters
 */
var findHeater = function (house, heaters) {
    var left = 0, right = heaters.length - 1, mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (heaters[mid] == house) {
            return mid;
        }
        if (heaters[mid] < house) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
}

/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function(houses, heaters) {
    houses.sort(function(a, b){return a - b})
    heaters.sort(function(a, b){return a - b})

    var radius = 0;
    const MAX_VAL = (Math.max(houses[houses.length - 1], heaters[heaters.length-1]) - Math.min(houses[0], heaters[0])) + 1;

    for (var i=0; i<houses.length; i++) {
        var house = houses[i];
        var heateri = findHeater(house, heaters);

        var leftdist = MAX_VAL, rightdist = MAX_VAL, heaterdist

        if (heateri != heaters.length)
            rightdist = heaters[heateri] - house;

        if (heateri != 0)
            leftdist = house - heaters[heateri - 1];

        heaterdist = Math.min(leftdist, rightdist);

        radius = Math.max(radius, heaterdist);
    }

    return radius;
};

module.exports = {findRadius};
