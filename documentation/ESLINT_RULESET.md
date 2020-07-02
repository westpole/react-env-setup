# ESLint sets of coding style rules

This library holds configuration primarely in two files:

  - .eslintignore (it defines which file should not be included into the check list as library starts check from `src/scripts` folder)
  - .eslintrc (contains configuration and exceptions)

Sets of rules are based on `airbnb` and `airbnb/hooks` modules.

### Exceptions to the default configuration

1. Disable check for an imported module path. It allows `.jsx | .tsx` extention in the path string.
2. Ignore `max-len` rule for comments.