import CircularLinkedList from "./CircularLinkedList.js";
import BusStation from "./BusStation.js";

var inventory = new CircularLinkedList(new Array(20));
var tagArticle = document.querySelector('article');

//Button Add
document.querySelector('#btnAdd').addEventListener('click', () => {
    let name = document.querySelector('#name').value;
    let minutes = Number(document.querySelector('#minutes').value);
    let position = Number(document.querySelector('#position').value);

    if (inventory.add(new BusStation(name, minutes), position))
        alert('Estación agregada correctamente');
    else
        alert('El nombre ya está inserto o la posición no es válida, por favor intente de nuevo');
});
//Button query
document.querySelector('#btnQuery').addEventListener('click', () => {
    let tagDiv = document.querySelector('#BusStationFound');
    tagDiv.innerHTML = "";
    let name = document.querySelector('#queryByName').value;
    let objReturned = inventory.query(name);

    if (objReturned != null)
        tagDiv.innerHTML = objReturned.toString();
    else
        alert('No se ha podido encontrar la estación, por favor pruebe con otro nombre');
});
//Button delete
document.querySelector('#btnDelete').addEventListener('click', () => {
    let name = document.querySelector('#deleteByName').value;
    if (inventory.delete(name))
        alert('Estación eliminada correctamente');
    else
        alert('Estación no encontrado');
});
//Button create report
document.querySelector('#btnCreateRoute').addEventListener('click', () => {
    let initialStation = document.querySelector('#initialBusStation').value;
    let startHour = document.querySelector('#startTime').value;
    let endHour = document.querySelector('#endTime').value;

    if (initialStation != '' && startHour != 0 && endHour != 0) {
        tagArticle.innerHTML = inventory.createRoute(initialStation, startHour, endHour);
    } else
        alert('Rellene los campos para continuar');
});