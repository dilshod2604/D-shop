/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, 
    swcMinify: true,       
    images: {
      domains: ['example.com'], 
    },
    env: {
      CUSTOM_VARIABLE: process.env.CUSTOM_VARIABLE, 
    },
    webpack: (config) => {
      config.module.rules.push({
        test: /\.mp4$/,      
        type: 'asset/resource'
      });
      return config;
    },
  };
  
  export default nextConfig;
  