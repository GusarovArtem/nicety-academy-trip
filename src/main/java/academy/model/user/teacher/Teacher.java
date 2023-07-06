package academy.model.user.teacher;

import academy.model.course.Course;
import academy.model.user.AcademyUser;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import java.util.List;

@Data
@Entity
public class Teacher extends AcademyUser {

    @JsonIgnore
    @OneToMany(mappedBy = "teacher")
    private List<Course> courses;


}