import { Component, createEffect, Suspense } from "solid-js";
import { useRouteData } from "@solidjs/router";
import type { AboutDataType } from "./about.data";

export default function About() {
  const name = useRouteData<AboutDataType>();

  createEffect(() => {
    console.log(name());
  });

  return (
    <section class="">
      <div class="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200  dark:bg-gray-800 dark:border-gray-700">
        <div class="w-full mb-1">
          <h1 class="text-xl  text-gray-900 sm:text-2xl dark:text-white">
            About{" "}
            <Suspense fallback={<span>...</span>}>
              <span>&nbsp;{name()}</span>
            </Suspense>
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
      </div>
    </section>
  );
}
