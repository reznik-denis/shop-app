import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import s from './mainCarusel.module.css';
import ReactPlayer from 'react-player'

const YoutubeSlide = ({ url, isSelected}) => (
    <ReactPlayer
        height="100%"
        width="100%"
        url={url}
        playing={isSelected}
        />
);

function ImgElement({src, alt}) {
    return <div className={s.thumb}>
        <img src={src} alt={ alt }/>
            </div>
}

export default function MainCarusel() {
    const customRenderItem = (item, props) => <item.type {...item.props}  {...props}/>;
    return <Carousel
        renderItem={customRenderItem}
        showStatus={false}
        showThumbs={false}
        useKeyboardArrows={true}
        swipeable={true}
        dynamicHeight={false}
        swipeScrollTolerance={5}>
                <ImgElement key="1" src="https://cdn.pixabay.com/photo/2020/05/11/06/20/city-5156636_960_720.jpg" alt="1 foto"/>
                <ImgElement key="2" src="https://cdn.pixabay.com/photo/2021/11/17/13/48/star-6803666_960_720.jpg" alt="2 foto"/>
                <YoutubeSlide key="youtube-1" url="https://www.youtube.com/watch?v=M8kJ0_sFSBI"/>
            </Carousel>
}