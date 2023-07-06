package academy.model.course.task;

import academy.model.course.tech.Technology;
import academy.model.course.module.Module;
import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @JsonIgnore
    @ManyToOne
    private Module module;

    @JsonIgnore
    @ManyToMany
    private List<Technology> technologies;


}
