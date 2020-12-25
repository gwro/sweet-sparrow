module.exports = {
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ],
  "presets": [
    "@babel/preset-env",
    "@babel/preset-typescript",
    [
      "babel-preset-gatsby",
      {
        "targets": {
          "browsers": [">0.25%", "not dead"]
        }
      }
    ],
    [
      "@babel/preset-react", {
        "runtime": "automatic"
      }
    ]
  ]
}
