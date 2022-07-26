const deps = require('../package.json').dependencies;

const { ModuleFederationPlugin } = require('webpack').container;

const webpackConfigPath = 'react-scripts/config/webpack.config';
const webpackConfig = require(webpackConfigPath);

const override = (config) => {
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        movies:
          process.env.NODE_ENV === 'production'
            ? process.env.REMOTE_PRODUCTION_APP_ONE
            : process.env.REMOTE_DEV_APP_ONE,
        tv:
          process.env.NODE_ENV === 'production'
            ? process.env.REMOTE_PRODUCTION_APP_TWO
            : process.env.REMOTE_DEV_APP_TWO
      },
      exposes: {},
      shared: {
        ...deps,
        react: { singleton: true, eager: true, requiredVersion: deps.react },
        'react-dom': {
          singleton: true,
          eager: true,
          requiredVersion: deps['react-dom']
        }
      }
    })
  );

  config.output.publicPath = 'auto';

  return config;
};

require.cache[require.resolve(webpackConfigPath)].exports = (env) =>
  override(webpackConfig(env));

module.exports = require(webpackConfigPath);
