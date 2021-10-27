# stylelint-config-spaceninja

[![NPM version](http://img.shields.io/npm/v/stylelint-config-spaceninja.svg)](https://www.npmjs.org/package/stylelint-config-spaceninja) [![Build Status](https://github.com/spaceninja/stylelint-config-spaceninja/workflows/CI/badge.svg)](https://github.com/spaceninja/stylelint-config-spaceninja/actions?query=workflow%3ACI) [![Renovate](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com)

> A sharable stylelint config object that enforces [Space Ninja's CSS Standards](https://github.com/spaceninja/css-standards)

## Installation

Install [stylelint](https://stylelint.io/) and `stylelint-config-spaceninja`:

```
npm install stylelint stylelint-config-spaceninja --save-dev
```

## Usage

If you've installed `stylelint-config-spaceninja` locally within your project, just set your `stylelint` config to:

```js
{
  "extends": "stylelint-config-spaceninja"
}
```

You'll probably also want to add a script to your `package.json` file to make it easier to run Stylelint with this config:

```json
"scripts": {
  "lint:css": "stylelint '**/*.css'"
}
```

### Using with Prettier

It's common to [pair Stylelint with Prettier](https://prettier.io/docs/en/integrating-with-linters.html#stylelint). If you're going to use both, you'll want to add [`stylelint-config-prettier`](https://github.com/prettier/stylelint-config-prettier), which is a config that disables any Stylelint rules that conflict with Prettier.

```
npm install stylelint-config-prettier --save-dev
```

Then add it to your Stylelint config. It'll need to be the last item in the `extends` array so it can override other configs.

```js
{
  extends: ["stylelint-config-spaceninja", "stylelint-config-prettier"],
}
```

Then you can update your `package.json` script to run Prettier as well as Stylelint:

```json
"scripts": {
  "lint:css": "prettier --list-different '**/*.css' && stylelint '**/*.css'"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `at-rule-no-unknown` rule to use its `ignoreAtRules` option, change the `indentation` to tabs, turn off the `number-leading-zero` rule,and add the `unit-whitelist` rule:

```js
{
  "extends": "stylelint-config-spaceninja",
  "rules": {
    "at-rule-no-unknown": [ true, {
      "ignoreAtRules": [
        "extends",
        "ignores"
      ]
    }],
    "indentation": "tab",
    "number-leading-zero": null,
    "unit-whitelist": ["em", "rem", "s"]
  }
}
```

## Documentation

### Extends

- [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss): The standard shareable SCSS config for Stylelint.
- [stylelint-a11y/recommended](https://github.com/YozhikM/stylelint-a11y): A stylelint config to check the accessibility of your CSS.

### Plugins

- [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties): Disallow property values that are ignored due to another property value in the same rule.
- [stylelint-order](https://github.com/hudochenkov/stylelint-order): A plugin pack of order related linting rules for stylelint.

### Configured Lints

This is a list of the lints turned on in this configuration (beyond the ones that come from `stylelint-config-standard-scss`), and what they do.

#### Declaration

- [`declaration-empty-line-before`](https://github.com/stylelint/stylelint/blob/master/lib/rules/declaration-empty-line-before/README.md): Disallow an empty line before declarations.
- [`selector-class-pattern`](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-class-pattern/README.md): Expect class selector to be kebab-case. _Disabled to allow for BEM selectors._
- [`selector-max-id`](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-max-id/README.md): Don't allow ID selectors
- [`selector-no-qualifying-type`](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-no-qualifying-type/README.md): Disallow qualifying a selector by type (excluding attribute selectors)
- [`time-min-milliseconds`](https://github.com/stylelint/stylelint/blob/master/lib/rules/time-min-milliseconds/README.md): Specify a minimum time value of 100 milliseconds

- [`order/properties-alphabetical-order`](https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-alphabetical-order/README.md): Specify the alphabetical order of properties within declaration blocks

- [`plugin/declaration-block-no-ignored-properties`](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties): Disallow property values that are ignored due to another property value in the same rule.

- [`scss/declaration-nested-properties`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/declaration-nested-properties/README.md): Disallow SCSS nested property groups, such as `font { size: 16px; weight: 700; }`.
- [`scss/selector-no-redundant-nesting-selector`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md): Disallow redundant nesting selectors (`&`).

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
