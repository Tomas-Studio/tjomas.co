---
title: "Rethink Full-Stack Development: Is a Custom Backend the Best Choice?"
description: "This article covers the conventional way of building full-stack applications and why manually building your backend is not always the best choice. You'll see an alternative solution for your backend needs that can be used standalone or coupled with your custom-built backend."
author: "Tunji Olakunle"
dateModified: "2024-02-12"
datePublished: "2024-02-13"
tags:
  - api
  - backend
  - full-stack
featured: true
showToc: true
showTocAlways: false
type: "The Code Corner"
---

:toc

This article covers the conventional way of building full-stack applications and why manually building your backend is not always the best choice.
<!-- more -->
You'll see an alternative solution for your backend needs that can be used standalone or coupled with your custom-built backend.

## The issues with the traditional backend

The conventional approach to developing full-stack applications involves the tedious and time-consuming process of building the entire application from scratch.

The backend development requires setting and configuring servers, implementing the business logic, and managing databases. Building and maintaining a complex backend from scratch would take substantial resources. So why reinvent the wheel when you can use an existing solution that you can tailor to your needs with code? But more on that later.

It's important to mention that a custom-built backend might be the most appropriate solution in specific scenarios. However, in most cases, an existing solution that you can tailor to your needs through code is more than sufficient. It allows you to speed up the development process and move faster by automating the most tedious work. It also frees up resources so you can focus on business-critical tasks. Besides that, you do not need to choose one or the other. You can have the best of both worlds, as you will see later.

The main pain points are as follows:

- complex and lengthy development process
- a substantial amount of resources required
- slow time-to-market
- maintenance required
- scalability and security are difficult

## Headless API solutions

The alternative to custom-built backend applications are the Headless API solutions. A Headless API is an architectural design where the user interface (frontend) is decoupled from the business logic and data storage (backend). The backend exposes the data through an API. The frontend then uses the API to communicate with the backend.

There are multiple advantages to this approach:

1. The obvious one is the faster development process, since you only need to develop and focus on one part of the application - the frontend. The faster development process also enables you to reduce the time required to enter the market, which is essential in such a competitive landscape.
2. Since you are using an existing solution for your backend, you save valuable resources (finances and time) that you can use on other tasks that are more critical to the business.
3. Another advantage is that you have complete freedom when choosing which frontend technologies to use since the application parts are decoupled.
4. The Headless APIs are developed and maintained by teams of developers who focus exclusively on those APIs, which means these solutions might provide better security and scalability than a custom-built solution.

But now you might ask: "Where do I find these APIs?".

That's where Wix Headless comes into the picture. Wix recently released their Headless APIs, enabling developers to implement Wix's robust business solutions using composable APIs and SDK. You can use them with any tech stack across different platforms and devices.

Some of the current available Headless APIs are as follows:

- bookings - The "bookings" API enables you to integrate booking features into your app. It provides features like scheduling and managing appointments, syncing staff calendars, setting up automated reminders, and more.
- eCommerce - This API allows you to manage orders, inventory, shipping and finances from one central place. It provides secure payments, optimized checkouts and automated sales taxes.
- CMS - The CMS solution offers an API for creating and managing content.
- events - It allows you to build applications for hosting in-person or online events, sell tickets, manage guests, accept secure payments, and more.
- pricing plans - You can use this headless API to create a members-only platform and offer exclusive access.

You can check all APIs [link](https://drp.li/wix-solutions?ref=catalins.tech).

It's important to emphasize that you do not need to choose between the Headless APIs and a custom-built backend. Instead, you can have the best of both worlds since the Headless APIs can be integrated with other internal or 3rd party services.

## Customize the APIs

I do not believe in one-size-fits-all solutions. At one point, you will want to modify or extend the functionality through code. You can do that by using the [Wix Headless SDK](https://dev.wix.com/api/sdk/sdk-setup:-wix-headless/get-started?ref=catalins.tech).

You can use the SDK by installing the required packages:

- `@wix/api-client` - the package is required to create the API client and to set up the OAuth. When you create the API client, you must provide the modules you want to use (e.g. the eCommerce Headless API).
- `@wix/{api-name}` - the `api-name` should be replaced with the name of the Headless API you need (e.g. "@wix/ecom", "@wix/pricing-plans", "@wix/bookings" and so on). These packages return the modules you pass to the API client configuration and the ones that allow you to interact with the chosen Headless API.

That's all you need to interact with the Headless APIs.

## Headless API Examples

In this section, you will see various demos and their code. They are basic, and their sole purpose is to illustrate the basic usage of the Headless APIs.

### Headless CMS

One of the available Headless APIs is the CMS API which provides a user-friendly dashboard for creating and managing content. Let's say we have a landing page for the following APIs:

- bookings
- eCommerce
- events & tickets
- subscriptions

The app makes a request to the CMS backend to fetch information such as the title, slug, and description for each Headless API (see them at the bottom of the page). This is what the landing page looks like:

![Wix Landing Page](/post/wix.png)

And here's the code that fetches the data:

```js
import Link from 'next/link'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

import { OAuthStrategy, createClient } from '@wix/api-client'
import { items } from '@wix/data'

const myWixClient = createClient({
  modules: { items },
  auth: OAuthStrategy({
    clientId: `<your-client-id>`,
    tokens: JSON.parse(Cookies.get('session') || null)
  })
})

export default function Examples() {
  const [examples, setExamples] = useState([])

  async function fetchExamples() {
    const examples = await myWixClient.items.queryDataItems({ dataCollectionId: 'examples' }).ascending('orderId').find()
    setExamples(examples.items)
  }

  useEffect(() => {
    fetchExamples()
  }, [])

  return (
    <footer>
      {examples.map(example => (
        <Link href={example.data.slug} key={example._id}>
          <section>
            <h2>
              {example.data.title}
              {' '}
              <span>-&gt;</span>
            </h2>
            <p>{example.data.description}</p>
          </section>
        </Link>
      ))}
    </footer>
  )
}
```

The first step involves adding all the required imports at the top of the file. The next step is to create and configure the Wix API client. It requires you to specify the modules you want to use (`items` from the `@wix/data` package in this case) and the `clientId` for the `OAuth` strategy.

After that, you use the Wix client to fetch and display the data on the page. As the figure illustrates, it's a simple application. However, you can check a more complex application using the Headless CMS [here](https://github.com/wix/wix-cms-nextjs-template?ref=catalins.tech).

### Bookings API

Another API available is the bookings API, which enables you to integrate booking features into your applications. For example, you can set up flexible booking features based on location and availability, schedule or manage appointments, sync staff calendars, set up automated reminders and more.

The figure below illustrates an example using the bookings API, where users can select a service and a time slot.

![Wix Landing Page](/post/wix.png)

After you choose a service and a time slot, you are redirected to a new page where you need to enter your details for the purchase. Once all the details are entered, you can add the purchase to the cart or book it straight away.

In this case, I clicked the "Add to Cart" button, which took me to the cart page. You can enter a promo code or add a note on this page. Once you are done, you can click the "Checkout" button to finalize the purchase.

The code is similar to the previous example in the sense that you need to create the Wix client and pass the appropriate modules. After that, it's the usual React code.

```js
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

import { OAuthStrategy, createClient } from '@wix/api-client'
import { availabilityCalendar, services } from '@wix/bookings'
import { redirects } from '@wix/redirects'

const myWixClient = createClient({
  modules: { services, availabilityCalendar, redirects },
  auth: OAuthStrategy({
    clientId: `<your-client-id>`,
    tokens: JSON.parse(Cookies.get('session') || null)
  })
})

export default function Booking() {
  const [serviceList, setServiceList] = useState([])
  const [availabilityEntries, setAvailabilityEntries] = useState([])

  async function fetchServices() {
    const serviceList = await myWixClient.services.queryServices().find()
    setServiceList(serviceList.items)
  }

  async function fetchAvailability(service) {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const availability = await myWixClient.availabilityCalendar.queryAvailability({
      filter: { serviceId: [service._id], startDate: today.toISOString(), endDate: tomorrow.toISOString() }
    }, { timezone: 'UTC' })
    setAvailabilityEntries(availability.availabilityEntries)
  }

  async function createRedirect(slotAvailability) {
    const redirect = await myWixClient.redirects.createRedirectSession({
      bookingsCheckout: { slotAvailability, timezone: 'UTC' },
      callbacks: { postFlowUrl: window.location.href }
    })
    window.location = redirect.redirectSession.fullUrl
  }

  useEffect(() => { fetchServices() }, [])

  return (
    <main>
      <div>
        <h2>Choose a Service:</h2>
        {serviceList.map((service) => {
          return <section key={service._id} onClick={() => fetchAvailability(service)}>{service.name}</section>
        })}
      </div>
      <div>
        <h2>Choose a Slot:</h2>
        {availabilityEntries.map((entry) => {
          return <section key={entry.slot.startDate} onClick={() => createRedirect(entry)}>{new Date(entry.slot.startDate).toLocaleString()}</section>
        })}
      </div>
    </main>
  )
}
```

Even though the example application is quite basic, it demonstrates how valuable and powerful the headless APIs are. They provide many features out of the box without requiring you to do any backend work.

Moreover, it provides a visual interface for managing the backend data. In this example, you can add, edit or remove services using the Wix dashboard. It also enables you to accept payments and manage orders. As a result, one is not required to be a developer to manage the backend.

![The Wix dashboard](/post/wix-dashboard.png)

With that being said, you can check more complex applications using the Headless Bookings API here:

- Bookings app for a professional coach
- Bookings app for a personal trainer

### More examples

This article presented two example applications to illustrate the usage of the APIs. All the examples shown in this article, and some more, are available in this repository. Moreover, there are a handful of production-ready templates you can use as a starter. Check them out here. They are more complex, and thus, they show how to build a production-ready application using these APIs.

## Conclusion
The Headless APIs are excellent alternatives to building custom backend applications from scratch. However, you do not always have to choose between the two solutions. If you already have a custom-built backend, you can integrate these APIs into your existing backend application without requiring a total overhaul.

One of the most important benefits of using an existing solution is saving valuable resources such as finances and time. These resources can then be spent on more business-critical tasks.

In addition to that, these Headless APIs reduce or even eliminate the complex and lengthy development cycles. As a result, your product can reach the market sooner. The faster the time-to-market, the better.

Lastly, they are built and maintained by teams of experienced developers. They are made with scalability and security in mind. That means you do not have to worry when the business gets bigger and requires more resources & better security because they handle that for you.

In conclusion, whatever approach you take, you can be assured that these APIs will provide many benefits and save valuable resources.
