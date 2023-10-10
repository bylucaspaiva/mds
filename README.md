
# Freela

## nos campos abaixo onde houver <> é necessário adicionar as credencias SMTP da amazon
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