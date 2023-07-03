package academy.model.user.captain;

import academy.model.trip.Trip;
import academy.model.user.User;
import lombok.Data;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import java.util.List;

@Data
@Entity
public class Captain extends User {


    @OneToMany(mappedBy = "captain")
    private List<Trip> trips;

//  TODO availability per day
//  TODO tips/energy
}
