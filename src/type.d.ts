interface AnyObject {
    [x: string]: any
}

type potentialDate = Date | string | number

type AnyArray = any[]

type AnyFunction = (...args: any[]) => any

/**
 * PackageJson declaration type.
 * for import package.js as ESM without having to participate in compilation
 */
declare module '*/package.json' {
    export const name: string
    export const version: string
    export const description: string
    export const keywords: string[]
    export const homepage: string
    export const bugs: { url?: string, email?: string }
    export const repository: { type?: 'git' | 'svn', url?: string }
    export const license: string
    export const author: string | { name?: string, email?: string, url?: string }
    export const main: string
    export const types: string
    export const bin: string | Record<string, string>
    export const files: string[]
    export const scripts: Record<string, string>
    export const dependencies: Record<string, string>
    export const devDependencies: Record<string, string>
    export const engines: { node: string }

}