/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp4|webm)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            outputPath: 'static/media',
            name: '[name].[hash].[ext]',
            esModule: false,
          },
        },
      });
  
      return config;
    },
  };
  
export default nextConfig;
  