import { Typography } from '@mui/material'
import Button, { ButtonProps } from '@mui/material/Button'

type ButtonComponentProps = ButtonProps & {
    label: string
    size?: 'small' | 'medium' | 'large'
    color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
    onClick: () => void
}

export const ButtonComponent = ({ label, size = 'medium', color, onClick, ...props }: ButtonComponentProps) => {

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onClick();
        event.currentTarget.blur();
    };
return (
    <Button 
        disableRipple 
        size={size}
        color={color}
        onClick={handleClick}
        variant="contained"
        {...props}>
        <Typography variant='body1'>{label}</Typography>
    </Button>
)
}