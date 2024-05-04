import createMDX from "@next/mdx";
import { withPlausibleProxy } from "next-plausible";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX();
const withPlausible = withPlausibleProxy();

export default withPlausible(withMDX(nextConfig));
