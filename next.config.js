/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        appDir: true,
        serverComponentsExternalPackages: ["mongoose"]
    },
    sassOptions:{
        includePaths: [__dirname, 'styles']
    }
}

module.exports = nextConfig
