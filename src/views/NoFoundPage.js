import { Button } from 'Components/Button';
import { useNavigate } from 'react-router-dom';
import goUp from "services/goUp";


export default function NoFoundPage() {
    const navigate = useNavigate();

    const handleOnClick = (category, link) => {
        navigate(`${category}/${link}`);
        goUp()
    }

    return <><h2>This page not found. Please back to Home page.</h2>
        <Button title='Go to Home' category='' link='' handleOnClick={handleOnClick}/>
        </>
}