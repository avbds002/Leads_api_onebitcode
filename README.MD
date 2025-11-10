<h1>Setup projeto</h1>

1. npm install --save @prisma/client cors express zod

2. npm install --save-dev @types/cors @types/express @types/node prisma tsx typescript

3. npx tsc --init

<h3>Scripts</h3>

<b>Package Json</b>
"scripts": {
"dev": "tsx watch ./src/server.ts",
"build": "tsc",
"start": "node ./build/server.js"
},

<b>Typescript</b>
{
"compilerOptions": {
"target": "es2016",
"module": "commonjs",
"outDir": "./build",
"esModuleInterop": true,
"forceConsistentCasingInFileNames": true,
"strict": true,
"skipLibCheck": true
}
}

<h3>Inicializando o prisma</h3>
npx prisma init --datasource-provider postgresql

Após definir o dotenv, schema e os models gere o <b>npx prisma migrate dev</b>
