//using Amazon.SimpleEmail.Model;
//using Amazon.SimpleEmail;
//using Microsoft.Extensions.Options;

//namespace Api.Services;

//public interface IMailService
//{
//    Task SendEmailAsync(MailRequest mailRequest);
//}
//public class SESService : IMailService
//{
//    private readonly MailSettings _mailSettings;
//    private readonly IAmazonSimpleEmailService _mailService;
//    public SESService(IOptions<MailSettings> mailSettings,
//        IAmazonSimpleEmailService mailService)
//    {
//        _mailSettings = mailSettings.Value;
//        _mailService = mailService;
//    }
//    public async Task SendEmailAsync(MailRequest mailRequest)
//    {
//        var mailBody = new Body(new Content(mailRequest.Body));
//        var message = new Message(new Content(mailRequest.Subject), mailBody);
//        var destination = new Destination(new List<string> { mailRequest.ToEmail! });
//        var request = new SendEmailRequest(_mailSettings.Mail, destination, message);
//        await _mailService.SendEmailAsync(request);
//    }
//}

using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.Extensions.Options;
using MimeKit;

public interface IMailService
{
    Task SendEmailAsync(MailRequest mailRequest);
}

public class MailService : IMailService
{
    private readonly MailSettings _mailSettings;
    public MailService(IOptions<MailSettings> mailSettings)
    {
        _mailSettings = mailSettings.Value;
    }
    public async Task SendEmailAsync(MailRequest mailRequest)
    {
        var email = new MimeMessage();
        email.From.Add(new MailboxAddress(_mailSettings.DisplayName, _mailSettings.Mail));
        email.To.Add(MailboxAddress.Parse(mailRequest.ToEmail));
        email.Subject = mailRequest.Subject;
        var builder = new BodyBuilder();
        builder.HtmlBody = mailRequest.Body;
        email.Body = builder.ToMessageBody();
        using var smtp = new SmtpClient();
        smtp.Connect(_mailSettings.Host, _mailSettings.Port, SecureSocketOptions.StartTls);
        smtp.Authenticate(_mailSettings.Username, _mailSettings.Password);
        await smtp.SendAsync(email);
        smtp.Disconnect(true);
    }
}