# stylelint-config-spaceninja

[![NPM version](http://img.shields.io/npm/v/stylelint-config-spaceninja.svg)](https://www.npmjs.org/package/stylelint-config-spaceninja) [![Build Status](https://travis-ci.org/spaceninja/stylelint-config-spaceninja.svg?branch=main)](https://travis-ci.org/spaceninja/stylelint-config-spaceninja) [![Renovate Status](https://badges.renovateapi.com/github/spaceninja/stylelint-config-spaceninja)](https://renovatebot.com/)

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

-   [stylelint-config-recommended](https://github.com/stylelint/stylelint-config-recommended): The recommended shareable config for stylelint

### Plugins

-   [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties): Disallow property values that are ignored due to another property value in the same rule.
-   [stylelint-order](https://github.com/hudochenkov/stylelint-order): A plugin pack of order related linting rules for stylelint.
-   [stylelint-scss](https://github.com/kristerkari/stylelint-scss): A collection of SCSS specific linting rules for stylelint

### Configured Lints

This is a list of the lints turned on in this configuration (beyond the ones that come from `stylelint-config-recommended`), and what they do.

#### At-rule

-   [`at-rule-empty-line-before`](https://github.com/stylelint/stylelint/blob/master/lib/rules/at-rule-empty-line-before/README.md): Require an empty line before at-rules. _disabled temporarily, pending [#2480](https://github.com/stylelint/stylelint/issues/2480)_
-   [`at-rule-no-unknown`](http://stylelint.io/user-guide/rules/at-rule-no-unknown/): Disallow unknown at-rules. _disabled in favor of the SCSS version_
-   [`scss/at-rule-no-unknown`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-rule-no-unknown/README.md): Disallow unknown at-rules. Should be used **instead** of stylelint's at-rule-no-unknown.
-   [`at-rule-no-vendor-prefix`](https://github.com/stylelint/stylelint/blob/master/lib/rules/at-rule-no-vendor-prefix/README.md): Disallow vendor prefixes for at-rules.

#### Block

-   [`block-closing-brace-newline-after`](https://github.com/stylelint/stylelint/blob/master/lib/rules/block-closing-brace-newline-after/README.md): Require a newline after the closing brace of blocks. _overriding recommended version to exclude `@if` and `@else` rules._

#### Color

-   [`color-hex-length`](https://github.com/stylelint/stylelint/blob/master/lib/rules/color-hex-length/README.md): Specify long notation for hex colors

#### Declaration

-   [`plugin/declaration-block-no-ignored-properties`](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties): Disallow property values that are ignored due to another property value in the same rule.
-   [`declaration-empty-line-before`](https://github.com/stylelint/stylelint/blob/master/lib/rules/declaration-empty-line-before/README.md): Disallow an empty line before declarations

#### Font Family

-   [`font-family-name-quotes`](https://github.com/stylelint/stylelint/blob/master/lib/rules/font-family-name-quotes/README.md): Use quotation marks around font family names where recommended by the spec.

#### Function

-   [`function-url-quotes`](https://github.com/stylelint/stylelint/blob/master/lib/rules/function-url-quotes/README.md): Require quotes for urls

#### General / Sheet

-   [`max-line-length`](https://github.com/stylelint/stylelint/blob/master/lib/rules/max-line-length/README.md): Limit line lengths to 100 characters (excluding comments)
-   [`no-descending-specificity`](https://github.com/stylelint/stylelint/blob/master/lib/rules/no-descending-specificity/README.md): Disallow selectors of lower specificity from coming after overriding selectors of higher specificity. _disabled temporarily, due to false positives, pending [#2489](https://github.com/stylelint/stylelint/issues/2489)_

#### Media Feature

-   [`media-feature-name-no-vendor-prefix`](https://github.com/stylelint/stylelint/blob/master/lib/rules/media-feature-name-no-vendor-prefix/README.md): Disallow vendor prefixes for media feature names

#### Property

-   [`property-no-vendor-prefix`](https://github.com/stylelint/stylelint/blob/master/lib/rules/property-no-vendor-prefix/README.md): Disallow vendor prefixes for properties.
-   [`order/properties-alphabetical-order`](https://github.com/hudochenkov/stylelint-order/blob/master/rules/properties-alphabetical-order/README.md): Specify the alphabetical order of properties within declaration blocks

#### Rule

-   [`rule-empty-line-before`](https://github.com/stylelint/stylelint/blob/master/lib/rules/rule-empty-line-before/README.md): Require an empty line before multi-line rules

#### Selector

-   [`selector-attribute-quotes`](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-attribute-quotes/README.md): Require quotes for attribute values.
-   [`selector-max-id`](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-max-id/README.md): Don't allow ID selectors
-   [`selector-no-qualifying-type`](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-no-qualifying-type/README.md): Disallow qualifying a selector by type (excluding attribute selectors)
-   [`selector-no-vendor-prefix`](https://github.com/stylelint/stylelint/blob/master/lib/rules/selector-no-vendor-prefix/README.md): Disallow vendor prefixes for selectors.

#### String

-   [`string-quotes`](https://github.com/stylelint/stylelint/blob/master/lib/rules/string-quotes/README.md): Specify double quotes around strings.

#### Time

-   [`time-min-milliseconds`](https://github.com/stylelint/stylelint/blob/master/lib/rules/time-min-milliseconds/README.md): Specify a minimum time value of 100 milliseconds

#### Value

-   [`value-keyword-case`](https://github.com/stylelint/stylelint/blob/master/lib/rules/value-keyword-case/README.md): Specify lowercase for keywords values.
-   [`value-no-vendor-prefix`](https://github.com/stylelint/stylelint/blob/master/lib/rules/value-no-vendor-prefix/README.md): Disallow vendor prefixes for values.

#### SCSS

##### @else, @if

-   [`scss/at-else-closing-brace-newline-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-closing-brace-newline-after/README.md): Require a newline after the closing brace of `@else` statements if they're the last in the chain.
-   [`scss/at-else-closing-brace-space-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-closing-brace-space-after/README.md): Require a single space after the closing brace of `@else` statements if they're not the last in the chain.
-   [`scss/at-else-empty-line-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-else-empty-line-before/README.md): Disallow empty lines before `@else` statements.
-   [`scss/at-if-closing-brace-newline-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-if-closing-brace-newline-after/README.md): Require a newline after the closing brace of `@if` statements if they're the last in the chain.
-   [`scss/at-if-closing-brace-space-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-if-closing-brace-space-after/README.md): Require a single space after the closing brace of `@if` statements if they're not the last in the chain.

##### @function

-   [`scss/at-function-parentheses-space-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-function-parentheses-space-before/README.md): Disallow a space before `@function` parentheses.

##### @mixin

-   [`scss/at-mixin-argumentless-call-parentheses`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-argumentless-call-parentheses/README.md): Require parentheses in argumentless `@mixin` calls.
-   [`scss/at-mixin-parentheses-space-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/at-mixin-parentheses-space-before/README.md): Disallow a space before `@mixin` parentheses.

##### $variable

-   [`scss/dollar-variable-colon-newline-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-newline-after/README.md): Require a newline after the colon in multi-line `$variable` declarations.
-   [`scss/dollar-variable-colon-space-after`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-after/README.md): Require a single space after the colon in single-line `$variable` declarations.
-   [`scss/dollar-variable-colon-space-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-colon-space-before/README.md): Disallow whitespace before the colon in `$variable` declarations.
-   [`scss/dollar-variable-empty-line-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-empty-line-before/README.md): Require a single empty line before groups of `$variable` declarations except after comments
-   [`scss/dollar-variable-no-missing-interpolation`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/dollar-variable-no-missing-interpolation/README.md): Disallow Sass variables that are used without interpolation with CSS features that use custom identifiers.

##### // comment

-   [`scss/double-slash-comment-empty-line-before`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/double-slash-comment-empty-line-before/README.md): Require an empty line before most `//`-comments
-   [`scss/double-slash-comment-whitespace-inside`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/double-slash-comment-whitespace-inside/README.md): Require whitespace after the `//` in `//`-comments

##### Other

-   [`scss/declaration-nested-properties`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/declaration-nested-properties/README.md): Disallow properties with `-` in their names to be in a form of a nested group.
-   [`scss/selector-no-redundant-nesting-selector`](https://github.com/kristerkari/stylelint-scss/blob/master/src/rules/selector-no-redundant-nesting-selector/README.md): Disallow redundant nesting selectors (`&`).

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
