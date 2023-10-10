# Freela

em construção...

Projeto simples onde as pessoas podem enviar por formulário um e-mail de orçamento, além disso a api do whatsapp também foi usada permitindo assim que seja possível mandar mensagens diretamente no whatsapp.

## pc
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/bylucaspaiva/mds/assets/58491622/6554495b-f351-4ed0-aff4-74246a9c8122">
    </td>
    <td align="center">
      <img src="https://github.com/bylucaspaiva/mds/assets/58491622/0f0366c7-1155-4a97-91aa-df28bd724f73">
    </td>
    <td align="center">
      <img src="https://github.com/bylucaspaiva/mds/assets/58491622/24fb562a-552f-42c6-9964-291ba230422a">
    </td>
  </tr>
</table>

## mobile
<table>
  <tr>
    <td align="center">
      <img src="https://github.com/bylucaspaiva/mds/assets/58491622/44ef985c-c209-44e9-87e6-4468903dd94b">
    </td>
    <td align="center">
      <img src="https://github.com/bylucaspaiva/mds/assets/58491622/7e3584ee-e2ac-4549-bec2-29569fdc3a7e">
    </td>
    <td align="center">
      <img src="https://github.com/bylucaspaiva/mds/assets/58491622/f7a5c959-5d8d-400b-831c-be394f6b3fc7">
    </td>
  </tr>
</table>

Para enviar emails, nos campos abaixo onde houver <> é necessário adicionar as credencias SMTP da amazon
```
{
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*",
  "MailSettings": {
    "Host": "email-smtp.us-east-2.amazonaws.com",
    "Port": 587,
    "DisplayName": "<>",
    "Mail": "<>",
    "Username": "<>",
    "Password": "<>"
  },
  "AWS": {
    "Profile": "default",
    "Region": "us-east-2"
  }
}
```
