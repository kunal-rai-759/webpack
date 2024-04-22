# webpack
It is a webpack tutorial repository integrated with with react.

# dependencies
- webpack
- webpack-cli

# entry file
- default: src/index.js

# default config file
- named as webpack.config.js on root

# Output file
    default 
        main.js will be emited.
    custom
        Anyname you will define in "output" property in config.

# script
- 
    default 
        "build": "webpack"
    
# custom config file
    for custom config file we need to mention the file name in build script
    script
        webpack --config filename.js

# webpack-dev-server
    config code
        devServer:{
            static:{
                directory: path.join(__dirname,"dist"),
            },
            compress:true,
            port:3001,
        }
    script:
        webpack-dev-server --config webpackCustomConfig.js --mode development --open
        --config webpackCustomConfig.js : it isfor custom config file
        --open : it is to open webapp in browser after starting server.
