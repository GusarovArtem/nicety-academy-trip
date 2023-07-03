package academy.model.course;

enum CourseStatus {
    INITIATED("Initiated"),
    CREATED("Created"),
    CHECKED("Checked"),
    STARTED("Started"),
    FINISHED("Finished");

    final String label;

    CourseStatus(String label) {
        this.label = label;
    }
}
