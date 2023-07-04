import Card from "./Card";


const Body = () => {
    return (
        <div style={{display: 'flex', color: 'white'}}>
            <Card
                header="Header"
                title="Primary card title"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
                color="bg-primary"
            />
            <Card
                header="Header"
                title="Danger card title"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
                color="bg-danger"
            />
            <Card
                header="Header"
                title="Warning card title"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
                color="bg-warning"
            />
            <Card
                header="Header"
                title="Info card title"
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
                color="bg-info"
            />
        </div>
    );
}
export default Body;
