package br.com.projuris.profeed.service;


import br.com.projuris.profeed.entity.User;
import br.com.projuris.profeed.mail.EmailSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.text.MessageFormat;

@Service
public class EmailService {

    @Autowired
    private EmailSender emailSender;

    @Value("${profeed.aplication.name}")
    private String applicationName;

    public void wellcomeMail(User user){
        emailSender.sendSimpleMessage(user.getEmail(), applicationName.concat(" - Bem vindo!"), getWelcomeBody(user));
    }

    public void forgotPassword(User user){
        emailSender.sendSimpleMessage(user.getEmail(), applicationName.concat(" - Nova senha"), getForgotPasswordBody(user));
   }

    public void feedBackReceived(User user){
        emailSender.sendSimpleMessage(user.getEmail(), applicationName.concat(" - Hey! Você tem um novo feedback"), feedBackReceivedBody(user));
    }


    private String getWelcomeBody(User user){
        return MessageFormat.format("Bem vindo {0}! <br>" +
                "Seu usuário para login é: {1} <br>" +
                        "Sua senha é: {2}",
                new Object[]{user.getNome(), user.getUsername(), user.getPassword()});
    }

    private String getForgotPasswordBody(User user){
        return MessageFormat.format("Olá {0}! <br>" +
                        "Sua senha é: {1}",
                new Object[]{user.getNome(), user.getPassword()});
    }

    private String feedBackReceivedBody(User user){
        return MessageFormat.format("Boas novas {0}! <br>" +
                        "Você acaba de receber um novo feedback. <br>" +
                        "Acesse o {1}, para ver o que te enviaram.",
                new Object[]{user.getNome(), applicationName});
    }
}
