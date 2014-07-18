# jquery-textfill website (development branch)

This is the source code for developing the `jquery-textfill` homepage.

While the **master** branch contains the final version of the site, the **dev**
branch has all the files that will get processed to generate that.

## Workflow

1. Edit `.html` and `.sass` files until you're satisfied
2. Run `gulp serve` to preview them at `localhost:3000`
3. Copy everything under the `dist/` directory to the **master** branch.

## Overview

We use Google's [Web Starter Kit][web] as the base, along with a
[HTML5UP][html5up] template and some custom changes.

[web]:     http://developers.google.com/web/starter-kit
[html5up]: http://html5up.net/

## Dependencies

To edit this site, make sure you have:

- [Node.js](http://nodejs.org)
- [Ruby](https://www.ruby-lang.org/)
- [gulp.js](http://gulpjs.com)
- [Sass](http://sass-lang.com/install)

Also, before doing anything, run:

```sh
$ npm install
```

It will install all the dependencies locally, inside a `./node_modules`
directory.

## Gulp Commands

You can now use Gulp with the following commands to stay productive during development:

* Watch For Changes & Automatically Refresh Across Devices

```sh
$ gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network.

* Build & Optimize

```sh
$ gulp
```

Build and optimize the current project, ready for deployment. This includes linting as well as image, script, stylesheet and HTML optimization and minification.

* Performance Insights

```sh
$ gulp pagespeed
```

Runs the deployed (public) version of your site against the
[PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
API to help you stay on top of where you can improve.

## A Boilerplate-only Option

If you would prefer not to use any of our tooling, delete the following files
from the project:

- `package.json`
- `gulpfile.js`
- `.jshintrc`
- `.travis.yml`

You can now safely use the boilerplate with an alternative build-system or no
build-system at all if you choose.

## License

- Google Web Starter Kit

Apache 2.0
Copyright 2014 Google Inc

- This site

MIT

