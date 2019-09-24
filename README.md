##Ejercicio de evaluación - Módulo 3

El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que
podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo.

Vamos de definir las distintas partes del ejercicio:

###1. Listado de personajes
En primer lugar, vamos a realizar una web con el listado de personajes de Rick and Morty. Para eso, vamos a
utilizar el servicio de https://rickandmortyapi.com/documentation/#get-all-characters que nos devuelve
información sobre los primeros 20 personajes de la serie. Sobre cada uno, vamos a pintar al menos:
- foto
- nombre
- especie
Si este servicio no funcionase tenemos una url de backup: https://raw.githubusercontent.com/Adalab/rick-y-
morty/master/data/rick-y-morty.json
Para esta primera parte del ejercicio es suficiente pintar la información sin maquetar.

###2. Filtrado de personajes
Ahora que ya tenemos el listado de personajes en pantalla, la segunda parte consiste en poder buscarlos por
nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la
interfaz solo los personajes cuyo nombre contiene las letras escritas. En el pantallazo de arriba, al escribir 'Ric'
aparecen personajes cuyo nombre completo contiene esas letras en ese orden.

###3. Componentes del listado de personajes
El listado debe tener los siguientes componentes como mínimo:
Componente para los filtros
Componente para el listado
Componente para la tarjeta de cada personaje del listado
Componente para el detalle de cada personaje

###4. Detalle de personajes
Vamos a implementar una nueva funcionalidad: al hacer clic sobre la tarjeta de un personaje, su información
aparecerá a pantalla completa. Para hacer esto usaremos rutas y React router. En la pantalla de detalle
aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que
aparece y si está vivo o muerto.

###5. BONUS: Mejoras visuales
Para terminar, podéis realizar algunas mejoras visuales del ejercicio. Por ejemplo:
mostrar la especie y si un personajes está muerto con un icono
usar algún sistema de grid para pintar el listado de personajes
que funcione bien el responsive en dispositivos pequeños

###6. BONUS: URL compartible
Como ejercicio extra os proponemos que la URL del detalle de personaje sea compartible, es decir, que si
visitamos esa URL directamente en el navegador se vea el detalle del personaje.