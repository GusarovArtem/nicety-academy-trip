package academy.service;

import academy.model.user.AcademyUser;
import academy.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public List<AcademyUser> getAll() {
        return userRepository.findAll();
    }
    
    public void save(AcademyUser academyUser) {
        userRepository.save(academyUser);
    }

    
    
    public AcademyUser getByEmail(String email) {
        return userRepository.getByEmail(email);
    }

}