#chatgpt

**Regra 1:** Sempre declarar os inputs e output ao ChatGPT.
**Regra 2:** O ChatGPT tem limitações de entregas de caracteres.

## Solicitando unidades com conjuntos de regras
```
crie uma função de retorne somente os números de um conteúdo alfanumérico

{REGRAS}
>Linguagem: javascript
>input:code:string
>output:numberId:number
>aplique boas práticas de Clean Code
```

## Crie funções explicitas
```
implemente a lógica da função abaixo em javascript
//passa coordenadas de latitude e longitude e retorna código de cep do local
function getZipCode(latitude:number, longitude:number) {

}
```

```javascript

//RESPOSTA DO CHATGPT

async function getZipCode(latitude, longitude) {
    const apiKey = 'sua_api_key'; // Substitua 'sua_api_key' pela sua chave de API do Google Maps

    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'OK') {
            const addressComponents = data.results[0].address_components;
            for (const component of addressComponents) {
                if (component.types.includes('postal_code')) {
                    return component.short_name;
                }
            }
            return "CEP não encontrado";
        } else {
            throw new Error(data.status);
        }
    } catch (error) {
        console.error('Erro ao obter o CEP:', error);
        return "Erro ao obter o CEP";
    }
}

// Exemplo de uso:
const latitude = -23.55052; // Exemplo de latitude
const longitude = -46.633308; // Exemplo de longitude

getZipCode(latitude, longitude)
    .then(zipCode => console.log('CEP:', zipCode))
    .catch(error => console.error(error));
```

## Testes unitários
```
implemente testes unitários para a função abaixo

<funcao>

{REGRAS}
> Linguagem: Javascript
> Utilize a biblioteca:JEST
> Crie pelos menos três testes unitários

```

## Refatorando
```
refatore o código abaixo aplicando os conceitos de clean code e single responsability

<codigo>

{REGRAS}
> Linguagem: Javascript
> Crie um código que seja testável
> Utilize ao menos um teste utilizando JEST
```