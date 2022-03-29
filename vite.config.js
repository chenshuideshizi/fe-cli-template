const path = require('path')
const config = {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      },
      extensions: ['.js', '.vue', '.json']
    }
}
  
export default config
