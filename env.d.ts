declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT?: string;
            MONGO_URI: string;
            JWT_SECRET: string;
            JWT_LIFETIME: string;
        }
    }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export { }