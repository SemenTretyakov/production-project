import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './build.loaders';
import { buildPlugins } from './build.plagins';
import { buildResolvers } from './build.resolvers';
import { buildDevServer } from './build.devServer';

export function buildWebpackConfig(
	options: BuildOptions
): webpack.Configuration {
	const { mode, paths } = options;
	return {
		mode,
		entry: paths.entry,
		output: {
			path: paths.build,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options),
		},
		resolve: buildResolvers(),
		devtool: options.isDev ? 'inline-source-map' : undefined,
		devServer: options.isDev ? buildDevServer(options) : undefined,
	};
}
