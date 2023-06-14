import { useState } from "react";
import { Button, Form } from "react-bootstrap";

const SearchBar = ({ placeholder, searchCity }) => {
  const [query, setQuery] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query !== "") {
      searchCity(query);
    } else {
      searchCity("Jakarta");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center mb-8">
        <div className="col-12 col-md-12 col-lg-8 mb-0 mb-lg-0">
          <Form onSubmit={handleSubmit}>
            <div className="input-group">
              <Form.Control
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  border: "none",
                  color: "#212529",
                }}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={placeholder}
              />
              <div className="input-group-append">
                <Button variant="light" type="submit">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1.5em"
                    width="1.5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
