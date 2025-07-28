/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.themealdb.com"],
  },
  async redirects() {
    return [
      //Basic redirect
      {
        source: "/products/addProducts",
        destination: "/dashboard/products/addProducts",
        permanent: true,
      },
      //Wildcard path matching
      // {
      //   source: "/blog/:slug",
      //   destination: "/news/:slug",
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
