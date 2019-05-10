package br.com.projuris.profeed.service;

import br.com.projuris.profeed.entity.User;
import br.com.projuris.profeed.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void save(User user) {
        this.userRepository.save(user);
    }

}
