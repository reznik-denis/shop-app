import { Button } from 'Components/Button';
import { useNavigate } from 'react-router-dom';


export default function NoFoundPage() {
    const navigate = useNavigate();

    const handleonClick = () => {
        navigate(`/`);
    }

    return <><h2>This page not found. Please back to Home page.</h2>
        <Button title='Go to Home' handleonClick={handleonClick}/>
        </>
}