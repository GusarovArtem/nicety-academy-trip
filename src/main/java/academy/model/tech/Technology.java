package academy.model.tech;

import academy.model.trip.calendar.day.TripCalendarDay;
import lombok.Data;

import jakarta.persistence.*;

@Data
@Entity
public class Technology {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private TripCalendarDay day;

    @ManyToOne
    private ProgLanguage language;

//  in %
    private double difficulty;
}
