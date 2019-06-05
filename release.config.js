module.exports = {
  'pkgRoot': 'dist/',
  'verifyConditions': [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/git',
    '@qiwi/semantic-release-gh-pages-plugin'
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/github', {
      'assets': [
        {
          'path': 'dist/alicerce.css',
          'label': 'Alicerce CSS dist'
        }
      ]
    }],
    '@semantic-release/changelog',
    '@semantic-release/npm',
    ['@semantic-release/git', {message: `chore(release): \${nextRelease.version} [skip ci]`}],
  ],
  'publish': [
    '@semantic-release/npm',
    '@semantic-release/github',
    {
      'path': '@qiwi/semantic-release-gh-pages-plugin',
      'msg': 'docs: updated docs',
      'branch': 'gh-pages'
    }
  ]
}
