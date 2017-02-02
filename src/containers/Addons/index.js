
import React from 'react';
import Helmet from 'react-helmet';

export default function Addons() {
  return (
    <section>
      <Helmet title="Addons" />

      <h3>404 status codes</h3>
      <p>
        We&apos;ve made small changes to the react-router and Express settings. We added
        a catch-all route in the routes config to show a NotFound component when
        requesting a page/resource that does not exist. Since this will return
        a 200 OK status code we detect which component is returned when using SSR
        and set the status code to 404 when we know the component being rendered
        is the NotFound component.
      </p>

      <h3>Server side data fetching</h3>
      <p>
        When we use server side rendering at CLEVER&deg;FRANKE we want the data of the
        current page to be preloaded. It usually does not make sense for us -
        working with data heavy applications - to return a shell app and
        update it in the componendDidMount later on.
      </p>
      <p>
        To tackle this problem we added a few lines of code in the Express routing methods
        which search for the static method fetchData whenever it loads a component
        through React-Router. In this method we allow you to write Promises.
        These promises are guaranteed to be resolved before sending down the HTML response.
        This means you can use the Redux dispatch API to call some
        redux action creators and populate your redux store for your first render.
      </p>
      <p>
        You can find the code responsible for handling these promises in
        <code>src/server/index.js</code> starting from line 65. If you want to see
        an example of how to use this in your components you can read the source of
        <code>src/containers/Addons</code>. Please be aware that in order to resolve
          these promises the component needs to be a top level component.
      </p>
    </section>
  );
}
