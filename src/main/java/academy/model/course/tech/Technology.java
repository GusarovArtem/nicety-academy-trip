package academy.model.course.tech;

import jakarta.persistence.*;
import lombok.Data;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

@Data
@Entity
public class Technology {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private ProgrammingLanguage language;

    @Min(0)
    @Max(100)
    private Integer difficulty;
}
