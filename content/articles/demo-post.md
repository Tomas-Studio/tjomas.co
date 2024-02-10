---
title: 'Generate Swagger Documentation for a Nest.js API'
description: 'How to generate Swagger Documentation for a Next.js API' 
dateModified: "2024-02-05"
datePublished: "2024-02-06"
tags:
  - nest
  - api
  - nuxt
featured: true
---

This post teaches you how to generate Swagger documentation for your Next.js API. You also learn how to generate the OpenAPI Specification required by Swagger.
<!--more-->
In simple terms, an OpenAPI Specification is a document describing the structure of a REST API and how to interact with it. It contains information such as:

- the endpoints and their associated HTTP method
- a description of those endpoints
- the optional and required parameters
- authentication methods
- and the responses

On the other hand, Swagger Documentation _(Swagger UI is the correct name)_ is part of a suite of open-source tools used to interact with the OpenAPI Specification. 

Swagger UI generates an interactive web interface _(documentation)_ for the provided API, and it uses the OpenAPI Specification to do it.


![The image shows the Swagger UI (documentation) for the public Documenso API.](/img/openapi.webp)

## How to generate OpenAPI Specification

The first step is to generate the OpenAPI Specification. It's important to mention that this post shows a Next.js API built with ts-rest. 

With `ts-rest` you can seamlessly generate an OpenAPI Specification as follows:

``` ts [/server/contract.ts]
import { generateOpenApi } from '@ts-rest/open-api'

import { ApiContractV1 } from './contract'

export const OpenAPIV1 = generateOpenApi(
  ApiContractV1,
  {
    info: {
      title: 'The title of the ', // [!code --]
      title: 'The title of the API', // [!code ++]
      version: '1.0.0',
      description: 'The description of the API', // [!code highlight]
    },
  },
)
```

You only need to provide an API contract and some information about your API.

The API contract, `ApiContractV1`, describes the API structure, request and response formats, and how to authenticate your API calls, among others.

For more information about contracts, read this section about API contracts in ts-rest.

Now that you have the OpenAPI spec, you can create an API route to return it in JSON format. The following code snippet shows you how to do it using the "Pages" router, but you can adapt it for the "App" router.

### How to generate OpenAPI

> Note: The code is extracted from the Documenso project, which uses both the "Pages" and "App" routes for APIs. Feel free to adjust the code so it works with your code

Read more of my [articles](/articles)

