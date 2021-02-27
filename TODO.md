- create repository in github named users-api
  - leave it to be public
  - check Add a README
  - check Add .gitignore (Node)
  - check Choose a license (MIT)
  - clone the repository
- create src folder
  - create index.js file
- create npm project
  - initialize it with "npm init" command
  - install eslint package as dev dependency with "npm install eslint --save-dev" command
    - create .eslintrc configuration file at root level
    - add following configuration
      ```
      {
        "extends": "eslint:recommended",
        "env": {
          "node": true,
          "es6": true,
          "commonjs": true
        },
        "rules": {
          "semi": "off"
        }
      }     
      ```
  - install prettier package as dev dependency with "npm install --save-dev prettier" command
    - create .prettierrc configuration file at root level
    - add followng configuration
      ```
      {
        "arrowParens": "always",
        "bracketSpacing": true,
        "printWidth": 140,
        "semi": false,
        "singleQuote": true,
        "trailingComma": "es5"
      }
      ```
  - install nodemon package as dev dependency with "npm install --save-dev nodemon" command
  - install morgan package as dev dependency with "npm install --save-dev morgan" command
  - install express package as dependency with "npm install express --save" command
  - add following scripts in the package.json
    ```
    "start": "node ./src/index.js",
    "start:dev": "nodemon ./src/index.js"
    ```

  - write your first express server
    ```js
    const express = require('express')
    const morgan = require('morgan')
    
    const app = express()
    const port = 3000
    
    app.use(morgan('dev'))
    
    app.get('/message', (req, res) => {
      res.json({ message: 'Hello' })
    })
    
    app.listen(port, () => console.log(`Server listening at port ${port}...`))
    ```