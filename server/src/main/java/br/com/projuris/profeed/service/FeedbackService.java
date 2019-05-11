package br.com.projuris.profeed.service;

import br.com.projuris.profeed.dto.CountFeedbackDTO;
import br.com.projuris.profeed.entity.Feedback;
import br.com.projuris.profeed.entity.User;
import br.com.projuris.profeed.repository.FeedbackRepository;
import br.com.projuris.profeed.repository.UserRepository;
import br.com.projuris.profeed.util.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FeedbackService {

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private UserRepository userRepository;

    FeedbackService(FeedbackRepository feedbackRepository, UserRepository userRepository) {
        this.feedbackRepository = feedbackRepository;
        this.userRepository = userRepository;
    }

    public Feedback save(Feedback feedback) {
        userRepository.findById(feedback.getUserFromId()).ifPresent(userFrom -> {
            feedback.setUserFrom(userFrom);
        });
        userRepository.findById(feedback.getUserToId()).ifPresent(userTo -> {
            feedback.setUserTo(userTo);
        });
        return this.feedbackRepository.save(feedback);
    }

    public List<Feedback> findAllTo() {
        String username = SecurityUtils.getCurrentUserLogin().get();
        Optional<User> userTo = this.userRepository.findByUsername(username);
        if(userTo.isPresent()) {
            return this.feedbackRepository.findAllByUserTo(userTo.get());
        }
        return new ArrayList<>();
    }

    public List<Feedback> findAllFrom() {
        String username = SecurityUtils.getCurrentUserLogin().get();
        Optional<User> userFrom = this.userRepository.findByUsername(username);
        if(userFrom.isPresent()) {
            return this.feedbackRepository.findAllByUserFrom(userFrom.get());
        }
        return new ArrayList<>();
    }

    public CountFeedbackDTO countAllByUser() {
        String username = SecurityUtils.getCurrentUserLogin().get();
        Optional<User> user = this.userRepository.findByUsername(username);
        if(user.isPresent()) {
            CountFeedbackDTO dto = new CountFeedbackDTO();
            dto.setUserId(user.get().getId());
            dto.setAmountFeedbackFrom(this.feedbackRepository.countAllByUserFrom(user.get()));
            dto.setAmountFeedbackTo(this.feedbackRepository.countAllByUserTo(user.get()));
            return dto;
        }
        return new CountFeedbackDTO();
    }
}
