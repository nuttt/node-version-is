var semver = require('semver');
var packageJson = require('../../package.json');

if (packageJson.engines != null) {
  var version = process.version
  var expectedVersion = packageJson.engines.node

  if (!semver.satisfies(version, expectedVersion)) {
    throw new Error("Node " + expectedVersion + " required.")
  }
}
