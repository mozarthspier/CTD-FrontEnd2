


 export function dividir(num1, num2)
{
    if (num2 === 0)
    {
        throw new Error("Erro: Divisão por zero");
    }
    else {
        return num1 / num2
    }
    
}

