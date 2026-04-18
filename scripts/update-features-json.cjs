const fs = require('fs');
const path = require('path');

const featuresDir = path.join(__dirname, '../src/features');
const outputJson = path.join(__dirname, '../src/features/FeatureTabs/data/features.json');

function getFeatureFolders() {
  return fs.readdirSync(featuresDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name !== 'FeatureTabs')
    .map(dirent => dirent.name);
}

function buildFeatureEntry(name) {
  return {
    name,
    description: 'TODO: Add description for ' + name,
    demoUrl: `/features/${name}/App`
  };
}

function updateFeaturesJson() {
  const featureFolders = getFeatureFolders();
  const features = featureFolders.map(buildFeatureEntry);
  fs.writeFileSync(outputJson, JSON.stringify(features, null, 2));
  console.log('features.json updated:', features);
}

updateFeaturesJson();
