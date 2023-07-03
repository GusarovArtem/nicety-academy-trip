package academy.controller;

import academy.model.user.AcademyUser;
import academy.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/index")
    public String index() {
        List<AcademyUser> users = userService.getAll();
        return users.toString();
    }

    @PostMapping("/save")
    public void save(AcademyUser user) {
        userService.save(user);
    }


}