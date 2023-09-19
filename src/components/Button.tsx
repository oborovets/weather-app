import MUIButton from '@mui/material/Button';

interface Props {
    text: string;
    variant: "text" | "outlined" | "contained"
}

export default function Button({text, variant}: Props) {
    return <MUIButton variant={variant} sx={{color: 'white'}}>{text}</MUIButton>
}