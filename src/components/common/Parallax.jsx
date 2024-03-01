import { Container } from "react-bootstrap";

const Parallax = () => {
  return (
    <div className="parallax mb-5 rounded">
      <Container className="text-center h-100 px-5 py-5 align-items-center justify-content-center">
        <div
          className="animated-texts bounceIn d-flex flex-column align-items-center justify-content-center h-100"
          style={{ textShadow: "2px 2px #333" }}
        >
          <h1>
            Experience the Best hospitality at{" "}
            <span className="hotel-color">Helsinki Hotel</span>
          </h1>
          <h3>We offer the best services for all your needs.</h3>
        </div>
      </Container>
    </div>
  );
};

export default Parallax;
