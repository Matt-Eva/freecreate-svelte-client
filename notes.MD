## Sveltekit notes

- To run browser only code in sveltekit, we just need to import the browser environment variable, check if its truthy, then run whatever code we need inside of it.
- This is true for any code that doesn't directly bind to a DOM element - e.g. setting or checking state / context and fetching data
- however, if we need to do something that interacts directly with the DOM - like registering our quill.js editor - then we need to wrap our code within an onMount hook.
