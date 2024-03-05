const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");


module.exports = {
    output: {
      uniqueName:"micro_app_2"
    },
    plugins: [
        new ModuleFederationPlugin({
         
          name: "micro_app_2",
          library: { type: "var", name: "micro_app_2" },
          filename: "remoteEntry.js",
          exposes: {
            './AppModule': './src/app/app.module.ts',
          }
        })
    ]
}
    