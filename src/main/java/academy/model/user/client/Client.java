package academy.model.user.client;

import academy.model.course.Course;
import academy.model.user.AcademyUser;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Client extends AcademyUser {

    @OneToMany(mappedBy = "client")
    private List<Course> courses;

}
