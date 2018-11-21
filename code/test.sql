/*
La tienda "Vivo Nativo" implementó un nuevo sistema de 
registro de boletas, pero sus empleados no siempre lo están 
utilizando. El gerente necesita que a fin de mes se entregue
 un reporte de todos los números de boletas que no fueron 
 ingresados al sistema. Si suponemos que en Junio los 
 números de boletas parten en el 6521 y terminan en 7213. 
 Escribe un algoritmo en el lenguaje de su preferencia que 
 permita imprimir por pantalla los números de boletas que 
 no fueron ingresados en Junio. Se tiene la siguiente tabla: 
 Boleta(folio int(6), fecha date, monto int(12))
*/

-- get universe
SELECT * 
--get folio exists
SELECT b.folio FROM Boleta b 
WHERE b. date between '20180601' and '20180630'