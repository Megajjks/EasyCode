const {app,BrowserWindow,Menu} = require('electron'); //app es la aplicación y BrowserWindow nos permite crear ventanas
const url = require('url'); //npm para trabajar con url
const path = require('path'); //npm para trabajar con direcciones de archivos

if(process.env.NODE_ENV !== 'production'){ //para que la app actualice los cambios en momenot de producción
    require('electron-reload')(__dirname,{ //un npm que actualiza los cambios de app sin tener que iniciar el servidor
        electron: path.join(__dirname, '../node_modules','.bin','electron')
    })
}

let mainWindow //ventana principal

app.on('ready',()=>{
    mainWindow = new BrowserWindow({
        width: 800, 
        height: 600,
        title:'EasyCode',
        titleBarStyle:'hiddenInset'
    }) //creamos una ventan
    
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/index.html'),
        protocol: 'file',
        slashes: true
    }))
    //Modificando nuestro Menu
    const mainMenu = Menu.buildFromTemplate(templateMenu)
    Menu.setApplicationMenu(mainMenu);
});

let newFileWindow;
function creatNewFile(){
    newFileWindow = new BrowserWindow({
        title:'Nueva hoja'
    });
    newFileWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/newFile.html'),
        protocol: 'file',
        slashes: true
    }))
    newFileWindow.on('closed',()=>{
        newFileWindow = null;
    });
}

let queesWindow;
function creatquees(){
    queesWindow = new BrowserWindow({
        title:'¿Easy Code es?'
    });
    queesWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/somos.html'),
        protocol: 'file',
        slashes: true
    }))
    queesWindow.on('closed',()=>{
        queesWindow = null;
    });
}

let masinfoWindow;
function masinf(){
    masinfoWindow = new BrowserWindow({
        title:'¿Easy Code es?'
    });
    masinfoWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'views/masinfo.html'),
        protocol: 'file',
        slashes: true
    }))
    masinfoWindow.on('closed',()=>{
        masinfoWindow = null;
    });
}

const templateMenu = [
    {
        label: 'Archivos',
        submenu:[
            {
                label:'Nuevo Archivo',
                accelerator:process.platform == 'darwin' ? 'command+N':'Ctrl+N',
                click(){
                    creatNewFile();
                }
            },
            {
                label:'Guardar',
                accelerator:process.platform == 'darwin' ? 'command+S':'Ctrl+S',
                click(){
                
                }
            },
            {
                label:'Salir',
                accelerator:process.platform == 'darwin' ? 'command+S':'Ctrl+S',
                click(){
                    app.quit();
                }
            }
        ]
    },
    {
        label:'Ejecutar',
        submenu:[
            {
                label:'Compilar',
                accelerator:'Ctrl+C',
                click(){

                }
            },
            {
                label:'Compilar y Ejecutar',
                accelerator:'Ctrl+E',
                click(){
                    
                }
            }
        ]
    },
    {
        label:'Ayuda',
        submenu:[
            {
                label:'¿EasyCode es?',
                click(){
                    creatquees(); 
                }
            },
            {
                label:'Sobre el autor',
                click(){
                    masinf();
                }
            }
        ]
    }

];
