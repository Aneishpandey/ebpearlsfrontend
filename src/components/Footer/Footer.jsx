import { memo } from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <p className="footer-text">
              Consider commercial, private & intellectual property, trade secrets, personal & sensitive data, financial
              data, and performance forecast. See below, will be returned. Provided, legal team opinion on it, or action
              that might affect our data.
            </p>
            <div className="footer-social">
              <a href="#" className="social-icon instagram" aria-label="Instagram"></a>
              <a href="#" className="social-icon twitter" aria-label="Twitter"></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3 className="footer-heading">Products</h3>
              <ul className="footer-list">
                <li>
                  <a href="#">Payments</a>
                </li>
                <li>
                  <a href="#">Invoice Factoring</a>
                </li>
                <li>
                  <a href="#">Invoice Finance</a>
                </li>
                <li>
                  <a href="#">Supply Finance</a>
                </li>
                <li>
                  <a href="#">Customer Finance</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Company</h3>
              <ul className="footer-list">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Resources</h3>
              <ul className="footer-list">
                <li>
                  <a href="#">Frequently asked questions</a>
                </li>
                <li>
                  <a href="#">Knowledge base</a>
                </li>
                <li>
                  <a href="#">API documentation</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="#" className="legal-link">
              Privacy policy
            </a>
            <a href="#" className="legal-link">
              Contact us
            </a>
          </div>
          <div className="footer-copyright">
            <span>Site map</span>
            <span>Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
