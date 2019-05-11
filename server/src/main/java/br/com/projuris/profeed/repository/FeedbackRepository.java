package br.com.projuris.profeed.repository;

import br.com.projuris.profeed.entity.Feedback;
import br.com.projuris.profeed.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedbackRepository  extends JpaRepository<Feedback, Long> {

    List<Feedback> findAllByUserTo(User userTo);

    List<Feedback> findAllByUserFrom(User userFrom);

    Long countAllByUserTo(User userTo);

    Long countAllByUserFrom(User userFrom);

}
