package br.com.projuris.profeed.service;

import br.com.projuris.profeed.entity.Feedback;
import br.com.projuris.profeed.repository.FeedbackRepository;
import br.com.projuris.profeed.repository.UserRepository;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;


@RunWith(SpringRunner.class)
@SpringBootTest
public class FeedbackServiceTest {

    @Autowired
    private FeedbackService feedbackService;

    @Mock
    private FeedbackRepository feedbackRepository;

    @Mock
    private UserRepository userRepository;

    @Before
    public void initUseService() {
        feedbackService = new FeedbackService(feedbackRepository, userRepository);
    }

    @Test
    public void saveNewFeedback() {
        Feedback feedback = new Feedback();
        feedback.setText("TESTE FEEDBACK");
        feedback.setUserToId(2L);
        feedback.setUserFromId(1L);
        when(feedbackRepository.save(any(Feedback.class))).thenReturn(createFeedbackMock());
        Feedback feedbackSaved = feedbackService.save(feedback);
        assertThat(feedbackSaved.getId()).isNotNull();
    }

    private Feedback createFeedbackMock() {
        Feedback feedback = new Feedback();
        feedback.setText("TESTE FEEDBACK");
        feedback.setUserToId(2L);
        feedback.setUserFromId(1L);
        feedback.setId(44L);
        return feedback;
    }

}
