var semver = require('semver');

checkVersion = function(customExpectedVersion) {
  var version = process.version;
  var expectedVersion = version; // Default: always satisfied
  if (typeof customExpectedVersion !== "undefined" && customExpectedVersion !== null) {
    expectedVersion = customExpectedVersion;
  } else {
    var packageJson;
    try {
      packageJson = require('../../package.json');
    } catch (e) { return; }

    engines = packageJson.engines;
    if (typeof engines !== "undefined" && engines !== null) {
      expectedVersion = engines.node;
    }
  }

  if (!semver.satisfies(version, expectedVersion)){
    throw new Error('Node ' + expectedVersion + ' required.');
  }
};

module.exports = checkVersion
