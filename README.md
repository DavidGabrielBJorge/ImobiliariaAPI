
# API Imobiliária

Esse projeto é uma API simples para imobiliária, possuindo 3 tabelas sendo elas: pessoa, endereço e imóvel. Foi usado o banco MongoDB para armazenar os dados e para fazer as requisições é necessário utilizar uma ferramenta API Client, como o Postman por exemplo. 

## Tecnologias utilizadas:
<div>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="40" height="40" />
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" width="40" height="40"/>
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" width="40" height="40"/>
          
          
          
</div>

## Documentação da API

### Tabela de endereços 

| Coluna   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `String` | **PK**. Chave auto incremento|
| `cidade` | `String` | Deve ser preenchido|
| `bairro` | `String` | Deve ser preenchido|
| `rua` | `String` | Deve ser preenchido|


#### Retorna todos os endereços
```http
  GET http://localhost:4000/enderecos/
```
#### Retorna um endereço específico
```http
  GET http://localhost:4000/imoveis/id
```

#### Criar endereço 
```http
  POST http://localhost:4000/imoveis/
```

#### Alterar endereço 
```http
  PUT http://localhost:4000/imoveis/id
```
#### Deletar endereço 
```http
  DELETE http://localhost:4000/imoveis/id
```
### Tabela de pessoas

| Coluna   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `String` | **PK**. Chave auto incremento|
| `nome` | `String` | Deve ser preenchido|
| `cpf` | `Number` | Deve ser preenchido|
| `idade` | `Number` | Deve ser preenchido|


#### Retorna todas as pessoas
```http
  GET http://localhost:4000/pessoas/
```
#### Retorna uma pessoa específica
```http
  GET http://localhost:4000/pessoas/id
```

#### Criar pessoa
```http
  POST http://localhost:4000/pessoas/
```

#### Alterar pessoa
```http
  PUT http://localhost:4000/pessoas/id
```
#### Deletar pessoa
```http
  DELETE http://localhost:4000/pessoas/id
```

### Tabela de imóveis

| Coluna   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `String` | **PK**. Chave auto incremento|
| `valor` | `Number` | Deve ser preenchido|
| `endereco` | `ObjectId` | **FK** da tabela endereço|
| `pessoa` | `ObjectId` | **FK** da tabela pessoa|
| `acao` | `String` | Deve ser preenchido|


#### Retorna todos os imóveis
```http
  GET http://localhost:4000/imoveis/
```
#### Retorna um imóvel específico
```http
  GET http://localhost:4000/imoveis/id
```

#### Criar imóvel
```http
  POST http://localhost:4000/imoveis/
```

#### Alterar imóvel
```http
  PUT http://localhost:4000/imoveis/id
```
#### Deletar imóvel
```http
  DELETE http://localhost:4000/imoveis/id
```


## Objetos JSON

- Endereco
`{
        "cidade": "São Paulo",
        "bairro": "centro",
        "rua": "Rua da Matina"
    }`
- Pessoa
`{
        "nome": "Maria Clara",
        "cpf": 84315121053,
        "idade": 32
    }`
- Imóvel
`{
    "valor": 24000,
    "endereco": "Rua das flores",
    "pessoa": "Clara",
    "acao": "Vender"
    }`

## Observações

Primeiramente deve criar pessoa e endereço antes de imóvel.


