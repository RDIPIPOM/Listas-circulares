import CircularLinkedList from "./CircularLinkedList.js";
import BusStation from "./BusStation.js";

var inventory = new CircularLinkedList(new Array(20));
var tagArticle = document.querySelector('#Path');

//Button Add
document.querySelector('#btnAdd').addEventListener('click', () => {
    let name = document.querySelector('#name').value;
    let minutes = Number(document.querySelector('#minutes').value);
    let position = Number(document.querySelector('#position').value);

    if (inventory.add(new BusStation(name, minutes), position))
        alert('Producto agregado correctamente');
    else
        alert('Código no válido, por favor intente de nuevo');
});
//Button query
document.querySelector('#btnQuery').addEventListener('click', () => {
    let tagDiv = document.querySelector('#productFound');
    tagDiv.innerHTML = "";
    let code = Number(document.querySelector('#queryByCode').value);
    let objReturned = inventory.query(code);

    if (objReturned != -1)
        tagDiv.innerHTML = objReturned.toString();
    else
        alert('No se ha podido encontrar el producto, por favor pruebe con otro código');
});
//Button delete
document.querySelector('#btnDelete').addEventListener('click', () => {
    let code = Number(document.querySelector('#deleteByCode').value);
    if (inventory.delete(code))
        alert('Producto eliminado correctamente');
    else
        alert('Producto no encontrado');
});
//Button create report
document.querySelector('#btnCreateReport').addEventListener('click', () => {
    tagArticle.innerHTML = inventory.report();
});
//Button create reverse report
document.querySelector('#btnCreateReverseReport').addEventListener('click', () => {
    tagArticle.innerHTML = inventory.reverseReport();
});