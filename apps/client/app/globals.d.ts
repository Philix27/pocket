declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_PROJECT_ID: string;
    [key: string]: string | undefined;
  }
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.png' {
  const src: string;
  export default src;
}
