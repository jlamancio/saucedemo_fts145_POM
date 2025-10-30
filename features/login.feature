# language: pt

Funcionalidade: Login site SauceDemo

  Esquema do Cenario: Login com sucesso
    Dado que estou na pagina de login
    Quando preencho o <usario> e a <senha>
    E acesso a opcao Login
    Entao vou para a pagina <url> e vejo <tituloSecao> Produtos

    Exemplos:
      | usuario       | senha        | url       | titulo_secao |
      | standard_user | secret_sauce | inventory | Product      |
      | visual_user   | secret_sauce | inventory | Product      |
