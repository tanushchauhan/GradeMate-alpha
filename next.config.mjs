/** @type {import('next').NextConfig} */
const nextConfig = {};

// fix image error if needed in future but most images will be removed
// const nextConfig = {
//     images: {
//       domains: ["localhost"],
//       remotePatterns: [
//         {
//           protocol: "https",
//           hostname: "cdn.sanity.io",
//           port: "",
//         },
//       ],
//     },
//   };

export default nextConfig;
