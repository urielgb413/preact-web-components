const { h, createElement } = require('preact')
const { Loader } = require('preact-web-components')
const express = require('express')
const render = require('preact-render-to-string')

const app = express()
const port = 3000

app.get('*', (req, res) => {
  const html = render(createElement(Loader))

  res.send(`<!DOCTYPE html>
  <html lang="en">

  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Preact web components</title>
  </head>

  <body>
      ${html}
  </body>

  </html>
  `)
})

app.listen(port, () => console.log(`http://localhost:${port}`))
