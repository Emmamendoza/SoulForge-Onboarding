import { Typography } from '@mui/material'
import Button, { ButtonProps } from '@mui/material/Button'

type ButtonComponentProps = ButtonProps & {
    label: string
    size?: 'small' | 'medium' | 'large'
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
    onClick: () => void
}

export const ButtonComponent = ({ label, size = 'medium', color, onClick, ...props }: ButtonComponentProps) => {


return (
    <Button 
        disableRipple 
        size={size}
        color={color}
        onClick={onClick}
        variant="contained"
        {...props}>
        <Typography variant='body1'>{label}</Typography>
    </Button>
)
}