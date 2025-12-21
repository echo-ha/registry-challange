## 🚀 Running this app

```bash
npm i
npm run dev # dev mode
npm start # run production build / dist
```

## 👨🏻‍🔬 APIs and research

All endpoints below extend the same base - `https://hub.docker.com/v2`,  
DockerHub's official API

### `/search/repositories`

This was the first API I actually needed, for the search mechanism.

I started by going through [DockerHub's official API docs](https://docs.docker.com/reference/api/hub/latest/),  
and there's not a single API to "search" repos.

There's a "get all repos in namespace", or "get specific repo that you already know the namespace + name of",  
but there's no "search".

So I went to DockerHub UI and looked through the network tab, and wasn't able to find a single  
fetch request that gets the actual entities in the page, not repos and nothing else down the line (like tags).

I guess a security benefit of having SSR is that 3rd parties can't easily discover your API.

Third option was to ask my cursor chat, which suggested this API.  
It worked - and was exactly what I need.  
I found it weird that it's not documented, so asked for resources, he provided a few StackOverflow threads about it.  
Honestly, that was enough for me.  
✅ Official API  
✅ Completely public

It worked with a specific text to search, and even had the option to sort by stars or downloads.  
Since the homepage needs to load with the top 10 most popular, I need a wildcard, so I just tried using `*` as text and it worked.

Also, I needed descending order, so I just added a `-` before the sort query param, and that just worked too.

### `/orgs/{orgName}`

I needed this API to implement a fallback mechanism for the repo logo.  
The idea was to do:

1. repo logo if available
2. org / namespace logo if available
3. default svg (in assets folder)

I use the `gravatar_url` as the src.

I was actually able to discover this API via DockerHub's UI.  
I noticed that in some repos they render the image of the org,  
I looked through the network tab, and there it was.

I also noticed in the API docs that they have an [extension / sub endpoint of this API](https://docs.docker.com/reference/api/hub/latest/#tag/org-settings/paths/~1v2~1orgs~1%7Bname%7D~1settings/get), which further "strengthened" the notion that DockerHub has useful public APIs not listed in the docs (like the previous one).

### `namespaces/{namespace}/repositories/{repo}`

[fully documented](https://docs.docker.com/reference/api/hub/latest/#tag/repositories/operation/GetRepository) 🥳  
So easy.

This one is mainly used to extract all data needed in the single repository page, excluding tags data.

Funnily enough, I also discovered this API - `repositories/{namespace}/{repo}`, which seems to be the exact same, just undocumented.

I opted for the documented one as there's less chance it'd just stop being public.

## `/namespaces/{namespace}/repositories/{name}/tags`

[fully documented](https://docs.docker.com/reference/api/hub/latest/#tag/repositories/operation/ListRepositoryTags) 🥳

## 🔑 Design Decisions

#### Relying on undocumented APIs.

Both `search/repositories` and `/orgs/{orgName}` are undocumented.  
Despite the fact that DockerHub themselves probably use them, the fact that they're not documented means there's  
absolutely no guarantee that it'd be up by tomorrow.

However, I decided to use them for mainly 2 reasons:

1. They were exactly what I need, and moving fast 🏎️
2. I really doubt they're gonna take these down or dramatically change these,  
   as they know a ton of services probably rely on these APIs despite being undocumented

### Vanilla-Extract + Radix UI

I really like the usage of CSS in JS, but it's pretty unanimously considered a bad practice (requires compute and less efficient),  
so I searched for something with similar usage, without the drawbacks.

Vanilla Extract provides the devX I wish for, but pre-compiles the CSS.

As for other solutions like Tailwind, I really dislike heavy reliance on CSS / classnames / deep contextual lib knowledge

Regarding Radix UI, I wanted a minimal component library, and opted for a headless one,  
and this was one I hadn't tried yet.

### React-Query

Best practice, nothing but good DevX, UX, trivial implementation and works well with React, performant.  
If in the future we'd wanna be more efficient with our requests, we can utilize the staleTime mechanism even more.  
And comes with other utilities like `useInfiniteScroll`.

Generally, the decision of being "greedy" and not relying on the cache completely is something I think is best practice.  
Fetch as much as you can / allowed to - then optimize from there if needed.

### Project layout

1. `api` - folder is our "ORM", right now only DockerHub's there
2. `stores` - is for RQ custom hook building, which is best practice too.  
   It basically replaces the need for "real" stores, and is what's holding / managing our entities.
3. `pages` - components that for both paths we manage in our react router, the 2 views essentially - repos search and repo details
4. `components` - all components. I'm really in favour for throwing all the components in 1 folder (without nesting them dirs), as you won't really know what might be useful for someone else in the future.  
   Maybe in the future when the app grows we could separate the bare bones UI components to a separate lib / package.

## 📖 Lessons and Challenges

1. Cursor

This was actually my first time using an agent based IDE (yeah I'm late I know shush).  
Used Cursor for this home assignment, thought it was a good opportunity to learn the basics of (dare I say) vibe coding.

2. SO MUCH UNDOCUMENTED USEFUL API

Who knew there are such useful APIs of big respected sources which are just undocumented?  
In my previous workplace, I reverse engineered an API to replicate a feature (reverse backend),  
but it was clear to me why it's not documented, as HashiCorp wouldn't want anyone to copy their feature.

But useful APIs? like search all the DockerHub repos? with wildcards? and sorting? and pagination?  
Sheesh

I can say a bunch of stuff like "LLMs are a good source of hard to find / undocumented info ", or "if you wanna know more about how someone else implemented something, copy them / reverse engineer it",  
but I think that in the sense of the APIs, my biggest surprise lesson was to trust my intuition.

A few of the APIs features (like the wildcard mechanism for example), or the APIs themselves, were just educated guesses - by combining partial knowledge of public API and just REST know-how.

And it worked, thrice.  
I usually don't like to opt for undocumented stuff,  
but bottom line - this got shit done.

3. Circumventing CORS  
   Just a minor challenge, not really "hard",  
   but since the API is not "open" open, since it doesn't allow CORS.  
   For a few minutes I got stressed about auth but then I realized I could just use the FE backend to make these requests (and in production builds, an actual proxy)

## 🎨 Possible Improvements

1. Actually use a real reverse proxy for accessing the API, can be real simple
2. I think that vanilla-extract + Radix don't really work well together, so that's a tech debt in my book
3. More efficient UI, can utilize prefetches (pretty easily too - real simple with RQ).
   1. You know what give me a minute
   2. I just implemented prefetching when hovering over a repo card, the details are prefetched.
4. I would make the RQ implementation more robust and future proof, with https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories (a must in team projects and not home assignments)
