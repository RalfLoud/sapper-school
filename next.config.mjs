import withBundleAnalyzer from '@next/bundle-analyzer';

const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});


/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  
};


export default withAnalyzer(nextConfig);