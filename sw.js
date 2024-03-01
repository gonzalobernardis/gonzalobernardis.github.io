const APP_SHELL = [
    '/',
    'app.js',
    'styles.css',
    'index.html',
    'images/buzo-puma.jpeg',
    'images/buzo-topper.jpeg',
    'images/conjunto-puma.jpeg',
    'images/conjunto-topper.jpeg',
    'images/pantalones-nike.jpeg',
    'images/remera-puma.jpeg',
    'images/remera-topper.jpeg',
    'images/zapatilla-adidas.jpeg',
    'images/zapatilla-diadora.jpeg',
    'images/zapatilla-nike.jpeg',
    'images/zapatilla-nike2.jpeg',
    'images/zapatilla-sarkany.jpeg'
]


self.addEventListener('install', (event)=>{
    
    const cache = caches.open('v1').then( cache => {
        cache.addAll( APP_SHELL )
    })

    event.waitUntil( cache );
})

self.addEventListener('fetch', evento => {
    const respuestaCache = caches.match( evento.request).then( res => {
        if (res ) {
            return res;
        } else {
            return fetch(evento.request).then( respuesta => {
                return respuesta;
            })
        }
    })
    evento.respondWith( respuestaCache  )
})

self.addEventListener('install', ()=>{
    console.log('SW: Instalado.');
})

self.addEventListener('activate', ()=>{
    console.log('SW: Activado');
})

self.addEventListener('fetch', evento => {
    const request = evento.request;
    const url = request.url;
    console.log(url);
})