const {TopVotedCandidate} = require("./Solution911")

describe("Solution 911 tests", () => {
    test('[[[0,1,1,0,0,1,0],[0,5,10,15,20,25,30]],[3],[12],[25],[15],[24],[8]]', () => {
        var persons = [0,1,1,0,0,1,0];
        var times = [0,5,10,15,20,25,30];
        var topVotedCandidate = new TopVotedCandidate(persons, times);

        var ts = [[3],[12],[25],[15],[24],[8]];
        var ans = [0,1,1,0,0,1];
        for (var i=0; i<ts.length; i++) {
            result = topVotedCandidate.q(ts[i][0]);
            expect(result).toBe(ans[i]);
            console.log(result);
        }
    });

    test('[[[0,1,2,2,1],[20,28,29,54,56]],[28],[53],[57],[29],[29],[28],[30],[20],[56],[55]]', () => {
        var persons = [0,1,2,2,1];
        var times = [20,28,29,54,56];
        var topVotedCandidate = new TopVotedCandidate(persons, times);

        var ts = [[28],[53],[57],[29],[29],[28],[30],[20],[56],[55]];
        var ans = [1,2,1,2,2,1,2,0,1,2];
        for (var i=0; i<ts.length; i++) {
            result = topVotedCandidate.q(ts[i][0]);
            expect(result).toBe(ans[i]);
            console.log(result);
        }
    });

    test('[[[0,0,0,0,1],[0,6,39,52,75]],[45],[49],[59],[68],[42],[37],[99],[26],[78],[43]]', () => {
        var persons = [0,0,0,0,1];
        var times = [0,6,39,52,75];
        var topVotedCandidate = new TopVotedCandidate(persons, times);

        //var ts = [[45],[49],[59],[68],[42],[37],[99],[26],[78],[43]];
        //var ans = [0,0,0,0,0,0,0,0,0,0];
        var ts = [[99]];
        var ans = [0];
        for (var i=0; i<ts.length; i++) {
            result = topVotedCandidate.q(ts[i][0]);
            expect(result).toBe(ans[i]);
            console.log(result);
        }
    });

    test('[[[0,0,1,1,2],[0,67,69,74,87]],[4],[62],[100],[88],[70],[73],[22],[75],[29],[10]]', () => {
        var persons = [0,0,1,1,2];
        var times = [0,67,69,74,87];
        var topVotedCandidate = new TopVotedCandidate(persons, times);

        var ts = [[4],[62],[100],[88],[70],[73],[22],[75],[29],[10]];
        var ans = [0,0,1,1,0,0,0,1,0,0];
        for (var i=0; i<ts.length; i++) {
            result = topVotedCandidate.q(ts[i][0]);
            expect(result).toBe(ans[i]);
            console.log(result);
        }
    });

    test('[[[0,1,2,3,0,3,4,1,4,2],[0,13,24,44,57,59,60,66,97,98]],[60],[98],[66],[96],[12],[14],[58],[97],[1],[65],[98],[67],[60],[58],[57],[24],[99],[13],[59],[23]]', () => {
        var persons = [0,1,2,3,0,3,4,1,4,2];
        var times = [0,13,24,44,57,59,60,66,97,98];
        var topVotedCandidate = new TopVotedCandidate(persons, times);

        var ts = [[60],[98],[66],[96],[12],[14],[58],[97],[1],[65],[98],[67],[60],[58],[57],[24],[99],[13],[59],[23]];
        var ans = [3,2,1,1,0,1,0,4,0,3,2,1,3,0,0,2,2,1,3,1];
        for (var i=0; i<ts.length; i++) {
            result = topVotedCandidate.q(ts[i][0]);
            expect(result).toBe(ans[i]);
            console.log(result);
        }
    });
})
