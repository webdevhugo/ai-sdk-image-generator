const isDev = process.env.NODE_ENV === "development";

if (isDev) {
  require("./proxy-setup");
}

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
