package academy.repository.course.module.task;

import academy.model.user.AcademyUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<AcademyUser, Long> {


}