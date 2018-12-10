import React from 'react';

const Footer = () => {
  return (
    <div className="ui  vertical footer segment">
      <div className="ui center aligned container">
        <div className="ui stackable grid">
          <div className="eight wide column">
            <h4 className="ui header">Do a small bio here about me and include other sources </h4>
            <div className="ui link list">
              <a className="item" href="https://www.transifex.com/organization/semantic-org/" rel="noopener noreferrer" target="_blank">Change this to direct to my linked in</a>
              <a className="item" href="https://github.com/Semantic-Org/Semantic-UI/issues" rel="noopener noreferrer" target="_blank">Change to direct to my Github repos</a>
              <a className="item" href="https://gitter.im/Semantic-Org/Semantic-UI" rel="noopener noreferrer" target="_blank">Change to direct to my medium blogs</a>
            </div>
          </div>
          <div className="eight wide column">
            <h4 className="ui header">Include my Information here</h4>
            <div className="ui link list">
            {/*rel='noopener noreferrer' protects agains tabnabbing where a phishing site can hack that blank page and display their own content*/}
              <a className="item" href="https://github.com/Semantic-Org/Semantic-UI" rel="noopener noreferrer" target="_blank">Show my name </a>
              <a className="item" href="http://forums.semantic-ui.com" rel="noopener noreferrer" target="_blank">Show my email / or do a form where they can send me an email</a>
            </div>
          </div>
        </div>
        <div className="ui section divider"></div>
        <div className="ui horizontal small divided link list">
          <a className="item" href="http://semantic-ui.mit-license.org/" rel="noopener noreferrer" target="_blank">Free & Open Source (MIT)</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
