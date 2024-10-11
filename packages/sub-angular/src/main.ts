import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ApplicationRef, enableProdMode } from "@angular/core";
import { environment } from "./environments/environment";


if (environment.production) {
  enableProdMode();
}

let app!: ApplicationRef;

async function render() {
  bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err)).then((applicationRef) => {
    app = applicationRef as ApplicationRef;
  });
}

if (!(window as any).__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(props: Object) {
  console.log(props);
}

export async function mount(props: Object) {
  render();
}

export async function unmount(props: Object) {
  console.log(props);
  app.destroy();
}
