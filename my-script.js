let operacion = "";

function add(valor) {
    operacion += valor;
    document.getElementById("pantalla").value = operacion;
}

function clean() {
    operacion = "";
    document.getElementById("pantalla").value = "";
}

function calculate() {
    try {
        let resultado = eval(operacion);
        document.getElementById("pantalla").value = resultado;
        operacion = resultado.toString();
    } catch (e) {
        document.getElementById("pantalla").value = "Error";
    }
}
