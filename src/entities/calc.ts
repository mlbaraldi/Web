function calcIMC(peso: number, altura:number) {
    return (peso / (altura * altura)).toFixed(2)
}

export default calcIMC