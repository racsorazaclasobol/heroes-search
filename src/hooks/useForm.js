import { useState } from "react"

export const useForm = (initialForm = {}) => {
    // {
    //     username: 'oscar',
    //     email: 'oscar@gmail.com ',
    //     password: ''
    // }

    const [formState, setFormState] = useState( initialForm )

    const onClickReset = () => {
        setFormState(initialForm)
    }

    const onInputChange = ({target}) => {
        const { name, value } = target
        
        setFormState({
            ...formState,
            [name] : value
        })
    }

    return {
        ...formState, // Esto es para desestructurar el formulario enviado a este custom hook y asi obtener los elementos ya desestructurados
        formState,
        onInputChange,
        onClickReset,
    }
}