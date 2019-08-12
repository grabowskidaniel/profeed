package br.com.projuris.profeed;


import br.com.projuris.profeed.entity.User;
import br.com.projuris.profeed.repository.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
@Slf4j
public class DataInitializer implements CommandLineRunner {

    @Autowired
    UserRepository users;

    @Autowired
    PasswordEncoder passwordEncoder;

    private final Logger log = LoggerFactory.getLogger(DataInitializer.class);

    @Override
    public void run(String... args) throws Exception {

        log.info("DataInitializer starting.");
        
        createUserIfNotFound("admin",
                "admin@projuris.com.br",
                true, "admin",
                "admin",
                Arrays.asList( "ROLE_USER", "ROLE_ADMIN"),
                null);

        createUserIfNotFound("Adael",
                "adael.santos@projuris.com.br",
                true, "adael.santos",
                "testuser",
                Arrays.asList( "ROLE_USER"),
                "https://firebasestorage.googleapis.com/v0/b/profeed-33822.appspot.com/o/Adael.JPG?alt=media&token=cad62b74-f733-43a1-9ab1-bc204c7b4b33");

        createUserIfNotFound("Alan",
                "alan.nascimento@projuris.com.br",
                true, "alan.nascimento",
                "testuser",
                Arrays.asList( "ROLE_USER"),
                "https://firebasestorage.googleapis.com/v0/b/profeed-33822.appspot.com/o/Alan.JPG?alt=media&token=3d0e2f6d-aa76-471f-bb5a-38acd5a9f732");

        createUserIfNotFound("Erick",
                "erick.oliveira@projuris.com.br",
                true, "erick.oliveira",
                "testuser",
                Arrays.asList( "ROLE_USER"),
                "https://firebasestorage.googleapis.com/v0/b/profeed-33822.appspot.com/o/Erick.JPG?alt=media&token=af34552b-59a6-4244-b1d3-fbfbebda494a");

        createUserIfNotFound("Rodrigo",
                "rodrigo.venturi@projuris.com.br",
                true, "rodrigo.venturi",
                "testuser",
                Arrays.asList( "ROLE_USER"),
                "https://firebasestorage.googleapis.com/v0/b/profeed-33822.appspot.com/o/Rodrigo%20Venturi.JPG?alt=media&token=8c749d67-a527-423f-8e6d-b890f4601536");

        log.info("Printing all users...");
        this.users.findAll().forEach(v -> log.info(" User :" + v.toString()));
    }

    private void createUserIfNotFound(String name, String email, boolean active, String username, String rawPassword, List<String> roles, String photoURL) {
        User user;
        try {
            user = this.users.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("Username: " + username + " not found"));
        } catch (UsernameNotFoundException e) {
            log.info(e.getLocalizedMessage());
            log.info("Creating user ".concat(username));
            user = new User(name, email, active, username, this.passwordEncoder.encode(rawPassword), roles, photoURL);
            this.users.save(user);
            log.info("User ".concat(username).concat(" created.") );
        }
    }
}