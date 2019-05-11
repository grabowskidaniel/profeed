package br.com.projuris.profeed.repository;

import br.com.projuris.profeed.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUsername(String username);

    Optional<List<User>> findAllByActiveAndRolesContains(Boolean active, String role);
}
