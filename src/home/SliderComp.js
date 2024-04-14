import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { slider } from '../Constant/slider';

export default function SliderComp() {
  return (
    <div className='absolute z-0'>
      <Carousel showThumbs={false} autoPlay={true} interval={2000} infiniteLoop={true}>
        {slider.map((image, index) => (
          <div key={index} className="slide">
            <img src={image.Url} alt={`slide ${index}`} className="h-18 lg:h-64" />
            {/* Adjust height using Tailwind CSS classes */}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

