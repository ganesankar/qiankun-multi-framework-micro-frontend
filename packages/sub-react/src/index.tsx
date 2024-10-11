import './public-path'
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
let appPath = "/";
if ((window as any).__POWERED_BY_QIANKUN__) {
  appPath = "/sub-react"
}

let root: any;
function render(props: any) {
  const { container } = props
  const dom = container ? container.querySelector('#root') : document.getElementById('root')
  root = createRoot(dom)
  root.render(
    <BrowserRouter basename={appPath}>
      <App/>
    </BrowserRouter>
  )
}

// Determine whether it is running independently in a qiankun environment or a non-qiankun environment.
if (!(window as any).__POWERED_BY_QIANKUN__) {
  render({});
}

//Each life cycle
// Bootstrap will only be called once when the micro application is initialized. The mount hook will be called directly the next time the micro application re-enters, and bootstrap will not be triggered repeatedly.
export async function bootstrap() {
  console.log('react app bootstraped');
}

// The mount method will be called every time the application is entered. Usually we trigger the application's rendering method here.
export async function mount(props: any) {
  console.log(props)
  props.onGlobalStateChange((state:any, prev:any) => {
    // state: state after change; prev state before change
    console.log(state, prev);
    //Store this state in our sub-application store
  });
  props.setGlobalState({ count: 2 });
  render(props);
}

// The method that the application will call every time it is cut out/uninstalled. Usually here we will uninstall the application instance of the micro application.
export async function unmount(props: any) {
  root.unmount();
}

