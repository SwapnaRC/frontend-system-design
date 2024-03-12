const express = require("express")

const app = express()
const PORT = 3001;
// before going to access anything need to check the request is allowed or not i.e checked using Cross-secure-headers
app.use((req, res, next) => {
    res.setHeader( 'Content-Security-Policy',
    "default-src 'self' https://namastedev.com/;"+
    "script-src 'self' 'nonce-randomkey' 'unsafe-inline'   http://unsecure.com/abc.js; "
    )
    next();
})
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})