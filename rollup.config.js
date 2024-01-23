import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "./index.tsx",
  output: [
    {
      file: "./dist/bundle.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "./dist/bundle.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    // 바벨 트랜스파일러 설정
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),

    // 타입스크립트
    typescript(),

    nodeResolve(),
    commonjs({ extensions: [".js", ".ts", ".jsx", ".tsx"] }),
    // 공백제거, 용량 관리
    terser(),
  ],
};
