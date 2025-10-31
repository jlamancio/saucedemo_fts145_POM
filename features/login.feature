Feature: Login site SauceDemo

  Scenario Outline: Login com sucesso
    Given que estou na pagina de login
    When preencho o <usuario> e a <senha>    
    And acesso a opcao Login
    Then vou para a pagina <ur>l e vejo o titulo: <titulo_secao>

    Examples:
      | usuario       | senha        | url       | titulo_secao |
      | standard_user | secret_sauce | inventory | Product      |
      | visual_user   | secret_sauce | inventory | Product      |




