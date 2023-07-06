package academy.repository.course.module;

import academy.model.user.AcademyUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ModuleRepository extends JpaRepository<AcademyUser, Long> {


}