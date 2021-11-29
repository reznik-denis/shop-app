const settings = {
        dots: false,
        infinite: true,
        accessibility: true,
        swipeToSlide: true,
        speed: 500,
       
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
            breakpoint: 1624,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
            },
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
            },
        ]
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
          style={{
              ...style,
              right: '25px',
              backgroundColor: 'black',
              borderRadius: '50%'
          }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
          style={{
              ...style,
              left: '25px',
              zIndex: 99,
              backgroundColor: 'black',
              borderRadius: '50%'
          }}
      onClick={onClick}
    />
  );
}
    
export default settings;