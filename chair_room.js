function findSpareChairs(meetingRooms, need) {
    let chairsTaken = [];
    let totalChairs = 0;

    for (let room of meetingRooms) {
        totalChairs += room[1];
    }

    if (need === 0) {
        return [1];
    }

    if (totalChairs < need) {
        return [0];
    }

    for (let room of meetingRooms) {
        let occupants = room[0];
        let chairsAvailable = room[1] - (occupants.match(/X/g) || []).length;

        if (chairsAvailable > 0) {
            if (chairsAvailable >= need) {
                chairsTaken.push(need);
                return chairsTaken;
            } else {
                chairsTaken.push(chairsAvailable);
                need -= chairsAvailable;
            }
        } else {
            chairsTaken.push(0);
        }
    }

    return chairsTaken;
}

// Example usage
let meetingRooms = [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]];
let need = 4;
console.log(findSpareChairs(meetingRooms, need));



//    Terminal
// node .\chair_room.js