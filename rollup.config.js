import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import image from "@rollup/plugin-image"; // Import the plugin

export default {
    input: "src/index.ts",
    output: [
        {
            file: "dist/index.js",
            format: "cjs",
            sourcemap: true,
        },
        {
            file: "dist/index.esm.js",
            format: "esm",
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        image(), // Add the plugin to the plugins array
        typescript({ tsconfig: "./tsconfig.json" }),
        babel({
            babelHelpers: "bundled",
            exclude: "node_modules/**",
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        }),
        postcss(),
        terser(),
    ],
};
