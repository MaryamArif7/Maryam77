import React from 'react';

import Container from './Container';
import { footerConfig } from '@/config/Footer';

export default function Footer() {
  return (
    <Container className="py-16">
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm text-secondary text-center">
          {footerConfig.originalText} <b>{footerConfig.originalDeveloper}</b>
          <br />
          {footerConfig.adaptedText} <b>{footerConfig.currentDeveloper}</b>
          <br />
          &copy; {new Date().getFullYear()}. {footerConfig.copyright}
        </p>
      </div>
    </Container>
  );
}