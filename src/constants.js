import go from './images/skill-img/go.png';
import js from './images/skill-img/js.png';
import ts from './images/skill-img/ts.png';
import java from './images/skill-img/java.png';
import react from './images/skill-img/react.png';
import spring from './images/skill-img/spring.jpg';

const CAROUSEL_RESPONSIVE = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 6
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3
    }
  }
  
  const SKILL_IMAGES = [
    {
      src: js,
      width: 100,
      height: 100,
      alt: 'javascript',
      priority: true
    },
    {
      src: ts,
      width: 100,
      height: 100,
      alt: 'typescript',
      priority: true
    },
    {
      src: go,
      width: 100,
      height: 100,
      alt: 'golang',
      priority: true
    },
    {
      src: java,
      width: 100,
      height: 100,
      alt: 'java',
      priority: true
    },
    {
      src: react,
      width: 100,
      height: 100,
      alt: 'react',
      priority: true
    },
    {
      src: spring,
      width: 100,
      height: 100,
      alt: 'spring boot',
      priority: true
    }
  ]

  export {
    CAROUSEL_RESPONSIVE,
    SKILL_IMAGES
  }