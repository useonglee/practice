import { findUp } from "find-up";
import { config } from "dotenv";
import { realpathSync, writeFileSync, copyFileSync } from "fs";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export async function parseDotenv(appEnv) {
  // dotenv 파싱
  const envFilePath = await findUp(`.env.${appEnv}`);

  const parsedEnv = config({ path: envFilePath }).parsed || {};

  return parsedEnv;
}

export function writeEnv(parsedEnv) {
  // 파싱 된 내용을 /public/__ENV.js에 출력
  const scriptFilePath = `${realpathSync(process.cwd())}/public/__ENV.js`;

  writeFileSync(scriptFilePath, `window.__ENV = ${JSON.stringify(parsedEnv)}`);
}

export async function copyEnv(appEnv) {
  // 파싱 대상 파일은 '.env'파일로 복사
  const envFilePath = await findUp(`.env.${appEnv}`);
  const dotenvFilePath = `${realpathSync(process.cwd())}/.env`;

  copyFileSync(envFilePath, dotenvFilePath);
}

yargs(hideBin(process.argv))
  .command(
    "next-env",
    "Create Next.js runtime environment js",
    function builder(y) {
      return y.option("env", {
        alias: "e",
        type: "string",
        description: "Environment name(ex: alpha, beta, dev)",
      });
    },
    async function handler(args) {
      const appEnv = args.e || args.env || "dev";

      const parsedEnv = await parseDotenv(appEnv); // dotenv 파싱
      writeEnv(parsedEnv); // 환경 변수 스크립트 파일 생성
      await copyEnv(appEnv); // .env 파일 복사

      return parsedEnv;
    }
  )
  .parse();
