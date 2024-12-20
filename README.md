[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/JCD84hr8)

# SunWise

## Descrição do Projeto

**SunWise** é um aplicativo desenvolvido para facilitar o gerenciamento de projetos e clientes no setor de energia solar. Ele auxilia empresas e instaladores no cálculo, acompanhamento e visualização de projetos relacionados à instalação de painéis solares, proporcionando uma experiência otimizada para os usuários.

### Vídeo Pitch
[Assista ao Vídeo Pitch do Projeto](https://youtu.be/I6wn4ZvZKCw?si=GEYDWwtUtWb8I4J4)

### Vídeo Mobile
[Veja o Funcionamento do App Mobile](https://youtu.be/S64XSzucHgQ)

---

## Requisições:

<br>

- **Página de Cadastro do Usuário:**

URL: http://localhost:8080/user 
method: 'POST' 

<br>
<br>

- Body enviado para o java:

{
  "email": "maria@gmail.com",
  "senha": "123456",
  "nomeEmpresa": "MarisBusiness"
}

<br>

- Body retornado do java:

{
  "id": 3,
  "email": "maria@gmail.com",
  "nomeEmpresa": "MarisBusiness"
}

<br>
<br>

- **Página de Login do Usuário:**

URL: http://localhost:8080/login 
method: 'POST' 

<br>
<br>

- Body enviado para o java:

{
  "email": "maria@gmail.com",
  "senha": "123456"
}

<br>

- Body retornado do java:

{
  "id": 3,
  "email": "maria@gmail.com",
  "senha": "123456",
  "nomeEmpresa": "MarisBusiness"
}

<br>
<br>

- **Página de Cliente:**

- Listagem de Cientes:
  
URL: http://localhost:8080/client/usuario/${user?.id} 
method: 'GET'

<br>
<br>

- Body enviado para o java:

NÃO É NECESSÁRIO

<br>

- Body retornado do java:

[
  {
    "id": 1,
    "usuarioId": 0,
    "nome": "Angelo",
    "email": "angelo@gmail.com",
    "endereco": "R. dos peixes",
    "telefone": "11977653222"
  },
  {
    "id": 52,
    "usuarioId": 3,
    "nome": "Nicolas Reis",
    "email": "nicolas@gmail.com",
    "endereco": "Rua dos Loucos, numero 0",
    "telefone": "11987632877"
  }
]

<br>
<br>

- Cadastro de Cientes:
  
URL: http://localhost:8080/client 
method: 'POST'

<br>
<br>

- Body enviado para o java:
  
{
  "usuarioId": 3,
  "nome": "Nicolas Reis",
  "email": "nicolas@gmail.com",
  "endereco": "Rua dos Loucos, numero 0",
  "telefone": "11987632877"
}

<br>

- Body retornado do java:

{
  "id": 52,
  "usuarioId": 3,
  "nome": "Nicolas Reis",
  "email": "nicolas@gmail.com",
  "endereco": "Rua dos Loucos, numero 0",
  "telefone": "11987632877"
}

<br>
<br>

- Exclusão de Cientes:
  
URL: http://localhost:8080/client/${clientId}
method: 'DELETE'

<br>
<br>

- Body enviado para o java:

NÃO É NECESSÁRIO

<br>

- Body retornado do java:
  204 NO CONTENT

<br>
<br>

- **Página de Projetos:**
  
- Cadastro de Projetos:
URL: http://localhost:8080/projects
method: 'POST'

<br>
<br>

- Body enviado para o java:

{
  "usuarioId": 3,
	"nomeProjeto": "Opa",
  "orcamento": 20000,
  "tarifaMensal": 500,
  "cliente": {
    "id": 52
  }
}

<br>


- Body retornado do java:

{
	"id": 1,
	"usuarioId": 3,
	"nomeProjeto": "Opa",
	"orcamento": 20000.0,
	"tarifaMensal": 500.0,
	"tempoRetornoInvestimentoMeses": 45,
	"economiaMensal": 450.0,
	"retornoEmAnos": "3 anos e 9 meses",
	"economia10Anos": 54000.0,
	"impactoAmbiental": "Em 10 anos, o cliente evitará a emissão de aproximadamente 48,00 toneladas de CO₂.",
	"co2Evitado10Anos": 48000.0,
	"cliente": {
		"id": 52,
		"usuarioId": null,
		"nome": null,
		"email": null,
		"endereco": null,
		"telefone": null
	}
}


- Listagem de Projetos:
  
URL: http://localhost:8080/projects/usuario/${user?.id} 
method: 'GET'

<br>
<br>

- Body enviado para o java:

NÃO É NECESSÁRIO

<br>

- Body retornado do java:

[
	{
		"id": 1,
		"usuarioId": 3,
		"nomeProjeto": "Opa",
		"orcamento": 20000.0,
		"tarifaMensal": 500.0,
		"tempoRetornoInvestimentoMeses": 45,
		"economiaMensal": 450.0,
		"retornoEmAnos": "3 anos e 9 meses",
		"economia10Anos": 54000.0,
		"impactoAmbiental": "Em 10 anos, o cliente evitará a emissão de aproximadamente 48,00 toneladas de CO₂.",
		"co2Evitado10Anos": 48000.0,
		"cliente": {
			"id": 52,
			"usuarioId": 3,
			"nome": "Nicolas Reis"
			"email": "nicolas@gmail.com",
			"endereco": "Rua dos Loucos, numero 0",
			"telefone": "11987632877"
		}
	}
]

---

## Integrantes

- **Alberto R. Peruchi**  
  RM: 99706  
  Turma: 2TDSR  

- **Angelo Augusto Pelluci**  
  RM: 98310  
  Turma: 2TDSR  

- **Gabrielle da Silva Stanguini**  
  RM: 98786  
  Turma: 2TDSA  

- **Maria Fernanda Ribeiro Melo**  
  RM: 98818  
  Turma: 2TDSA  

- **Nicolas Reis do Espírito Santo**  
  RM: 98819  
  Turma: 2TDSA  
