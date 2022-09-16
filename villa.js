var vp = document.getElementById("VillaPlatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverLobo);

var xLobo = 150;
var yLobo = 150;

var xVaca = new Array();
var yVaca = new Array();

var xCerdo = new Array();
var yCerdo = new Array();

var xPollo = new Array();
var yPollo = new Array();

function moverLobo(evento)
{
    console.log(evento);
    var movimiento = 20;
    var teclas = {
        UP: 38,
        DOWN: 40,
        RIGHT: 39,
        LEFT: 37
    };
    switch(evento.keyCode)
    {
        case teclas.LEFT:
            xLobo = xLobo - movimiento;
            dibujar(xLobo, yLobo);
            break;
        case teclas.RIGHT:
            xLobo = xLobo + movimiento;
            dibujar(xLobo, yLobo);
            break;
        case teclas.UP:
            yLobo = yLobo - movimiento;
            dibujar(xLobo, yLobo);
            break;
        case teclas.DOWN:
            yLobo = yLobo + movimiento;
            dibujar(xLobo, yLobo);
            break;
        default:
            console.log("otra tecla btw");
            break;
        }            
    }

var fondo = {
    url: "tile.png",
    cargaOk: false
}
var vaca = {
    url:"vaca.png",
    cargaOk: false
};
var cantidadVacas = aleatorio(1,15);

var cerdo = {
    url: "cerdo.png",
    cargaOk: false
}
var cantidadCerdos= aleatorio(1,10);

var pollo = {
    url: "pollo.png",
    cargaOk: false
}
var cantidadPollos = aleatorio(1,10);

var lobo = {
    url: "lobo.png",
    cargaOk: false
}
var cantidadLobo = 1;

var cantidad = aleatorio(10, 40);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

lobo.imagen = new Image();
lobo.imagen.src = lobo.url;
lobo.imagen.addEventListener("load", cargarLobo);


function cargarFondo()
{
    fondo.cargaOk = true
    dibujar();
}
function cargarVacas()
{
    vaca.cargaOk = true
    mantenerPosicion();
}
function cargarCerdos()
{
    cerdo.cargaOk = true
    mantenerPosicion();
}
function cargarPollos()
{
    pollo.cargaOk = true
    mantenerPosicion();
}
function cargarLobo()
{
    lobo.cargaOk = true
    dibujar();
}

function mantenerPosicion()
{
    if(vaca.cargaOk)
    {
        for(var i=0; i < cantidadVacas; i++)
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            x = x * 60;
            y = y * 60;
            xVaca[i] = x;
            yVaca[i] = y;
        }
    }
    if(cerdo.cargaOk)
    {
        for(var c=0; c < cantidadCerdos; c++)
        {
            var x = aleatorio(0, 10);
            var y = aleatorio(0, 10);
            x = x * 42;
            y = y * 42;
            xCerdo[i] = x;
            yCerdo[i] = y;
        } 
    }
    if(pollo.cargaOk)
    {
        for(var p=0; p < cantidadPollos; p++)
        {
            var x = aleatorio(0, 15);
            var y = aleatorio(0, 15);
            x = x * 28;
            y = y * 28;
            xPollo[i] = x;
            yPollo[i] = y;
        } 
    }
}
function dibujar()
{
    if(fondo.cargaOk)
    {
        papel.drawImage(fondo.imagen, 0, 0);     
    }
    if(vaca.cargaOk)
    {
        for(var i=0; i<10; i++)
        {
            papel.drawImage(vaca.imagen, xVaca[i], yVaca[i]);
        }    
    }
    if(cerdo.cargaOk)
    {
        for(var i=0; i<10; i++)
        {
        papel.drawImage(cerdo.imagen, xCerdo[i], yCerdo[i]);
        }
    }
    if(pollo.cargaOk)
    {
        for(var i=0; i<10; i++)
        {
        papel.drawImage(pollo.imagen, xPollo[i], yPollo[i]);
        }
    }   
    if(lobo.cargaOk)
    {
        papel.drawImage(lobo.imagen, xLobo, yLobo)
    }
}

function aleatorio(min, maxi)
{
var resultado;
resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
return resultado;
}

