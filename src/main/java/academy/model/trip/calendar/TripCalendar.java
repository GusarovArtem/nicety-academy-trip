package academy.model.trip.calendar;

import academy.model.trip.Trip;
import academy.model.trip.calendar.day.TripCalendarDay;
import lombok.Data;

import jakarta.persistence.*;
import java.util.List;

@Data
@Entity
public class TripCalendar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    private Trip trip;

    @OneToMany(mappedBy = "calendar")
    private List<TripCalendarDay> days;

}
