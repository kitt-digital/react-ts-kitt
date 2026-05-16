/**
 * Semantic Release configuration file.
 *
 * Used to automate the package release workflow
 * by your commit messages.
 *
 * @type {import('semantic-release').GlobalConfig}
 *
 * Configuration of the git commit-msg hook:
 * @ALLOWED_MESSAGE_TYPES=[minor, feat, patch, fix, style, test];
 * This is necessary to validate the commit messages locally
 */
module.exports = {
  branches: ['main'],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        releaseRules: [
          { type: 'minor', release: 'minor' },
          { type: 'feat', release: 'minor' },
          { type: 'patch', release: 'patch' },
          { type: 'fix', release: 'patch' },
          { type: 'style', release: 'patch' },
          { type: 'test', release: false },
          { type: 'perf', release: false },
          { scope: 'no-release', release: false },
          { scope: 'breaking', release: 'major' }
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES']
        }
      }
    ],
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'package.json', 'src/@types/**/*.d.ts'],
        message: '[RELEASE]: ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ]
  ]
};
