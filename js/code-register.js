window.addEventListener("load", function() 
{
    let inputs = document.querySelectorAll(".form-input-group > input")

    inputs.forEach(input => 
    {
        let label = input.nextElementSibling;
        input.addEventListener("focus", input_Focus);
        input.addEventListener("blur", input_Blur);

        if(input.value == "")
            label.classList.remove("top");
        else
            label.classList.add("top");
    });
});

function computeResult(edad, sexo)
{
    let min = sexo == "F" ? 220 : 210;
    let puls = (min - edad) / 10;
    return puls;
}

function showResult()
{
    let inputEdad = document.querySelector("#inputEdad");
    let inputSexo = document.querySelector("input[name=inputSexo]:checked");
    let result_error = document.querySelector("#result_error");
    let result_label = document.querySelector("#result_label");
    let inputPulso = document.querySelector("#inputPulso");

    if(inputEdad.checkValidity() && inputSexo.checkValidity())
    {
        inputPulso.value = computeResult(inputEdad.value, inputSexo.value);
        result_label.innerHTML = inputPulso.value  + " puls / 10 seg";
        result_label.classList.add("show");
        result_error.classList.remove("show");
    }
    else
    {
        result_error.classList.add("show");
        result_label.classList.remove("show");
    }
}

function input_Focus()
{
    let label = this.nextElementSibling;
    label.classList.add("top");
}

function input_Blur()
{
    let input = this;
    let label = input.nextElementSibling;

    if(input.value == "")
        label.classList.remove("top");
}

function submitData(e)
{
    let inputId = document.querySelector("#inputId");
    let inputNombres = document.querySelector("#inputNombres");
    let inputApellidos = document.querySelector("#inputApellidos");
    let inputEdad = document.querySelector("#inputEdad");
    let inputPulso = document.querySelector("#inputPulso");
    let inputSexo = document.querySelector("input[name=inputSexo]:checked");

    if(!inputPulso.value)
        inputPulso.value = computeResult(inputEdad.value, inputSexo.value);


    let persistence =  JSON.parse(localStorage.getItem("dataPuls")) || [];
    let newPuls = {
        identificacion: inputId.value,
        nombres: inputNombres.value,
        apellidos: inputApellidos.value,
        edad: inputEdad.value,
        sexo: inputSexo.value,
        pulsacion: inputPulso.value
    }
    
    persistence.push(newPuls);
    localStorage.setItem("dataPuls", JSON.stringify(persistence));
}