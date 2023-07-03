package academy.model.trip.calendar.day;

import academy.model.task.Task;
import academy.model.trip.calendar.TripCalendar;
import lombok.Data;

import jakarta.persistence.*;
import java.util.List;

@Data
@Entity
public class TripCalendarDay {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private TripCalendar calendar;

    @OneToMany(mappedBy = "day")
    private List<Task> tasks;

}
