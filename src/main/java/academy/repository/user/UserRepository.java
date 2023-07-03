package academy.repository.user;

import academy.model.user.AcademyUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<AcademyUser, Long> {

    AcademyUser getByEmail(String email);

}