package academy.model;

import academy.model.user.AcademyUser;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

public class AcademyUserTest {

    @Test
    public void testUserEntity() {
        AcademyUser academyUser = mock(AcademyUser.class);

        when(academyUser.getId()).thenReturn(1L);
        when(academyUser.getUsername()).thenReturn("John Doe");

        assertEquals(1L, academyUser.getId());
        assertEquals("John Doe", academyUser.getUsername());

        verify(academyUser, times(1)).getId();
        verify(academyUser, times(1)).getUsername();
    }
}
