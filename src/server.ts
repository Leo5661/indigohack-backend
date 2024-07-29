import app from './index'

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('##############################################################\n')
    console.log(`          Indigo Hack 24 Server started on port: ${PORT} 🚀\n`)
    console.log('##############################################################\n')
})
