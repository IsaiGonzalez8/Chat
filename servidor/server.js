const net = require('net')

const server = net.createServer()
const users=[]

server.on('connection', (socket)=>{
    users.push(socket)
    socket.on('data', (data)=>{
        console.log('\nMensaje recibido desde el cliente: ' + '\n' +data)
        users.map((usr)=>{
            usr.write(data.toString().trim())
        })
    })

    socket.on('close',()=>{
        console.log('Comunicación Finalizada')
    })

    socket.on('error',(err)=>{
        console.log(err.message)
    })  
})

server.listen(4000,()=>{
    console.log('Servidor Escuchando', server.address().port)
})