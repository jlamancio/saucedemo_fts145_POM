Feature: Login site SauceDemo

  Scenario Outline: Login com sucesso
    Given que estou na pagina de login
    When preencho o "<usuario>" e a "<senha>"
    When acesso a opcao Login
    Then vou para a pagina: "<url>" e vejo o titulo: "<titulo_secao>"

    Examples:
      | usuario       | senha        | url       | titulo_secao |
      | standard_user | secret_sauce | inventory | Products     |
      | visual_user   | secret_sauce | inventory | Products     |
