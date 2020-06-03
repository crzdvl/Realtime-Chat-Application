module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 11,
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "settings": {
      "react": {
        "createClass": "createReactClass", 
        "pragma": "React",  
        "version": "detect", 
        "flowVersion": "0.53" 
      },
      "propWrapperFunctions": [
          "forbidExtraProps",
          {"property": "freeze", "object": "Object"},
          {"property": "myFavoriteWrapper"}
      ],
      "linkComponents": [
        "Hyperlink",
        {"name": "Link", "linkAttribute": "to"}
      ]
  },
  "rules": {
      "indent": [
          "error",
          4
      ],
      "linebreak-style": [
          "error",
          "unix"
      ],
      "quotes": [
          "error",
          "single"
      ],
      "semi": [
          "error",
          "always"
      ]
  }
};
