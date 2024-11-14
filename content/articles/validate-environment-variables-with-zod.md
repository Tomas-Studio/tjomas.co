---
title: "Validate Environment Variables With Zod"
description: "This article teaches you how to validate environment variables with Zod."
dateModified: "2024-02-13"
datePublished: "2024-02-14"
author: "Tunji Olakunle"
tags:
  - zod
  - validation
featured: true
showToc: true
showTocAlways: true
type: "The Code Corner"
---

:toc

This article teaches you how to validate environment variables with Zod.
<!-- more -->
Zod is a validation library that enables you to validate your data against a pre-defined schema. The schema defines the type of your data. For instance, if you have the `name` field and you want to make sure it's a string, you can create the schema as follows:

```ts
const nameSchema = z.string()
```

Alternatively, you can create an object schema, which is useful when you want to validate an object _(a `user` object in this case)_:

```ts
const userSchema = z.object({
  name: z.string(),
})
```

In short, you define the schema, and Zod ensures that the data matches that schema.

One of the benefits of validating environment variables is that it helps the developers working on the project understand what values those variables accept. Another benefit is that it eliminates the issue with `process.env`, where you don't know if the variable is defined or if it's misconfigured.

## Client and server schema

In frameworks like Next.js, you can't access environment variables in the browser by default. They are only available in the Node.js environment. The workaround they did was to allow developers to prefix "client-side" variables with NEXT_PUBLIC_.

As a result, we need to split the environment variables into 2 files:

- one file for the environment variables available to the browser
- one file for the other variables

### Client-side validation

Create a new file `clientEnvSchema.ts`, and add the following code snippet:

```ts [clientEnvSchema.ts]
import z from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_HOST_NAME: z.string().url().trim().optional(),
  NEXT_PUBLIC_VERCEL_URL: z.string().url().optional(),
})

export const envClientSchema = envSchema.parse({
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_HOST_NAME: process.env.NEXT_PUBLIC_HOST_NAME,
  NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
})
```

The above code starts by defining an object schema using Zod's object method. In this case, the environment variables being validated are:

- `NEXT_PUBLIC_SUPABASE_URL` - expected to be a valid URL string
- `NEXT_PUBLIC_HOST_NAME` - expected to be a valid URL string and is optional
- `NEXT_PUBLIC_VERCEL_URL` - also expected to be a valid URL string and is optional

After that, it calls the `parse` method on `envSchema` with an object that contains the actual values of the environment variables. The variables are fetched from `process.env` one by one. Otherwise, it throws an error.

The `parse` method then validates that the actual environment variables match the format specified in `envSchema`. If any validation fails, it will throw an error.

Lastly, the parsed and validated environment variables are exported as e`nvClientSchema` for usage in the client-side code. You can use them in your code as follows `envClientSchema.NEXT_PUBLIC_VERCEL_URL`.

### Server-side validation

The server environment variables are validated similarly. Create a new file `serverEnvSchema.ts` and add the following code:

```ts [serverEnvSchema.ts]
import z from 'zod'

const envSchema = z.object({
  PREVIEW_API_KEY: z.string().trim().min(1),
  PORT: z.number().default(3000),
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  DATABASE_URL: z.string().trim().min(1),
})

export const envServerSchema = envSchema.parse(process.env)
```

In this case, you can pass the `process.env` object to the `parse` method without destructuring it. Now you can use the environment variables `envServerSchema.NODE_ENV` in the server code.2

## Taking it a step further
Zod throws an error automatically when there is a problem with the environment variables, but it's not legible.

So, let's modify the code in the `serverEnvSchema.ts` file:

```ts [serverEnvSchema.ts]
import z from 'zod'

const envSchema = z.object({
  PREVIEW_API_KEY: z.string().trim().min(1),
  STRIPE_SECRET_KEY: z.string().trim().min(1),
  STRIPE_SIGNING_SECRET: z.string().trim().min(1),
  USER_INSERTED_TOKEN: z.string().trim().min(1),
  LOOPS_API_URL: z.string().url(),
  LOOPS_TOKEN: z.string().trim().min(1),
  PORT: z.number().default(3000),
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  DATABASE_URL: z.string().trim().min(1),
})

const envServer = envSchema.safeParse({
  PREVIEW_API_KEY: process.env.PREVIEW_API_KEY,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  STRIPE_SIGNING_SECRET: process.env.STRIPE_SIGNING_SECRET,
  USER_INSERTED_TOKEN: process.env.USER_INSERTED_TOKEN,
  LOOPS_API_URL: process.env.LOOPS_API_URL,
  LOOPS_TOKEN: process.env.LOOPS_TOKEN,
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: process.env.DATABASE_URL,
})

if (!envServer.success) {
  console.error(envServer.error.issues)
  throw new Error('There is an error with the server environment variables')
  process.exit(1)
}

export const envServerSchema = envServer.data
```
