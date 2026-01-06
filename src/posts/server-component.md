---
title: Magic behind server components
date: 6 January, 2026
tags: ["React.js", "web-dev"]
---

# Magic behind server components

When I first started building websites, I fetched the data using GET requests after the initial load of the page. The flow is similar to:

```js
function ClientComponent() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function loadData() {
      const res = await fetch("/resource");
      const resJson = await res.json();
      setData(data);
    }

    loadData();
  }, []);

  return <div>{data}</div>;
}
```

So, it involved:

- retrieving the plain HTML page
- downloading javascript bundles
- sending a request to the backend to fetch the data
- receiving a json data from backend
- processing a response and rendering UI

Until I first came across server components in [Next.js](https://nextjs.org/), I never really thought it was slow and there are different approaches to make it faster. After learning the basics from [Next.js's documentation](https://nextjs.org/docs/app/getting-started/server-and-client-components), my only understanding was `Server component is rendered on the server and client component is rendered on the browser`. Even though i didn't really understand why it was better, at that time, i prioritized most of the components to be server components and only made partial part of it to be client components when necessary (buttons/interactivity/react hooks/client js libraries).

## What makes server components better than client components?

### 1. Faster initial load

Instead of sending `GET` requests to the backend from the browser, it fetches the necessary data to render the page on the server. It eliminates the Round Trip Time (RTT) of the `GET` request.

### 2. Less javascript is sent to the browser

With server components, some functions and libraries are no longer needed to be sent to the user's browser. In addition, instead of running the javascript code on the client's device, it is run on the server. Thus, it enables faster load time on mobile/old devices.

## How to use server components in Next.js?

A component that doesn't need any interactivity and client side js libraries:

```js
export default async function Page() {
  const data = await fetchData();
  return <div>{data}</div>;
}
```

Directly passing a fetched data in server component into a client component:

```js
export default async function Page() {
  const data = await fetchData();
  return <ClientComponent data={data} />;
}
```
