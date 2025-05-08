import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-amber-400 text-black rounded-2xl p-4 m-2">
        Tailwind Work Properly Now
      </h1>
      <article class="rounded-xl border border-gray-700 bg-gray-800 p-4">
        <div class="flex items-center gap-4">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            class="size-16 rounded-full object-cover"
          />

          <div>
            <h3 class="text-lg font-medium text-white">Claire Mac</h3>

            <div class="flow-root">
              <ul class="-m-1 flex flex-wrap">
                <li class="p-1 leading-none">
                  <a href="#" class="text-xs font-medium text-gray-300">
                    {" "}
                    Twitter{" "}
                  </a>
                </li>

                <li class="p-1 leading-none">
                  <a href="#" class="text-xs font-medium text-gray-300">
                    {" "}
                    GitHub{" "}
                  </a>
                </li>

                <li class="p-1 leading-none">
                  <a href="#" class="text-xs font-medium text-gray-300">
                    Website
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <ul class="mt-4 space-y-2">
          <li>
            <a
              href="#"
              class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
            >
              <strong class="font-medium text-white">Project A</strong>

              <p class="mt-1 text-xs font-medium text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                consequuntur deleniti, unde ab ut in!
              </p>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="block h-full rounded-lg border border-gray-700 p-4 hover:border-pink-600"
            >
              <strong class="font-medium text-white">Project B</strong>

              <p class="mt-1 text-xs font-medium text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente cumque saepe sit.
              </p>
            </a>
          </li>
        </ul>
      </article>

      <div>
        <a href="#" class="group relative block bg-black">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
            class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
          />

          <div class="relative p-4 sm:p-6 lg:p-8">
            <p class="text-sm font-medium tracking-widest text-pink-500 uppercase">
              Developer
            </p>
            <p class="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>
            <div class="mt-32 sm:mt-48 lg:mt-64">
              <div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p class="text-sm text-white">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Omnis perferendis hic asperiores quibusdam quidem voluptates
                  doloremque reiciendis nostrum harum. Repudiandae?
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default App;
