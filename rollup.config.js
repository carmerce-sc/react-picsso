// rollup -c
import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";
import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    input: "./index.tsx",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: false,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: false,
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
      nodeResolve(),
      commonjs({ extensions: [".js", ".ts", ".jsx", ".tsx"] }),

      // 타입스크립트
      typescript(),

      // 공백제거, 용량 관리
      // terser(),
    ],
  },
  {
    input: "./@config/types/index.d.ts",
    output: [{ file: packageJson.types, format: "es" }],
    plugins: [dts()],
  },
];
