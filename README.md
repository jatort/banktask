# INSTRUCCIONES TASK PERIÓDICO

## Instalar dependencias
```npm install```
## Correr la aplicación de task
```grunt```
## Descripción
El task hace un get request a http://localhost:3000/prices/randomise cada 3 horas, la aplicación que recibe el request se encargará de la lógica de actualización de saldos cuando lo reciba.
## Testeo
Debido a que 3 horas es mucho tiempo, si se quiere probar el funcionamiento rápidamente se puede cambiar el siguiente método en el archivo **routes/index.js**. El lenguaje usado para especifiar el tiempo es 'cron', el que tiene su propia documentación en la web.

### Cada 3 horas
```js
cron.schedule('0 0 */3 * * *', async () => {
  console.log('running a task three hours');
  axios
    .get('http://localhost:3000/prices/randomise')
    .catch(error => {
      console.error(error)
    });
});
```
### Cambiar a cada 1 segundo
```js
cron.schedule('* * * * * *', async () => {
  console.log('running a task three hours');
  axios
    .get('http://localhost:3000/prices/randomise')
    .catch(error => {
      console.error(error)
    });
});
```