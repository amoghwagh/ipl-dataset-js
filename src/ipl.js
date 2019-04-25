const getNoOfMatchesPlayed = (matches) => {
  //write your code here
  return matches.reduce((acc, match) => {
    if (acc[match.season]) {
      acc[match.season]++
    } else {
      acc[match.season] = 1
    }
    return acc
  }, {})
}
const getNoOfMatchesWonPerTeamPerYear = () => {
  //write your code here
}
const getExtraRunsPerTeamForYear = () => {
 //write your code here
}
const getEconomicalBowlersForYear = () => {
 //write your code here
}

module.exports.getNoOfMatchesPlayed = getNoOfMatchesPlayed
module.exports.getNoOfMatchesWonPerTeamPerYear = getNoOfMatchesWonPerTeamPerYear
module.exports.getExtraRunsPerTeamForYear = getExtraRunsPerTeamForYear
module.exports.getEconomicalBowlersForYear = getEconomicalBowlersForYear
