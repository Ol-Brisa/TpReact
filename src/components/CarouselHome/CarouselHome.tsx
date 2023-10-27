import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 "
          style={{ maxHeight: "500px", objectFit: 'cover' }}
          src="https://th.bing.com/th/id/R.a7089cebf1b1ef32300d9ef81b72f4c0?rik=BAdLIE2cwMeOcQ&riu=http%3a%2f%2fwww.solofondos.com%2fwp-content%2fuploads%2f2015%2f12%2fFondos-de-pantalla-4K.jpg&ehk=RaD5kIcNOaMIFL%2bMTtzDnVxh5PraACmhyduj87aU1%2fQ%3d&risl=&pid=ImgRaw&r=0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          style={{ maxHeight: "500px", objectFit: 'cover' }}
          src="https://i.pinimg.com/originals/eb/d4/13/ebd4131f66410a78d2346bd78a921f70.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          style={{ maxHeight: "500px", objectFit: 'cover' }}
          src="https://cdn.wallpapersafari.com/77/38/f9pb4x.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;