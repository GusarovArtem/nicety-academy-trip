package academy.repository.course;

import academy.model.user.AcademyUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<AcademyUser, Long> {


}