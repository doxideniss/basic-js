module.exports = function createDreamTeam( members ) {
  if (!Array.isArray(members)) {
    return false
  }
  return members.map(x => {
    if (typeof x === 'string') {
      return x.trim().slice(0,1).toUpperCase()
    } else {
      return ''
    }
  }).filter(x => x !== '').sort().join('')
};