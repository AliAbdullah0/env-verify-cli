import dotenv from 'dotenv';
import fs from 'fs';
import { resolve } from 'path';
import chalk from 'chalk';

function parseEnvFile(path) {
    if (!fs.existsSync(path)) return {};
    const envData = fs.readFileSync(path, 'utf-8');
    return dotenv.parse(envData);
}

export function checkEnv(examplePath, actualEnvPath) {
    let allGood = true;
    const requiredEnv = parseEnvFile(examplePath);
    const actualEnv = parseEnvFile(actualEnvPath);

    for (let key in requiredEnv) {
        if (!(key in actualEnv)) {
            allGood = false;
            console.log(chalk.red(`❌ Missing ${key} in ${actualEnvPath}`));
        } else {
            console.log(chalk.green(`✅ Found ${key} in ${actualEnvPath}`));
        }
    }

    if (allGood) {
        console.log(chalk.green(`\n✅ All environment variables are present!`));
    } else {
        console.log(chalk.yellow(`\n⚠️ Some environment variables are missing. Please check.`));
        process.exit(1);
    }
}
