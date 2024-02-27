

export async function getterInfo() {
    let edad = 19;
    let queeres = "no se";
    if (edad >= 18) {
        queeres = "Eres menor de edad";
    } else {
        queeres = "Eres menor de edad";
    }
    return JSON.stringify({
        status: 200,
        queeres,
    });
}