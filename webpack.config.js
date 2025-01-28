const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: "./app/index.js",
    module:{
        rules:[
            {
                test: /\.svg$/,
                use: 'svg-inline-loader'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
                //css loader :- it allow all the css property to import into your javascript file 
                //style loader :- it thats those css properties and inject them into style sheet of index file
            },
            {
                test: /\.(js)$/,
                use: "babel-loader"
                //this config will convert modern js into basic js
            }
        ]
    },
    output:{
        path:path.resolve(__dirname, "dist"),
        filename:"bundel.js"
        //it will create the single end file in particular dir
    },
    plugins: [new HtmlWebpackPlugin()],
    //it will generate an .html file + inject bundel,js(single final output file) into .html file
    mode: process.env.NODE_ENV === "producation" ? "producation" : "development"
    //ther are two mode
    //1. production :- it much more strict 
    //2. development := it much more forgiving 
}

//loader
//the job of loader is to work in the things while the things are getting loaded before the actual output is being displayed.(work befor final compilation)

//plugins
// the job of plugins is to handle the configs that are required after actual output is being displayed.(work are final compilation)

