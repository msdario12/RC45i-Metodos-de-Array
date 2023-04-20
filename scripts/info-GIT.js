// Ahora estamos en la rama main, que seria la principal
// Pero no vamos a trabajar sobre esta rama, debido a que existen herramientas de despliegue
// continuo y se guian de los commits de la rama principal para hacer un deploy de esa version

/* Vamos a trabajar con una rama paralela en Git, va a ser una rama de desarrollo paralela en la cual vamos a trabajar e ir probando las nuevas funciones

Una vez que verifiquemos que lo hecho en esta rama parela esta okey podemos pasarlo a la rama principal para hacer el deploy y mandarlo a produccion

Entonces yo puedo tener varios commits en mi rama de trabajo y despues solamente 2 commits en la rama principal (el inicio y la combinacion de la rama paralela con la principal)

El primer nodo de la nueva rama tiene exactamente el mismo contenido que el commit de la rama principal anterior a la cual estoy por hacer la rama paralela

Ahora si estamos trabajando con un equipo, nosotros no vamos a estar trabajando sobre esta rama de "dev o development", sino que vamos a venir al ultimo commit de la rama "dev" y de ahi crear una rama paralela para nosotros o para la caracteristica o fix que se este modificando de la aplicacion. Por ejemplo la rama "feature/responsiveHeader", ahi vamos a ir haciendo los commits que consideremos necesarios

Una vez que consideremos que esa rama o historioa este finalizada la vamos a unir con la rama de "dev", donde vamos a llevar todo nuestro trabajo a esta rama*/

// ** Crear una rama nueva
// La hacemos con el comando
// ! git checkout -b "dev"
//  ** Checkout
/* Este comando nos permite movernos entre ramas, al poner el -b lo que hacemos es decirle que cree esta nueva rama */

// ! git commit --ammend
// Para modificar el ultimo commit y añadirles cambios, siempre tener los archivos en stage

// !git switch main
// Para cambiar de ramas

// ? Tener cuidado cuando creamos una rama nueva, de fijarse desde que ramas estamos creando esa nueva rama, tiene que se la mas nueva

// * Convenciones de nombres de ramas
// feature/feature
// bugfix/...
// hotfix/...
// release/...
// * Push a gitHub
// cuando hacemos el push usamos git push origin ".." donde va el nombre de la rama que queremos pushear al repositorio remoto. Entonces pusheamos ramas individuales, podemos elegir cual pushear.
// *Actualizar respecto a un repo remoto
// ! git fetch
// Para actualizar y ver que cambios tenemos respecto al repo
// ! git branch -a
// Para ver el listado de todas las ramas en el repo remoto
// ! git switch "rama"
// Al cambiar a esa rama de remoto la descargamos y la tenemos en local
