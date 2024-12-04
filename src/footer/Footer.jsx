import React from 'react';
import { injectIntl, intlShape } from '@edx/frontend-platform/i18n';
import { getConfig } from '@edx/frontend-platform';

import messages from './messages';

const Footer = ({ intl }) => (
  <footer
    role="contentinfo"
    className="footer">
    <div className="footer-top">
      <nav>
        <ol>
          <li>
            <a href={`${getConfig().LMS_BASE_URL}/privacy`}>
              {intl.formatMessage(messages['account.footer.privacyPolicyLinkLabel'])}
            </a>
          </li>
          <li>
            <a href={`${getConfig().LMS_BASE_URL}/tos`}>
              {intl.formatMessage(messages['account.footer.termsOfServiceLinkLabel'])}
            </a>
          </li>
          <li>
            <a href={`${getConfig().LMS_BASE_URL}/accessibility`}>
              {intl.formatMessage(messages['account.footer.accessibilityLinkLabel'])}
            </a>
          </li>
          <li>
            <a href={`${getConfig().LMS_BASE_URL}/help`}>
              {intl.formatMessage(messages['account.footer.helpLinkLabel'])}
            </a>
          </li>
        </ol>
      </nav>
    </div>
    <div className="copyright-site">{getConfig().FOOTER_URL} ©{new Date().getFullYear()}</div>
  </footer>
);

Footer.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Footer);