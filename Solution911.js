var TopVotedCandidate = function (persons, times) {
    this.persons = persons;
    this.times = times;

    this.winner = [];
    var first = 0;
    var firstname = -1;

    var votes = new Map();
    for (var i=0; i<this.times.length; i++) {
        var person = this.persons[i];

        if (!votes.has(person))
        {
            votes.set(person, 0);
        }

        personvote = votes.get(person) + 1;
        votes.set(person, personvote);

        if (personvote >= first) {
            first = personvote;
            firstname = person;
        }

        this.winner.push(firstname);
    }

    return null;
};

/**
 * @param {number} t
 * @return {number}
 */
TopVotedCandidate.prototype.q = function (t) {
    var left = 0, right = this.times.length - 1, mid;
    var found = false;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (this.times[mid] == t) {
            found = true;
            break;
        } else if (this.times[mid] < t) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (!found) {
        return this.winner[right];
    }
    else {
        return this.winner[mid];
    }
};

module.exports = {TopVotedCandidate};
