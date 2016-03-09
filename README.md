# node-version-is

Checks if node version matches the version defined in package.json (or parameter)

## Installation

```
npm install version-is
```

## Usage

- version is defined using semver syntax (the one that you use in `package.json`)
- It will throw error if node's version is not satisfied 

### Via package.json

**package.json**

```
engines: {
    "node": "~5.5"
}
```

**index.js** (your entry point)

```
require('version-is')()
```

### Via parameter

**index.js**

```
require('version-is')('~5.5')
```



