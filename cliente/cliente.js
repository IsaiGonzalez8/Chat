const net = require('net')
const readline = require('readline-sync')

const options = {
    port: 4000,
    host: '127.0.0.1',
}

const cliente = net.createConnection(options)

cliente.on('connect',()=>{
    console.log('Conexión exitosa\n')
    console.log('Escribir Mensaje: ')
})

cliente.on('data', (data)=>{
    console.log('El sevidor dice:\n ' + data)
    console.log('Escribir Mensaje: ')
})

cliente.on('error',(err)=>{
    console.log(err.message)
})

cliente.on("ready",()=>{
    process.stdin.on('data',(data)=>{
        cliente.write(data.toString().trim())
    })
})