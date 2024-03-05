const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");


module.exports = {
    output: {
      uniqueName:"micro_app_1"
    },
    plugins: [
        new ModuleFederationPlugin({
         
          name: "micro_app_1",
          library: { type: "var", name: "micro_app_1" },
          filename: "remoteEntry.js",
          exposes: {
            './AppModule': './src/app/app.module.ts',
          }
        })
    ]
}
    