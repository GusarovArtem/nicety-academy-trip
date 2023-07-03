package academy.model.user.teacher;

import academy.model.course.Course;
import academy.model.user.AcademyUser;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
public class Teacher extends AcademyUser {

    @OneToMany(mappedBy = "teacher")
    private List<Course> courses;

}