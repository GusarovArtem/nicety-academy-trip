package academy.model.course.tech;

import lombok.Data;

import jakarta.persistence.*;

@Data
@Entity
public class ProgrammingLanguage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

}
