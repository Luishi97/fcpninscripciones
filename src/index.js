const app = require("./server")
const config = require("./config")

function main() {
  app.listen(config.PORT, () =>
    console.log(`listening at http://localhost:${config.PORT}`)
  )
}

main()
