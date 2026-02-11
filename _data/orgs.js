const fs = require('fs');
const path = require('path');

module.exports = function() {
  const orgsDir = path.join(__dirname, 'orgs');
  if (!fs.existsSync(orgsDir)) return [];

  return fs.readdirSync(orgsDir)
    .filter(f => f.endsWith('.json'))
    .map(f => JSON.parse(fs.readFileSync(path.join(orgsDir, f), 'utf8')));
};
