import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import s from './mainCarusel.module.css';
import ReactPlayer from 'react-player/youtube';

const YoutubeSlide = ({ url, isSelected}) => (
    <ReactPlayer
        height="100%"
        width="100%"
        url={url}
        playing={isSelected}
        config={{
            playerVars: { origin: 'https://www.youtube.com/', showinfo: 1 }
        }}
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
                <ImgElement key="1" src="https://cdn.pixabay.com/photo/2018/12/09/12/19/corvette-3864797_960_720.jpg" alt="1 foto"/>
                <ImgElement key="2" src="https://cdn.pixabay.com/photo/2019/05/23/02/21/mclaren-4223024_960_720.jpg" alt="2 foto"/>
                <YoutubeSlide key="youtube-1" url="http://www.youtube.com/embed/ekgUjyWe1Yc"/>
            </Carousel>
}