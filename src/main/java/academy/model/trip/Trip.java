package academy.model.trip;

import academy.model.tech.ProgLanguage;
import academy.model.trip.calendar.TripCalendar;
import academy.model.user.captain.Captain;
import academy.model.user.client.Client;
import lombok.Data;

import jakarta.persistence.*;
import java.util.List;

@Data
@Entity
public class Trip {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Double rate;

    @OneToOne
    private TripCalendar calendar;

    @ManyToMany
    private List<ProgLanguage> languages;

    @ManyToOne
    private Captain captain;

    @ManyToOne
    private Captain client;

    @ManyToMany
    private List<Client> clients;
}
