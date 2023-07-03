package academy.model.tech;

import lombok.Data;

import jakarta.persistence.*;

@Data
@Entity
public class ProgLanguage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

}
