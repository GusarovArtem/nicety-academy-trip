package academy.repository.user;

import academy.model.user.AcademyUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<AcademyUser, Long> {

    Optional<AcademyUser> findByUsername(String username);

    AcademyUser getByEmail(String email);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}