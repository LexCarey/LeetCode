/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    let l = 0, r = people.length-1, result = 0, mid
    people.sort((a, b) => a - b);
    for (let i=people.length-1; i>=0; i--) {
        if (people[i] != limit && people[i]+people[0] <= limit && people.length>1) {
            while (l<=r || people[i]+people[mid]>limit) {
                mid = ~~(l + (r-l)/2)
                if (people[i] + people[mid] >= limit)  r = mid-1;
                else l = mid+1;
                if (mid==i-1) break
            }
        people.splice(i,1)
        people.splice(mid,1)
        } else {
            people.splice(i,1)
        }
        i = people.length
        r = people.length-1
        l = 0
        result++
    }
    return result
};