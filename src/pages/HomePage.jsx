import { Container } from "react-bootstrap";

import { Semaforo } from "../components/Semaforo"


const HomePage = () => {
    return (
        <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
            <Semaforo />
        </Container>
    )

}

export default HomePage