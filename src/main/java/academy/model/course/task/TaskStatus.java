package academy.model.course.task;

enum TaskStatus {
    CREATED("Created"),
    STARTED("Started"),
    FAILED("Failed"),
    FINISHED("Finished");

    final String label;

    TaskStatus(String label) {
        this.label = label;
    }
}
