// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

// For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

s = "abab", goal = "abab"
function testF(s, goal) {
    if (s.length != goal.length) {
        return false;
    } else {
        let to = s.length
        let mapS = []
        let mapG = []
        let checkSame = []
        for (let i = 0; i < to; i++) {
            if (s.charAt(i) != goal.charAt(i)) {
                mapS.push(s.charAt(i))
                mapG.push(goal.charAt(i))
            } else {
                checkSame.push(s.charAt(i))
            }
        }
        if (checkSame.length > 1 && checkSame.length == to) {
            if (checkSame[0] == checkSame[1]) {
                return true
            }
            if (checkSame.length > 2) {
                let s = new Set(checkSame)
                if (s.size < checkSame.length) {
                    return true
                }
            }
        }

        if (mapS.length == 2) {

            if (to == 2) {
                if (mapS[0] == mapG[1] && mapS[1] == mapG[0]) {
                    return true
                } else {
                    return false
                }
            } else {
                let mapSet = new Set(mapS)
                if (mapSet.size < mapS.length) {
                    return false
                }
                if (mapS[0] == mapG[1] && mapS[1] == mapG[0]) {
                    return true
                } else {
                    return false
                }
            }
        } else {
            return false
        }
    }
}
console.log(testF(s, goal))
