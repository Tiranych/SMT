const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin")
const withVanillaExtract = createVanillaExtractPlugin({outputCss: true, identifiers: process.env.NODE_ENV === 'development' ? 'debug' : 'short'});

/** @type {import('next').NextConfig} */
module.exports = withVanillaExtract({output: "export"})