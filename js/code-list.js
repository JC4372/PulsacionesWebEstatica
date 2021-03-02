window.addEventListener("load", function() 
{
    let tableBody = document.querySelector("#table_puls_body");

    let persistence =  JSON.parse(localStorage.getItem("dataPuls")) || [];

    for(let p in persistence)
    {
        let row = document.createElement("tr");
        let id = document.createElement("td");
        let nombres = document.createElement("td");
        let apellidos = document.createElement("td");
        let edad = document.createElement("td");
        let sexo = document.createElement("td");
        let pulsacion = document.createElement("td");

        id.innerText = persistence[p].identificacion;
        nombres.innerText = persistence[p].nombres;
        apellidos.innerText = persistence[p].apellidos;
        edad.innerText = persistence[p].edad;
        sexo.innerText = persistence[p].sexo;
        pulsacion.innerText = persistence[p].pulsacion;

        row.appendChild(id);
        row.appendChild(nombres);
        row.appendChild(apellidos);
        row.appendChild(edad);
        row.appendChild(sexo);
        row.appendChild(pulsacion);

        tableBody.appendChild(row);
    }

    let label = document.querySelector("#lab_no_data");
    let table = document.querySelector("#table_puls");

    if(persistence.length > 0)
    {
        table.classList.add("show");
        label.innerText = "Número de pulsaciones : " + persistence.length;
    }
    else
    {
        label.innerText = "No hay pulsaciones registradas";
    }

});