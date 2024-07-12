import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="py-5 bg-white">
      <div className="container">
        <div className="row g-3 g-md-5">
          <div className="col-md-6 mb-3">
            <form autoComplete="on">
              <div className="d-flex flex-column flex-sm-row w-100 gap-2 mb-2">
                <label htmlFor="newsletterMail" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletterMail"
                  type="text"
                  className="form-control"
                  placeholder="Give an email, get the newsletter"
                />
                <button className="btn btn-secondary text-white" type="button">
                  Subscribe
                </button>
              </div>

              <div className="d-flex w-100 gap-2">
                <input
                  id="newsletterConcent"
                  type="checkbox"
                  className="form-check"
                  placeholder="Email address"
                />
                <label htmlFor="newsletterConcent">
                  I agree with the terms and conditions
                </label>
              </div>
            </form>
          </div>

          <div className="col-md-6 mb-3 order-md-first">
            <ul className="nav flex-column flex-xl-row justify-content-xl-between text-uppercase">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  CONTACT
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  TERMS OF SERVICES
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-muted">
                  SHIPPING AND RETURNS
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-6 mb-3 order-xl-last">
            <div className="d-flex gap-2 align-items-center justify-content-between">
              <h5 className="text-capitalize text-light">follow us</h5>
              <ul className="nav gap-3">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    <FontAwesomeIcon icon={faFacebook} />
                    <span className="visually-hidden">Shoppe Facebook</span>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    <FontAwesomeIcon icon={faInstagram} />
                    <span className="visually-hidden">Shoppe Instagram</span>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    <FontAwesomeIcon icon={faXTwitter} />
                    <span className="visually-hidden">Shoppe X</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 text-primary">
            <p>
              <b>&copy; 2024 Shoppe.</b> Terms of use <b>and</b> privacy policy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
