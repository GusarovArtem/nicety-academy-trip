package academy.model.course;

import academy.model.course.tech.ProgrammingLanguage;
import academy.model.user.client.Client;
import academy.model.user.teacher.Teacher;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import jakarta.persistence.*;
import java.util.List;

@Data
@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Double rate;

    private CourseStatus status;

    @JsonIgnore
    @ManyToMany
    private List<ProgrammingLanguage> languages;

    @JsonIgnore
    @ManyToOne
    private Teacher teacher;

    @JsonIgnore
    @ManyToOne
    private Client client;

}
