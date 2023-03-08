import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <Navbar
      style={{
        backgroundColor: "white",
        boxShadow: "0 0 16px rgb(0 0 0 / 15%)",
        minHeight: "80px",
      }}
      expand="lg"
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <div style={{ marginLeft: "20px" }}>
            <svg
              width="139"
              height="24"
              viewBox="0 0 139 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.719 10.64a.421.421 0 0 0-.42-.441h-.328a.422.422 0 0 0-.419.428v.004a3.765 3.765 0 0 1-7.284 1.342c.986-.596 1.66-1.699 1.66-2.439 0-1.056-1.373-1.913-3.069-1.913-1.695 0-3.069.857-3.069 1.913 0 .743.68 1.852 1.673 2.445a3.765 3.765 0 0 1-7.281-1.349v-.004a.422.422 0 0 0-.42-.428H.42c-.24 0-.43.201-.42.441a10.057 10.057 0 0 0 5.048 8.324c-.003.072-.01.143-.01.214 0 1.32.523 2.552 1.473 3.469a4.78 4.78 0 0 0 3.52 1.349 4.83 4.83 0 0 0 4.645-5.035 10.055 10.055 0 0 0 5.043-8.32Zm-9.73 12.13a3.564 3.564 0 0 1-2.627-1.005 3.563 3.563 0 0 1-1.078-2.208 9.696 9.696 0 0 0 7.15 0 3.601 3.601 0 0 1-3.446 3.213ZM2.416 4.722a3.832 3.832 0 0 1 2.79-.002.58.58 0 0 0 .73-.26c.22-.415.324-.9.263-1.414A2.415 2.415 0 0 0 4.083.948a2.404 2.404 0 0 0-2.395 3.51c.14.263.45.372.728.264ZM14.508 4.722A3.832 3.832 0 0 1 17.3 4.72c.278.108.591.002.731-.26.22-.415.323-.9.262-1.414A2.415 2.415 0 0 0 16.176.948a2.404 2.404 0 0 0-2.395 3.51c.14.263.45.372.727.264Z"
                fill="#000"
              ></path>
              <path
                d="m6.603 17.654-.01.022a3.442 3.442 0 0 0-.24.708 3.665 3.665 0 0 0-.09.797c0 .985.39 1.903 1.098 2.587a3.564 3.564 0 0 0 2.626 1.006 3.602 3.602 0 0 0 3.402-4.279l-.004-.025-.016-.073a3.648 3.648 0 0 0-.246-.727c-.418-.99-1.315-2.485-3.263-4.143-1.947 1.655-2.845 3.153-3.257 4.127Z"
                fill="#D02027"
              ></path>
              <path
                d="M9.86 16.91a2.044 2.044 0 1 1 0 4.088 2.044 2.044 0 0 1 0-4.088Z"
                fill="#AF1E23"
              ></path>
              <path
                d="M26.7 17.6c-.452-.318-.77-.902-.77-1.54 0-1.061.849-1.884 1.91-1.884.532 0 .903.185 1.17.371 1.406 1.036 2.946 1.673 4.751 1.673 1.673 0 2.682-.664 2.682-1.752v-.053c0-1.036-.637-1.567-3.743-2.363-3.744-.956-6.16-1.992-6.16-5.682v-.053c0-3.372 2.708-5.602 6.505-5.602 2.257 0 4.221.584 5.894 1.646.451.265.903.823.903 1.62 0 1.061-.85 1.884-1.912 1.884a1.96 1.96 0 0 1-1.036-.292c-1.353-.796-2.628-1.247-3.902-1.247-1.567 0-2.39.717-2.39 1.62v.052c0 1.222.797 1.62 4.01 2.443 3.77.982 5.893 2.336 5.893 5.575v.053c0 3.69-2.814 5.762-6.823 5.762-2.443 0-4.912-.744-6.983-2.23ZM42.045 7.194a2.017 2.017 0 1 1 4.035 0v.16c.93-1.195 2.124-2.284 4.168-2.284 3.053 0 4.832 2.018 4.832 5.284v7.354a2.017 2.017 0 1 1-4.035 0v-6.08c0-1.912-.903-2.894-2.442-2.894-1.54 0-2.523.982-2.523 2.894v6.08a2.017 2.017 0 1 1-4.035 0V7.194ZM57.47 1.94c0-1.169.983-1.885 2.257-1.885 1.275 0 2.257.717 2.257 1.885v.053c0 1.168-.983 1.911-2.257 1.911s-2.257-.743-2.257-1.911V1.94Zm.24 5.256a2.017 2.017 0 1 1 4.034 0V17.71a2.017 2.017 0 1 1-4.035 0V7.196ZM65.701 8.788h-.16c-.929 0-1.672-.717-1.672-1.646 0-.93.743-1.673 1.673-1.673h.159v-.903c0-1.566.398-2.707 1.142-3.451C67.586.372 68.675 0 70.108 0c.637 0 1.195.027 1.646.106.69.106 1.38.717 1.38 1.62 0 .902-.743 1.672-1.646 1.672h-.345c-.929 0-1.46.478-1.46 1.54v.558h1.752c.93 0 1.673.717 1.673 1.646 0 .929-.743 1.646-1.673 1.646h-1.699v8.92a2.017 2.017 0 1 1-4.035 0v-8.92Zm10.142 0h-.16c-.929 0-1.672-.717-1.672-1.646 0-.93.743-1.673 1.672-1.673h.16v-.903c0-1.566.398-2.707 1.141-3.451C77.728.372 78.816 0 80.25 0c.637 0 1.195.027 1.646.106.69.106 1.38.717 1.38 1.62 0 .902-.743 1.672-1.645 1.672h-.346c-.93 0-1.46.478-1.46 1.54v.558h1.752c.93 0 1.673.717 1.673 1.646 0 .929-.743 1.646-1.673 1.646h-1.7v8.92a2.017 2.017 0 1 1-4.035 0v-8.92ZM84.392 18.214a1.609 1.609 0 0 1-.77-1.381c0-.903.69-1.593 1.593-1.593.292 0 .584.08.797.212 1.354.85 2.707 1.275 3.85 1.275 1.168 0 1.699-.425 1.699-1.062v-.053c0-.876-1.38-1.168-2.948-1.646-1.99-.584-4.247-1.513-4.247-4.275v-.053c0-2.893 2.336-4.513 5.204-4.513 1.487 0 3.027.398 4.407 1.089.584.292.956.823.956 1.513 0 .902-.717 1.593-1.62 1.593-.292 0-.478-.053-.743-.186-1.142-.557-2.23-.902-3.08-.902-.982 0-1.487.424-1.487.982v.053c0 .796 1.354 1.168 2.894 1.7 1.991.663 4.3 1.619 4.3 4.22v.054c0 3.16-2.362 4.593-5.442 4.593-1.752-.001-3.637-.506-5.363-1.62ZM97.03 7.194a2.017 2.017 0 1 1 4.035 0v.186c.983-1.327 2.337-2.31 4.434-2.31 3.319 0 6.478 2.602 6.478 7.355v.053c0 4.752-3.106 7.354-6.478 7.354-2.15 0-3.478-.982-4.434-2.124v4.248a2.016 2.016 0 1 1-4.035 0V7.194Zm10.912 5.284v-.053c0-2.363-1.593-3.93-3.478-3.93-1.885 0-3.451 1.567-3.451 3.93v.053c0 2.363 1.566 3.929 3.451 3.929s3.478-1.54 3.478-3.93ZM113.199 12.53v-.052c0-4.09 3.292-7.408 7.726-7.408 4.407 0 7.673 3.266 7.673 7.355v.053c0 4.088-3.292 7.407-7.726 7.407-4.407 0-7.673-3.266-7.673-7.354Zm11.417 0v-.052c0-2.098-1.514-3.93-3.744-3.93-2.31 0-3.69 1.779-3.69 3.876v.053c0 2.098 1.513 3.93 3.743 3.93 2.31 0 3.691-1.78 3.691-3.876ZM131.12 15.531V8.787h-.133c-.955 0-1.725-.77-1.725-1.726 0-.955.77-1.725 1.725-1.725h.133V3.557a2.017 2.017 0 1 1 4.035 0v1.779h1.779c.956 0 1.726.77 1.726 1.725 0 .957-.77 1.726-1.726 1.726h-1.779v6.08c0 .929.399 1.38 1.301 1.38.133 0 .399-.026.478-.026.903 0 1.673.744 1.673 1.673 0 .717-.478 1.301-1.035 1.513-.744.292-1.434.399-2.31.399-2.469 0-4.142-.983-4.142-4.275Z"
                fill="#3AA648"
              ></path>
            </svg>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" s navbarScroll>
            <Nav.Link
              style={{
                fontSize: "16px",
                color: "#484848",
                marginRight: "20px",
              }}
              href="/AddSpot"
            >
              Add New Spot
            </Nav.Link>
            <Nav.Link
              style={{
                fontSize: "16px",
                color: "#484848",
                marginRight: "20px",
              }}
              href="#action2"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              style={{
                fontSize: "16px",
                color: "#484848",
                marginRight: "20px",
              }}
              href="addReview"
            >
              Top dog trainers
            </Nav.Link>
            <Nav.Link
              style={{
                fontSize: "16px",
                color: "#484848",
                marginRight: "20px",
              }}
              href="#action4"
            >
              Become a host
            </Nav.Link>
          </Nav>
          <div>
            <button
              style={{
                backgroundColor: "#fff",
                border: "1px solid",
                borderColor: "#a4a4a4",
                color: "#484848",
                fontWeight: 500,
                padding: "5px 10px",
                borderRadius: "8px",
                height: "40px",
                marginRight: 10,
              }}
            >
              Sign in
            </button>
            <button
              style={{
                backgroundColor: "#3aa648",
                border: "none",
                color: "white",
                fontWeight: 500,
                padding: "5px 10px",
                borderRadius: "8px",
                height: "40px",
              }}
            >
              Join for free!
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
