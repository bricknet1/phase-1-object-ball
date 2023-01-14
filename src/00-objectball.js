function gameObject(){
    return obj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: "Black, White",
            players: {
                "Alan Anderson": {
                    number: "0",
                    shoe: "16",
                    points: "22",
                    rebounds: "12",
                    assists: "12",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "1"
                },
                "Reggie Evans": {
                    number: "30",
                    shoe: "14",
                    points: "12",
                    rebounds: "12",
                    assists: "12",
                    steals: "12",
                    blocks: "12",
                    slamDunks: "7"
                },
                "Brook Lopez": {
                    number: "11",
                    shoe: "17",
                    points: "17",
                    rebounds: "19",
                    assists: "10",
                    steals: "3",
                    blocks: "1",
                    slamDunks: "15"
                },
                "Mason Plumlee": {
                    number: "1",
                    shoe: "19",
                    points: "26",
                    rebounds: "12",
                    assists: "6",
                    steals: "3",
                    blocks: "8",
                    slamDunks: "5"
                },
                "Jason Terry": {
                    number: "31",
                    shoe: "15",
                    points: "19",
                    rebounds: "2",
                    assists: "2",
                    steals: "4",
                    blocks: "11",
                    slamDunks: "1"
                },
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: "Turquoise, Purple",
            players: {
                "Jeff Adrien": {
                    number: "4",
                    shoe: "18",
                    points: "10",
                    rebounds: "1",
                    assists: "1",
                    steals: "2",
                    blocks: "7",
                    slamDunks: "2"
                },
                "Bismak Biyombo": {
                    number: "0",
                    shoe: "16",
                    points: "12",
                    rebounds: "4",
                    assists: "7",
                    steals: "7",
                    blocks: "15",
                    slamDunks: "10"
                },
                "DeSagna Diop": {
                    number: "2",
                    shoe: "14",
                    points: "24",
                    rebounds: "12",
                    assists: "12",
                    steals: "4",
                    blocks: "5",
                    slamDunks: "5"
                },
                "Ben Gordon": {
                    number: "8",
                    shoe: "15",
                    points: "33",
                    rebounds: "3",
                    assists: "2",
                    steals: "1",
                    blocks: "1",
                    slamDunks: "0"
                },
                "Brendan Haywood": {
                    number: "33",
                    shoe: "15",
                    points: "6",
                    rebounds: "12",
                    assists: "12",
                    steals: "22",
                    blocks: "5",
                    slamDunks: "12"
                }
            }
        },
    }
}

/////////////////////////

function numPointsScored(name){
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            let playerObj = teamObj.players;
            for (let nameKey in playerObj) {
                let player = nameKey;
                // debugger;
                if (name === player) {
                    console.log(playerObj[player].points); 
                    return playerObj[player].points;
                }
            }
        } 
    }
}
numPointsScored('Brendan Haywood')

/////////////////

function shoeSize(name){
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            let playerObj = teamObj.players;
            for (let nameKey in playerObj) {
                let player = nameKey;
                // debugger;
                if (name === player) {
                    console.log(playerObj[player].shoe); 
                    return playerObj[player].shoe;
                }
            }
        } 
    }
}
shoeSize('Brendan Haywood')

////////////////

function teamColors(name){
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        if (teamObj.teamName === name){
            console.log(teamObj.colors); 
            return teamObj.colors;
        }
    }
}
teamColors('Charlotte Hornets')

/////////////////

let teamNamesList = [];
function teamNames(){
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        // debugger;
        console.log(teamObj.teamName); 
        teamNamesList.push(teamObj.teamName);
    }
}
teamNames()
console.log(teamNamesList);

//////////////////////

let jerseyNumbers = [];
function playerNumbers(teamArg) {
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            // debugger;
            if (teamArg === teamObj[teamKey]) {
            let playerObj = teamObj.players;
            for (let nameKey in playerObj) {
                let player = nameKey;
                jerseyNumbers.push(playerObj[player].number);
                }
            }
        }
    }
}
playerNumbers('Charlotte Hornets');
console.log(jerseyNumbers);

//////////////////

function playerStats(name){
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            let playerObj = teamObj.players;
            for (let nameKey in playerObj) {
                let player = nameKey;
                // debugger;
                if (name === player) {
                    console.log(playerObj[player]); 
                    return playerObj[player];
                }
            }
        } 
    }
}
playerStats('Brendan Haywood');

//////////////////

function bigShoeRebounds(){
    let bigShoe = 0;
    let bigShoeReboundCount;
    let playerWithBiggestShoe;
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            let playerObj = teamObj.players;
            for (let nameKey in playerObj) {
                let player = nameKey;
                // debugger;
                if (playerObj[player].shoe > bigShoe) {
                    bigShoe = playerObj[player].shoe;
                    bigShoeReboundCount = playerObj[player].rebounds;
                    playerWithBiggestShoe = player;
                }
            }
        }
    } 
    console.log(`bigShoeRebounds: ${playerWithBiggestShoe} has the biggest shoes at size ${bigShoe} and their rebound count was ${bigShoeReboundCount}`);
    return bigShoeReboundCount;
}
bigShoeRebounds();

//////////////////
// BONUS Q's    //
//////////////////


function mostPointsScored(){
    let highScore = 0;
    let highScorePlayer;
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            let playerObj = teamObj.players;
            for (let nameKey in playerObj) {
                let player = nameKey;
                // debugger;
                if (parseInt(playerObj[player].points) > highScore) {
                    highScore = playerObj[player].points;
                    highScorePlayer = player;
                }
            }
        } 
    }
    console.log(`mostPointsScored: ${highScorePlayer} scored the most points with ${highScore} total points.`);
    return highScorePlayer;
}
mostPointsScored();

///////////////////////

function winningTeam(){
    let homeScore = 0;
    let awayScore = 0;
    let winningTeam;
    let winningScore;
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        let playerObj = teamObj.players;
        for (let nameKey in playerObj) {
                let player = nameKey;
                // debugger;
                if (gameKey === "home") {
                    homeScore += parseInt(playerObj[player].points);
                } else if (gameKey === "away") {
                    awayScore += parseInt(playerObj[player].points);
                
            }
        }
    } 
    // debugger;
    if (homeScore > awayScore) {
        winningTeam = game.home.teamName;
        winningScore = homeScore;
    } else if (awayScore > homeScore) {
        winningTeam = game.away.teamName;
        winningScore = awayScore;
    }
    console.log(`winningTeam: The ${winningTeam} won the game with ${winningScore} points.`);
    return winningTeam;
}
winningTeam()

///////////////////////

function playerWithLongestName(){
    let longestNameLength = 0;
    let longestNamePlayer;
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            let playerObj = teamObj.players;
            for (let nameKey in playerObj) {
                let player = nameKey;
                // debugger;
                if (player.length > longestNameLength) {
                    longestNameLength = player.length;
                    longestNamePlayer = player;
                    }
            }
        }
    } 
    console.log(`playerWithLongestName: ${longestNamePlayer} has the longest name with ${longestNameLength} characters.`);
    return longestNamePlayer;
}
playerWithLongestName();

///////////////////////
// Super Bonus       //
///////////////////////

function doesLongNameStealATon(){
    let longestNameLength = 0;
    let longestNamePlayer;
    let mostSteals = 0;
    let playerWithMostSteals;
    let game = gameObject();
    for (let gameKey in game) {
        let teamObj = game[gameKey]
        for (let teamKey in teamObj) {
            let playerObj = teamObj.players;
            for (let nameKey in playerObj) {
                let player = nameKey;
                // debugger;
                if (parseInt(playerObj[player].steals) > mostSteals) {
                    mostSteals = playerObj[player].steals;
                    playerWithMostSteals = player;
                }
                if (player.length > longestNameLength) {
                    longestNameLength = player.length;
                    longestNamePlayer = player;
                    }
            }
        }
    } 
    if (playerWithMostSteals === longestNamePlayer) {
    console.log(`doesLongNameStealATon: The player with the longest name is ${longestNamePlayer} and he also has the most steals with ${mostSteals}.`);
    return true
    } else {
        console.log(`doesLongNameStealATon: The player with the longest name is ${longestNamePlayer}, but he didn't have the most steals. That distinction belongs to ${playerWithMostSteals} with ${mostSteals}.`);
    return false;
    };
}
doesLongNameStealATon();