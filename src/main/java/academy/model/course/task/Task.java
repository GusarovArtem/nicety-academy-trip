package academy.model.course.task;

import academy.model.course.tech.Technology;
import academy.model.course.module.Module;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private TaskStatus status;

    @ManyToOne
    private Module module;

    @ManyToMany
    private List<Technology> technologies;


}
