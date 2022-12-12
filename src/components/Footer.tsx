import * as React from 'react';
import { AUTHOR_NAME, CHANGELOG_URL, PROJECT_URL, WEBSITE_VERSION } from '../constants/general';

const Footer = () => (
  <>
    <div className="text-center">
      Developed by{' '}
      <a href={PROJECT_URL} rel="noopener noreferrer" title="GitHub page for repository" target="_blank">
        {AUTHOR_NAME}
      </a>{' '}
      with ❤️
    </div>
    <div className="text-center">
      Website version{' '}
      <a href={CHANGELOG_URL} rel="noopener noreferrer" title="Website changelog" target="_blank">
        {WEBSITE_VERSION}
      </a>
    </div>
  </>
);

export { Footer };
