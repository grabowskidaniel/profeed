package br.com.projuris.profeed.service;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EmailServiceTests {

    @Autowired
    private EmailService emailService;

    @Test
    public void sendMailTest() {
        // given
        String to = "erickmob@gmail.com";
        String subject = "Mail test";
        String text = "this is a email test";
        Boolean fail = false;

        // when
        try {
            emailService.sendSimpleMessage(to, subject, text);
        } catch (Exception e) {
            fail = true;
        }

        // then
        assertEquals(fail, false);
    }

}
