import { catConfig } from '@/config/cat';
import Script from 'next/script';
import React from 'react';

export default function OnekoCat() {
  if (!catConfig.enabled) {
    return null;
  }

  return <Script src="/oneko.js" data-cat="/oneko.gif" />;
}
