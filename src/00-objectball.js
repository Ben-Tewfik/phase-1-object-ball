function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 19,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

// number of points Scored

function numPointsScored(player) {
  const game = gameObject();
  for (let team in game) {
    const players = game[team].players;
    if (players[player]) {
      return players[player].points;
    }
  }
}
console.log(numPointsScored("Brendan Haywood"));

// the player shoeSize

function shoeSize(playerName) {
  const game = gameObject();
  for (let team in game) {
    const players = game[team].players;
    if (players[playerName]) {
      return players[playerName].shoe;
    }
  }
}
console.log(shoeSize("Brendan Haywood"));

// Team Colors

function teamColors(teamName) {
  const game = gameObject();
  for (let team in game) {
    if (teamName) {
      return game[team].colors;
    }
  }
}
console.log(teamColors("Brooklyn Nets"));

// Team name

function teamNames() {
  const game = gameObject();
  const arrGame = Object.values(game);
  const teamNames = arrGame.map(element => element.teamName);
  return teamNames;
}
console.log(teamNames());

//  Team players numbers

function playerNumbers(name) {
  const game = gameObject();

  for (let team in game) {
    if (game[team].teamName === name) {
      const playersNames = Object.values(game[team].players).map(
        item => item.number
      );
      return playersNames;
    }
  }
}
console.log(playerNumbers("Charlotte Hornets"));

// Player's stats

function playerStats(playerName) {
  const game = gameObject();
  for (let team in game) {
    if (game[team].players[playerName]) {
      return game[team].players[playerName];
    }
  }
}
console.log(playerStats("Alan Anderson"));

// big shoe rebounds

function bigShoeRebounds() {
  const game = gameObject();
  let shoeSize = 0;
  let rebounds = 0;
  const arr = [];
  Object.values(game).forEach(team => {
    Object.values(team.players).forEach(player => {
      if (player.shoe > shoeSize) {
        shoeSize = player.shoe;
        rebounds = player.rebounds;
      }
    });
  });
  arr.push(shoeSize, rebounds);
  return arr;
}

console.log(bigShoeRebounds());

function mostPointsScored() {
  const game = gameObject();
  let points = 0;
  Object.values(game).forEach(team => {
    Object.values(team.players).forEach(player => {
      points = Math.max(points, player.points);
    });
  });
  return points;
}
console.log(mostPointsScored());

// winning team

function winningTeam() {
  const game = gameObject();
  const homeTotalPoints = Object.values(game.home.players).reduce(
    (acc, curr) => {
      return acc + curr.points;
    },
    0
  );
  const awayTotalPoints = Object.values(game.away.players).reduce(
    (acc, curr) => {
      return acc + curr.points;
    },
    0
  );
  const winner = Math.max(homeTotalPoints, awayTotalPoints);
  return winner;
}
console.log(winningTeam());

// the player with the longest name

function playerWithLongestName() {
  const game = gameObject();
  let longestName = "";
  Object.values(game).forEach(team => {
    Object.keys(team.players).forEach(player => {
      if (longestName > player.length) {
        longestName = player.length;
      }
      longestName = player;
    });
  });
  return longestName;
}
console.log(playerWithLongestName());

// the player with the most steals

function doesLongNameStealATon() {
  const game = gameObject();
  let mostSteals = 0;
  const longestName = playerWithLongestName();
  Object.values(game).forEach(team => {
    Object.values(team.players).forEach(player => {
      if (player.steals > mostSteals) {
        mostSteals = player.steals;
      }
    });
  });
  const value =
    game.home.players[longestName] || game.away.players[longestName];
  return value.steals === mostSteals;
}
console.log(doesLongNameStealATon());
