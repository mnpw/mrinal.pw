const path = require('path')
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin')

module.exports = {
    webpack(config, { isServer }) {
        config.output.publicPath = '/_next/';

        config.experiments = {
            syncWebAssembly: true,
        };

        config.plugins.push(
            new WasmPackPlugin({
                crateDirectory: path.resolve(__dirname, 'rust'),
                args: '--log-level warn',
                extraArgs: '--no-typescript',
            }),
        )

        if (isServer) {
            config.output.webassemblyModuleFilename =
                './../static/wasm/[modulehash].wasm'
        } else {
            config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm'
        }

        config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm'

        config.module.rules.push({
            test: /\.wasm$/,
            type: 'webassembly/sync',
        });

        // return config;
    }
}