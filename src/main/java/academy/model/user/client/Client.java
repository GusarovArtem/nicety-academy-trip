package academy.model.user.client;

import academy.model.trip.Trip;
import academy.model.user.User;
import lombok.Data;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import java.util.List;

@Data
@Entity
public class Client extends User {

    @OneToMany(mappedBy = "client")
    private List<Trip> trips;

}
