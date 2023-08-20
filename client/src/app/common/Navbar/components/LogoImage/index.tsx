import Link from 'next/link';
import React from 'react';

const LogoImage = () => (
  <div className="font-black text-lg">
    <Link href="/">
      <span className="text-primary">3State</span>
    </Link>
  </div>
);

export default LogoImage;
