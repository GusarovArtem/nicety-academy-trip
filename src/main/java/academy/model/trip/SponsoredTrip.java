package academy.model.trip;

import lombok.Data;

import jakarta.persistence.*;
import java.util.Date;

@Data
@Entity
public class SponsoredTrip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Date sponsoredTo;

    @OneToOne
    private Trip trip;
}
