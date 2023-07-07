//Imports
const App = require("../../models").app;

/****************************************/
/* FUNC: Inicializa normalmente el panel de configuración y la base de datos por defecto
*/
/**************************************/
async function checkDatabase() {
    try {
        console.log("Checking for App instance");
        let appInstance = await App.findOne();
        console.log(appInstance);
    } catch (err) {
        console.error("Seeder: checkDatabase")
        console.error(err);
    }
}

//Exportaciones 
module.exports = {
    checkDatabase
}
