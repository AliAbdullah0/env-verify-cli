#!node

import path from 'path'
import { checkEnv } from '../env-checker.js'

const exampleEnvPath = path.join(process.cwd(),'.env.example')
const actualEnvPath = path.join(process.cwd(),'.env')

checkEnv(exampleEnvPath,actualEnvPath)