import Container from "../components/container"
import Form from "../components/Form"
import Text from "../components/Text"
import { useForm } from "../hooks/useForm"

const inputsValidations = {
    name: {
        validation: value => value.length > 2,
        errorText: "El nombre es incorrecto"
    },
    email: {
        validation: value => {
            const regexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
            return regexp.test(value);
        },
        errorText: "El email no tiene el formato correcto"
    },
    subject: {
        validation: value => value.length > 0,
        errorText: "El asunto es obligatorio"
    },
    message: {
        validation: value => value.length > 0,
        errorText: "Ingrese un texto"
    }
}

function ContactUs() {

    const {values, onChange} = useForm({
        name: "",
        email: "",
        subject: "",
        message: ""
    }, inputsValidations)

    return (
        <Container as="main">
            <Text as="h2">Contactanos</Text>
            <Form 
                values={values}
                onChange={onChange}
                onSubmit={() => {}}
                inputsArray={[
                    {
                        name: "name",
                        type: "text",
                        label: "Nombre"
                    },
                    {
                        name: "email",
                        type: "email",
                        label: "e-Mail"
                    },
                    {
                        name: "subject",
                        type: "text",
                        label: "Asunto"
                    },
                    {
                        name: "message",
                        type: "text",
                        label: "Mensaje"
                    },
                ]}
            />
        </Container>
    )
}

export default ContactUs