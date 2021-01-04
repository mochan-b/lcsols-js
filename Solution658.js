var findClosestElements = function (arr, k, x) {
    var left = 0, right = arr.length - 1, mid, idx = -1;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (arr[mid] == x) {
            idx = mid;
            break;
        } else if (arr[mid] < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (idx === -1) {
        idx = right;
    }

    var lefti = idx, righti = idx + 1;
    var result = [];

    for (var i=0; i<k; i++) {
        if (lefti < 0) {
            result.push(arr[righti]);
            righti++;
            continue;
        }

        if (righti >= arr.length) {
            result.push(arr[lefti]);
            lefti--;
            continue;
        }

        var leftv = arr[lefti];
        var rightv = arr[righti];
        if (Math.abs(leftv - x) <= Math.abs(rightv - x)) {
            result.push(leftv);
            lefti--;
        } else {
            result.push(rightv);
            righti++;
        }
    }

    result.sort(function(a, b){return a - b});

    return result;
};

module.exports = {findClosestElements};
