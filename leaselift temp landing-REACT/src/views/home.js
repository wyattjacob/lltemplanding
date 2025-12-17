import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import YouTube from '../components/you-tube'
import Footer3 from '../components/footer3'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container10">
      <Helmet>
        <title>LeaseLift Temp Landing</title>
        <meta property="og:title" content="LeaseLift Temp Landing" />
        <link
          rel="canonical"
          href="https://active-online-software-page-2focxs.teleporthq.app/"
        />
      </Helmet>
      <section className="home-thq-hero-elm">
        <header className="home-thq-header-elm">
          <div id="mobile-menu" className="home-thq-mobile-navigation-elm">
            <img
              alt="pastedImage"
              src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
              className="home-thq-logo-elm"
            />
            <div className="home-thq-links-elm">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
            <div
              id="close-mobile-menu"
              className="home-thq-close-mobile-menu-elm"
            >
              <svg viewBox="0 0 804.5714285714286 1024" className="home-icon1">
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="home-thq-desktop-navigation-elm">
            <nav className="home-thq-centered-elm">
              <div className="home-thq-left-elm1">
                <img
                  alt="image"
                  src="/ll%20white%20transp-200h.png"
                  className="home-image1"
                />
              </div>
              <div className="home-thq-right-elm">
                <a
                  href="https://www.leaselift.app/resident"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  <div className="home-thq-get-started-elm">
                    <span className="home-text13">Current Residents ▶</span>
                  </div>
                </a>
                <div id="open-mobile-menu" className="home-thq-burger-menu-elm">
                  <img
                    alt="pastedImage"
                    src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                    className="home-thq-mobile-menu-button-elm"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <div className="home-container12">
              <Script
                html={`<script defer>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
              ></Script>
            </div>
          </div>
        </header>
        <header className="home-thq-content-elm">
          <h1 className="home-text14">
            <span className="home-text15">Fill beds</span>
            <span className="home-text16">
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text17">quickly</span>
            <span className="home-text18"> </span>
            <span className="home-text19">when residents relet</span>
          </h1>
          <p className="home-text20">
            LeaseLift automates your relet and transfer process, while
            connecting tenants to demand channels on campus.
          </p>
          <div className="home-container13">
            <a
              href="https://form.jotform.com/253505716196158"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link2"
            >
              <div className="home-thq-share-your-challenges-elm">
                <span className="home-text21">
                  Let&apos;s discuss options ⏩
                </span>
              </div>
            </a>
            <a href="#YouTube" className="home-link3">
              <div className="home-thq-learn-more-elm">
                <span className="home-text22">Learn more</span>
              </div>
            </a>
          </div>
        </header>
        <img
          alt="image"
          src="/untitled%20design(2)-modified-200h.png"
          className="home-image2"
        />
      </section>
      <section className="home-thq-banners-elm1">
        <div className="home-thq-banner-manage-elm1">
          <div className="home-container14">
            <div className="home-thq-left-elm2">
              <span className="home-text23 sub-title">Resident Platform</span>
              <span className="home-text24 title">
                Residents find replacements
              </span>
              <span className="home-text25">
                <span>
                  No more Facebook groups or Snapchat stories. LeaseLift&apos;s
                  resident platform allows your tenants to find, secure, and
                  transfer their lease all in one place.
                </span>
                <br></br>
              </span>
            </div>
            <img
              alt="image"
              src="/Logos/find%20replacements-500h.png"
              className="home-image3"
            />
          </div>
        </div>
      </section>
      <section className="home-thq-banners-elm2">
        <div className="home-thq-banner-manage-elm2">
          <div className="home-container15">
            <img
              alt="image"
              src="/Logos/automate%20transfer-500w.png"
              className="home-image4"
            />
            <div className="home-thq-left-elm3">
              <span className="home-text28 sub-title">Automation</span>
              <span className="home-text29 title">
                Automate your transfer process
              </span>
              <span className="home-text30">
                <span>
                  Imagine never having to sift through emails, search for
                  applications, or contact new tenants. LeaseLift automates the
                  entire lease transfer process and sends you a simple
                  notification when a lease is ready for generation.
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-thq-banners-elm3">
        <div className="home-thq-banner-manage-elm3">
          <div className="home-container16">
            <div className="home-thq-left-elm4">
              <span className="home-text33 sub-title">Cost Savings</span>
              <span className="home-text34 title">
                Maintain occupancy and reduce costs
              </span>
              <span className="home-text35">
                <span>
                  LeaseLift helps fill potential vacancies and reduces the
                  workload of the transfer process for Community Assistants,
                  Leasing Staff, and Property Managers.
                </span>
                <br></br>
              </span>
            </div>
            <img
              alt="image"
              src="/Logos/copy%20of%20post%20relet(7)-modified-500h.png"
              className="home-image5"
            />
          </div>
        </div>
      </section>
      <section className="home-thq-integrations-elm">
        <div className="home-thq-centered-container-elm">
          <div className="home-thq-heading-elm1">
            <span className="home-text38 sub-title">Integrations</span>
            <span className="home-text39 title">
              Integrated with the tools you love
            </span>
            <span className="home-text40">
              LeaseLift integrates with your property management software to
              make transfers seamless and efficient.
            </span>
          </div>
          <div className="home-thq-pills-container-elm">
            <div className="home-thq-pills-elm">
              <div className="home-container17">
                <YouTube pastedImageSrc="https://s3.amazonaws.com//bluesky_portal_prod/uploads/redactor_images/1597157884.2094758_Yardi__Primary__Gradient_650w.png"></YouTube>
                <YouTube pastedImageSrc="https://s.yimg.com/ny/api/res/1.2/CVvCJGIjb5KL3fVh1eIoRg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD0zMzM-/https://media.zenfs.com/en/globenewswire.com/65d027ff33e64e45f3f262cb1a804880"></YouTube>
                <YouTube pastedImageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/AppFolio%2C_Inc._Wordmark%2C_2021.svg/2560px-AppFolio%2C_Inc._Wordmark%2C_2021.svg.png"></YouTube>
                <div className="home-container18">
                  <div className="home-container19">
                    <YouTube
                      youTubeId="YouTube"
                      pastedImageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png"
                    ></YouTube>
                  </div>
                </div>
                <YouTube pastedImageSrc="https://www.teksystems.com/cdn-cgi/image/height=479,width=1796,quality=95,format=webp/https://www.teksystems.com/-/media/teksystems/images/logos/aws-casestudies/entrata-ref-1.jpg?iar=0&amp;rev=315eb30a2ff440189af65f001ec98e5c&amp;hash=6A6E990DF20D80DC383F688137CFFD83"></YouTube>
              </div>
              <div className="home-container20"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-thq-action-bar-elm">
        <div className="home-thq-action-elm">
          <div className="home-thq-heading-elm2">
            <span className="home-text41 title">
              <span>Automate your transfer workflow with LeaseLift</span>
              <br></br>
            </span>
            <span className="home-text44">
              Let&apos;s hop on a quick call to see if LeaseLift makes sense for
              your property. Schedule a quick call below and we&apos;ll figure
              out how we can best help you and your team. 
            </span>
            <a
              href="https://calendly.com/jwyatt-leaselift/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link4"
            >
              <div className="home-thq-book-with-calendly-elm">
                <span className="home-text45">Book with Calendly 📅</span>
              </div>
            </a>
          </div>
          <div className="home-thq-images-elm"></div>
        </div>
      </section>
      <Footer3
        link1={
          <Fragment>
            <span className="home-text46">Resident Site</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text47">Calendly Link</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text48">LeaseLift.app</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text49">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text50">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text51">Privacy Policy</span>
          </Fragment>
        }
      ></Footer3>
    </div>
  )
}

export default Home
