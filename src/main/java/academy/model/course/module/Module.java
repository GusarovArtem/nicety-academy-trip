package academy.model.course.module;

import academy.model.course.Course;
import academy.model.course.task.Task;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Module {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Course course;

    @OneToMany(mappedBy = "module")
    private List<Task> tasks;



}
