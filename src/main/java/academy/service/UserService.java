package academy.service;

import academy.model.user.AcademyUser;
import academy.repository.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<AcademyUser> getAll() {
        return userRepository.findAll();
    }
    
    public void save(AcademyUser user) {
        userRepository.save(user);
    }

    
    
    public AcademyUser getByEmail(String email) {
        return userRepository.getByEmail(email);
    }

}