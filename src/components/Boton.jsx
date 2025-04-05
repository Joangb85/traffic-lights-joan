import Button from 'react-bootstrap/Button';

export const Boton = ({ colorActivo, setColorActivo }) => {
    const secuenciaColores = () => {
        if (colorActivo === "") {
            return "red"
        } else if (colorActivo === "red") {
            return "yellow"
        } else if (colorActivo === "yellow") {
            return "green"
        } else if (colorActivo === "green") {
            return "red"
        }
    }
    const cambiarColores = () => {
        setColorActivo(secuenciaColores())
    }

    return (
        <Button className="mt-4"
            variant="dark"
            onClick={() => cambiarColores()}
        >Secuencia de luces</Button>

    )
}