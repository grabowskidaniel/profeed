package br.com.projuris.profeed.service;

import static org.junit.Assert.assertEquals;

import br.com.projuris.profeed.entity.User;
import br.com.projuris.profeed.repository.UserRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Arrays;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EmailServiceTests {

    @Autowired
    private EmailService emailService;

    @Autowired
    private UserRepository userRepository;

    @Test
    public void sendWelcomelTest() {
        // given
        User user  = createMockMail();
        Boolean fail = false;

        // when
        try {
            emailService.wellcomeMail(user);
        } catch (Exception e) {
            fail = true;
        }

        // then
        assertEquals(fail, false);
    }

    @Test
    public void sendForgotPasswordTest() {
        // given
        User user  = createMockMail();
        Boolean fail = false;


        // when
        try {
            emailService.forgotPassword(user);
        } catch (Exception e) {
            fail = true;
        }

        // then
        assertEquals(fail, false);
    }

    @Test
    public void sendFeedBackReceivedTest() {
        // given
        User user  = createMockMail();
        Boolean fail = false;

        // when
        try {
            emailService.feedBackReceived(user);
        } catch (Exception e) {
            fail = true;
        }

        // then
        assertEquals(fail, false);
    }

    private User createMockMail(){
        return new User("testUser", "erickmob@gmail.com", true, "testuser", "testuser", Arrays.asList( "ROLE_USER"));
    }

}
