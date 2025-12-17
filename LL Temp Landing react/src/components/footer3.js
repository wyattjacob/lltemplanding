import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer3.css'

const Footer3 = (props) => {
  return (
    <footer className="footer3-thq-footer4-elm thq-section-padding">
      <div className="footer3-thq-max-width-elm thq-section-max-width">
        <div className="footer3-thq-content-elm">
          <div className="footer3-thq-logo-elm">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="footer3-image"
            />
          </div>
          <div className="footer3-thq-links-elm">
            <a
              href="https://www.leaselift.app/resident"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer3-text1">Resident Site</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://calendly.com/jwyatt-leaselift/30min"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer3-text3">Calendly Link</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://www.leaselift.app"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer3-text5">LeaseLift.app</span>
                </Fragment>
              )}
            </a>
          </div>
          <div className="footer3-thq-social-links-elm">
            <a
              href="https://instagram.com/leaselift"
              target="_blank"
              rel="noreferrer noopener"
              className="footer3-link1"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="footer3-icon1 thq-icon-small"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/leaseliftapp/"
              target="_blank"
              rel="noreferrer noopener"
              className="footer3-link2"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="footer3-icon3 thq-icon-small"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
            </a>
          </div>
        </div>
        <div className="footer3-thq-credits-elm">
          <div className="thq-divider-horizontal"></div>
          <div className="footer3-thq-row-elm">
            <div className="footer3-thq-footer-links-elm">
              <span className="footer3-thq-content3-elm thq-body-small">
                2026 LeaseLift LLC
              </span>
              <span className="thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer3-text4">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer3-text6">Terms of Service</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer3-text2">Cookies Settings</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer3.defaultProps = {
  link1: undefined,
  cookiesLink: undefined,
  imageAlt: 'image',
  link2: undefined,
  privacyLink: undefined,
  link3: undefined,
  termsLink: undefined,
  imageSrc: '/ll%20black%20transp-200h.png',
}

Footer3.propTypes = {
  link1: PropTypes.element,
  cookiesLink: PropTypes.element,
  imageAlt: PropTypes.string,
  link2: PropTypes.element,
  privacyLink: PropTypes.element,
  link3: PropTypes.element,
  termsLink: PropTypes.element,
  imageSrc: PropTypes.string,
}

export default Footer3
