package academy.model.task;

import academy.model.tech.Technology;
import academy.model.trip.calendar.day.TripCalendarDay;
import lombok.Data;

import jakarta.persistence.*;
import java.util.List;

@Data
@Entity
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Task task;

    @ManyToMany
    private List<Technology> technologies;

    @ManyToOne
    private TripCalendarDay day;

}
