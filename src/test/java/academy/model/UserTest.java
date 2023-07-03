package academy.model;

import academy.model.user.User;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class UserTest {

    @Test
    public void testUserEntity() {
        User user = mock(User.class);

        when(user.getId()).thenReturn(1L);
        when(user.getName()).thenReturn("John Doe");

        assertEquals(1L, user.getId());
        assertEquals("John Doe", user.getName());

        verify(user, times(1)).getId();
        verify(user, times(1)).getName();
    }
}
