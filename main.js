var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});


typewriter.typeString('Desarrolladora Junior y artista multimedia')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Encontrando cruces en el arte y la tecnología')
    .pauseFor(2500)
    //caracteres que se borrarán
    .deleteChars(20)
    .typeString('<strong> live coding y código creativo </strong>')
    .pauseFor(2500)
    .start();