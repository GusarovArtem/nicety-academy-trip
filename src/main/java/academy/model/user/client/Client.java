package academy.model.user.client;

import academy.model.course.Course;
import academy.model.user.AcademyUser;
import lombok.Data;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import java.util.List;

@Data
@Entity
public class Client extends AcademyUser {

    @OneToMany(mappedBy = "client")
    private List<Course> courses;

}
