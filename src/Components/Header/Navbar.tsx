import React from 'react';
import './Header.scss'

class Navbar extends React.Component {
  render(): React.ReactElement {

    const links = ['Home', 'Link'];
    const listOfLink = links.map((link, index) => {
      return (
        <li key={'li' + index} className={'nav-item'}>
          <a key={'a' + index} className={'nav-link'} href="">{link}</a>
        </li>
      );
    });

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="">My Vocabulary</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"> </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {listOfLink}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;

