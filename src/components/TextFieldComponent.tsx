import { TextField, TextFieldProps } from '@mui/material'
import { useState } from 'react'

type TextFieldComponentProps = TextFieldProps & {
    id: string
    label?: string
    value?: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    variant?: 'filled' | 'outlined' | 'standard'
}

export const TextFieldComponent = ({ id, label, value, onChange, variant = 'outlined', ...props }: TextFieldComponentProps) => {
    const [inputValue, setInputValue] = useState<string>( value ?? '');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
        onChange(event)
    }
    return (
        <TextField id={id} value={inputValue} onChange={handleInputChange} label={label} variant={variant} {...props} />
    )
}
