import React from 'react';
import "../assets/css/LoginForm.css"
import concert from "../assets/svg/concert.jpg";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'member',
    };
  }

  handleTabChange = (tab) => {
    this.setState({ currentTab: tab });
  };

  render() {
    const { currentTab } = this.state;

    return (
      <div>
        <div className="overlay"></div>
        <div className="modal position">
        <img
            src="https://res.cloudinary.com/dtlqjqyec/image/upload/v1694768480/logo_mlrwvc.png"
            className="logo"
            alt="Logo"
          />
          <div className="brand login-text">
            Sign in with your email or username
            <br />
            <br />
            <strong>OR</strong>
            <br />
            <br /> Contact MR.Shoiab for latest movie review.
            ABC@gmail.com
          </div>
          <button className="brand login flat-button facebook">
            Continue with Google
          </button>
          <div className="form position">
            <a href="#">
              <button className="close">x</button>
            </a>
            <div className="form-inner">
              <div className="tabs">
                <ul className="tabs">
                  <li
                    className={currentTab === 'member' ? 'current' : ''}
                    data-tab="member"
                  >
                    <a
                      href="#member"
                      onClick={() => this.handleTabChange('member')}
                    >
                      I am a member
                    </a>
                  </li>
                  <li
                    className={currentTab === 'new' ? 'current' : ''}
                    data-tab="new"
                  >
                    <a href="#new" onClick={() => this.handleTabChange('new')}>
                      I am new here
                    </a>
                  </li>
                </ul>
                <div
                  className={`form-content ${
                    currentTab === 'member' ? 'current' : ''
                  }`}
                  id="member"
                >
                  <form id="sign-in">
                    <input
                      type="email"
                      name="login-id"
                      id="user"
                      placeholder="USERNAME / EMAIL"
                      className="field"
                      required
                    />
                    <input
                      type="password"
                      name="usrpw"
                      placeholder="PASSWORD"
                      className="field"
                      required
                    />
                    <div className="clear"></div>
                    <input
                      type="checkbox"
                      name="rmbrme"
                      id="custom-check"
                      className="check"
                    />
                    <label
                      htmlFor="custom-check"
                      className="check-label secondary-text"
                    >
                      Remember me
                    </label>
                    <a href="/password">
                      <span className="forgot secondary-text">
                        Forgot password?
                      </span>
                    </a>
                    <button
                      id="submit"
                      name="sign-in-button"
                      className="flat-button signin"
                    >
                      Log In
                    </button>
                  </form>
                </div>
                <div
                  className={`form-content ${
                    currentTab === 'new' ? 'current' : ''
                  }`}
                  id="new"
                >
                  <form id="reg">
                    <input
                      type="text"
                      name="login-id"
                      id="user"
                      placeholder="USERNAME"
                      className="field"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      id="usremail"
                      placeholder="EMAIL ADDRESS"
                      className="field"
                      required
                    />
                    <input
                      type="password"
                      name="usrpw"
                      placeholder="PASSWORD"
                      className="field"
                      required
                    />
                    <button
                      id="submit"
                      name="register-button"
                      className="flat-button signin"
                    >
                      Sign Up
                    </button>
                    <div className="clear"></div>
                    <input
                      type="checkbox"
                      name="promo"
                      id="promo-check"
                      className="check"
                      checked
                    />
                    <label
                      htmlFor="promo-check"
                      className="check-label secondary-text promo"
                    >
                      I'd like to receive special offers and discount coupons.
                      No spam!
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;