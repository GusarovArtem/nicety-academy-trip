package academy.model.user;

import academy.model.user.role.Role;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
public class AcademyUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    @Size(max = 20)
    protected String username;

    @NotBlank
    @Size(max = 50)
    @Email
    protected String email;

    @NotBlank
    @Size(max = 120)
    protected String password;

    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    protected Set<Role> roles = new HashSet<>();

    public AcademyUser(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public AcademyUser() {

    }
}