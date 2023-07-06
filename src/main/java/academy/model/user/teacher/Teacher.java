package academy.model.user.teacher;

import academy.model.course.Course;
import academy.model.user.AcademyUser;
import lombok.Data;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import java.util.List;

@Data
@Entity
public class Teacher extends AcademyUser {

    @OneToMany(mappedBy = "teacher")
    private List<Course> courses;


}