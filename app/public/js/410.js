window.modules["410"] = [function(require,module,exports){module.exports={
  "_args": [
    [
      "csso@3.3.1",
      "/Users/intellisys/Documents/Recipe/clay-starter/app"
    ]
  ],
  "_from": "csso@3.3.1",
  "_id": "csso@3.3.1",
  "_inBundle": false,
  "_integrity": "sha512-OjETffCFB/OzwxVL3eF0+5tXOXCMukVO6rEUxlkIhscE1KRObyg+zMrLUbkPn9kxgBrFWicc37Gv5/22dOh5EA==",
  "_location": "/postcss-csso/csso",
  "_phantomChildren": {},
  "_requested": {
    "type": "version",
    "registry": true,
    "raw": "csso@3.3.1",
    "name": "csso",
    "escapedName": "csso",
    "rawSpec": "3.3.1",
    "saveSpec": null,
    "fetchSpec": "3.3.1"
  },
  "_requiredBy": [
    "/postcss-csso"
  ],
  "_resolved": "https://registry.npmjs.org/csso/-/csso-3.3.1.tgz",
  "_spec": "3.3.1",
  "_where": "/Users/intellisys/Documents/Recipe/clay-starter/app",
  "author": {
    "name": "Sergey Kryzhanovsky",
    "email": "skryzhanovsky@ya.ru",
    "url": "https://github.com/afelix"
  },
  "bugs": {
    "url": "https://github.com/css/csso/issues"
  },
  "dependencies": {
    "css-tree": "1.0.0-alpha25"
  },
  "description": "CSS minifier with structural optimisations",
  "devDependencies": {
    "browserify": "^13.0.0",
    "coveralls": "^2.11.6",
    "eslint": "^2.2.0",
    "istanbul": "^0.4.2",
    "jscs": "~2.10.0",
    "mocha": "~2.4.2",
    "package-json-versionify": "^1.0.4",
    "source-map": "^0.5.6",
    "uglify-js": "^2.6.1"
  },
  "engines": {
    "node": ">=0.10.0"
  },
  "eslintConfig": {
    "env": {
      "node": true,
      "mocha": true,
      "es6": true
    },
    "rules": {
      "no-duplicate-case": 2,
      "no-undef": 2,
      "no-unused-vars": [
        2,
        {
          "vars": "all",
          "args": "after-used"
        }
      ]
    }
  },
  "files": [
    "dist/csso-browser.js",
    "lib",
    "HISTORY.md",
    "LICENSE",
    "README.md"
  ],
  "homepage": "https://github.com/css/csso",
  "keywords": [
    "css",
    "compress",
    "minifier",
    "minify",
    "optimise",
    "optimisation",
    "csstree"
  ],
  "license": "MIT",
  "main": "./lib/index",
  "maintainers": [
    {
      "name": "Roman Dvornov",
      "email": "rdvornov@gmail.com"
    }
  ],
  "name": "csso",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/css/csso.git"
  },
  "scripts": {
    "browserify": "browserify -t package-json-versionify --standalone csso lib/index.js | uglifyjs --compress --mangle -o dist/csso-browser.js",
    "codestyle": "jscs lib test && eslint lib test",
    "codestyle-and-test": "npm run codestyle && npm test",
    "coverage": "istanbul cover _mocha -- -R dot",
    "coveralls": "istanbul cover _mocha --report lcovonly -- -R dot && cat ./coverage/lcov.info | coveralls",
    "gh-pages": "git clone -b gh-pages https://github.com/css/csso.git .gh-pages && npm run browserify && cp dist/csso-browser.js .gh-pages/ && cd .gh-pages && git commit -am \"update\" && git push && cd .. && rm -rf .gh-pages",
    "hydrogen": "node --trace-hydrogen --trace-phase=Z --trace-deopt --code-comments --hydrogen-track-positions --redirect-code-traces --redirect-code-traces-to=code.asm --trace_hydrogen_file=code.cfg --print-opt-code bin/csso --stat -o /dev/null",
    "prepublish": "npm run browserify",
    "test": "mocha --reporter dot",
    "travis": "npm run codestyle-and-test && npm run coveralls"
  },
  "version": "3.3.1"
}
}, {}];
