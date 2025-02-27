import { Pokemon } from "./models/pokemon.js";

//* ------------------------------------------------ datos globales ------------------------------------------------ *\\

const language = "es";
const param = {
  headers: { "Content-type": "application/json; charset= UTF-8" },
  method: "GET",
};
const iconTypes = [
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14.5 12a2.5 2.5 0 0 1-5 0a2.5 2.5 0 0 1 5 0m7.5 0c0 5.52-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2s10 4.48 10 10m-2 0h-4c0-2.21-1.79-4-4-4s-4 1.79-4 4H4c0 4.41 3.59 8 8 8s8-3.59 8-8"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M198.844 64.75q-1.477-.001-2.97.094c-15.915 1.015-32.046 11.534-37.78 26.937c-34.072 91.532-51.085 128.865-61.5 222.876c14.633 13.49 31.63 26.45 50.25 38.125l66.406-196.467l17.688 5.968L163.28 362.5c19.51 10.877 40.43 20.234 62 27.28l75.407-201.53l17.5 6.53l-74.937 200.282c19.454 5.096 39.205 8.2 58.78 8.875L381.345 225.5l17.094 7.594l-75.875 170.656c21.82-1.237 43.205-5.768 63.437-14.28c43.317-53.844 72.633-109.784 84.5-172.69c5.092-26.992-14.762-53.124-54.22-54.81l-6.155-.282l-2.188-5.75c-8.45-22.388-19.75-30.093-31.5-32.47s-25.267 1.535-35.468 7.376l-13.064 7.47l-.906-15c-.99-16.396-10.343-29.597-24.313-35.626c-13.97-6.03-33.064-5.232-54.812 9.906l-10.438 7.25l-3.812-12.125c-6.517-20.766-20.007-27.985-34.78-27.97zM103.28 188.344C71.143 233.448 47.728 299.56 51.407 359.656c27.54 21.84 54.61 33.693 80.063 35.438c14.155.97 27.94-1.085 41.405-6.438c-35.445-17.235-67.36-39.533-92.594-63.53l-3.343-3.157l.5-4.595c5.794-54.638 13.946-91.5 25.844-129.03z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M22.472 28.76c107.552 68.108 207.02 121.53 322.01 133.68c40.707 4.3 47.814 34.94 31.675 70.102c-26.52 57.774 16.43 143.547 112.342 195.465c-5.983 27.987-46.316 51.545-71.16 43.272c-20.682-43.168-52.9-88.738-87.806-76.376c-71.394 25.286-144.915 30.663-194.836 3.448c66.227-8.987 129.273-26.595 184.8-54.342C219.18 359.013 100.407 359.4 55.4 309.038c91.057 3.638 164.862-5.6 247.26-26.224C192.912 272.707 72.247 252.64 38.277 185.35c80.977 25.247 189.57 34.646 263.032 35.158C186.86 191.675 32.936 112.722 22.47 28.76z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="1.13em" height="1em" viewBox="0 0 576 512"><path fill="currentColor" d="M173.2 0c-1.8 0-3.5.7-4.8 2C138.5 32.3 120 74 120 120c0 26.2 6 50.9 16.6 73c-22 2.4-43.8 9.1-64.2 20.5c-34.5 19.3-59.1 48.9-72 82.5c-.7 1.7-.5 3.7.5 5.2c2.2 3.7 7.4 4.3 10.6 1.3C64.2 254.3 158 245.1 205 324s-8.1 153.1-77.6 173.2c-4.2 1.2-6.3 5.9-4.1 9.6c1 1.6 2.6 2.7 4.5 3c36.5 5.9 75.2.1 109.7-19.2c20.4-11.4 37.4-26.5 50.5-43.8c13.1 17.3 30.1 32.4 50.5 43.8c34.5 19.3 73.3 25.2 109.7 19.2c1.9-.3 3.5-1.4 4.5-3c2.2-3.7.1-8.4-4.1-9.6C379.1 477.1 324 403 371 324s140.7-69.8 193.5-21.4c3.2 2.9 8.4 2.3 10.6-1.3c1-1.6 1.1-3.5.5-5.2c-12.9-33.6-37.5-63.2-72.1-82.5a168.8 168.8 0 0 0-64.2-20.5C450 170.9 456 146.2 456 120c0-46-18.5-87.7-48.4-118c-1.3-1.3-3-2-4.8-2c-5 0-8.4 5.2-6.7 9.9C421.7 80.5 385.6 176 288 176S154.3 80.5 179.9 9.9c1.7-4.7-1.6-9.9-6.7-9.9M240 272a48 48 0 1 1 96 0a48 48 0 1 1-96 0m-58.3 145.6c6.3-11.8 9.8-25.1 8.6-39.8c-19.5-18-34-41.4-41.2-67.8c-12.5-8.1-26.2-11.8-40-12.4c-9-.4-18.1.6-27.1 2.7c7.8 57.1 38.7 106.8 82.9 139.4c6.8-6.7 12.6-14.1 16.8-22.1M288 64c-28.8 0-56.3 5.9-81.2 16.5c2 8.3 5 16.2 9 23.5c6.8 12.4 16.7 23.1 30.1 30.3c13.3-4.1 27.5-6.3 42.2-6.3s28.8 2.2 42.2 6.3c13.4-7.2 23.3-17.9 30.1-30.3c4-7.3 7-15.2 9-23.5C344.3 69.9 316.8 64 288 64m138.9 246c-7.2 26.4-21.7 49.7-41.2 67.8c-1.2 14.7 2.2 28.1 8.6 39.8c4.3 8 10 15.4 16.8 22.1c44.3-32.6 75.2-82.3 82.9-139.4c-9-2.2-18.1-3.1-27.1-2.7c-13.8.6-27.5 4.4-40 12.4"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M23 18H1l7.25-9.67l2 2.67L14 6zm-11.5-5.33L14 16h5l-5-6.67zM5 16h6.5l-3.25-4.33z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="m227.7 25l-57.9 57.96L183.4 151h145.2l13.6-68.04l-32.8-32.84L282.5 64l16.3-24.53L284.3 25zM195 88.44L240 111l-4 17h-41zm122 0V128h-41l-4-17l32-16.05zM154 109.1l-22 11l10.6 17.1l-24.1-10.4L73 149.6v16l91.8-13.1zm204 0l-10.8 43.4l91.8 13.1v-16zm-152.4 60.1l-63.3 4.7l-6.6 1l-9.2 62.3l50.2 25.1l44.5-14.8l5.6 17l-51.5 17.2l-44.4-22.2l20.4 84.5l95.7 13.6V196.8zm100.8 0L265 196.8v160.8l95.7-13.6l20.4-84.5l-23.8 11.9l-19.6 38.6l-18.8-34.2l-33.7-11.3l5.6-17l44.5 14.8l50.2-25.1l-9.2-62.3l-6.6-1zm-189.6 8.4l-61.32 8.7l-30.04 40.1l3.64 25.5l25.38 10.4L33.09 280l6.47 45.3L103 312.7v-57.4zm278.4 0l13.8 77.6v57.4l52 10.4l13.7-13.7l11.9-82.9l-30.1-40.1l-28-4l-4.2 17.9l-9.9-19.9zM104.1 330.8L42.78 343l28 126l47.42-11.8zm303.8 0l-14.1 126.4l22.6 5.6l7.9-25.8l17.8 28.1L469.2 343zm-256 31.4L138.1 487h80.3l37.6-75.1l37.6 75.1h30.8l11.6-23l11.5 23h26.4l-13.8-124.8L256 377.1l-41.9-6l-6.1 34.4l-15.3-37.5z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.089 20.463s-6.575.893-2.754 7.139a5.27 5.27 0 0 0 4.357 2.282" stroke-width="1"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.142 23.86c-1.135.01-3.315.461-2.448 3.92c0 0 1.066 3.905 5.787 1.682m7.999-12.086s-8.852-1.46-7.11 6.671c1.036 4.837 3.667 5.41 5.578 5.111" stroke-width="1"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.968 16.6c-2.02-.601-7.363-1.499-6.674 6.119c.524 5.8 2.626 6.399 4.15 6.013" stroke-width="1"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.575 17.496s-7.542-5.503-7.07 4.966c.115 2.53.552 4.153 1.143 5.162l.017.028q.5.954.889 1.958c.194.628.373 1.986 2.138 1.597c.116-.025 1.759-.808 1.86-.867" stroke-width="1"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.119 19.077S28.234 13.46 28 23.159c-.056 2.345.257 3.873.759 4.847l.014.026q.416.915.726 1.871c.145.594.228 1.86 1.95 1.626c.21.117 2.011-.79 2.172-1.203" stroke-width="1"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.009 31.773a1.1 1.1 0 0 1-.574.175c-1.703.054-1.707-1.08-1.813-1.622a15 15 0 0 0-.598-1.73l-.012-.025c-.433-.912-.647-2.3-.449-4.382c.82-8.613 7.231-3 7.231-3s4.45 3.985-3.785 10.584m-22.317-1.889s.83.243 0 1.634m4.255-2.363s.83.243 0 1.634m4.498-2.056s.83.243 0 1.634" stroke-width="1"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.492 29.633c.706 1.179 2.146.21 2.146.21c3.479-2.934 1.03-4.779 1.03-4.779a4 4 0 0 0-.642-.371m-27.334 5.191l4.255-.729c1.567-.278 3.685-.279 4.498-.423c1.717.351 2.44.91 3.276 1.444" stroke-width="1"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12 2a9 9 0 0 1 9 9v8.62c0 1.83-1.966 2.987-3.565 2.099l-.363-.195c-1-.512-1.784-.68-2.889-.114l-.198.108a4 4 0 0 1-3.762.11l-.208-.11c-1.277-.73-2.166-.512-3.45.2c-1.6.89-3.565-.267-3.565-2.097V11a9 9 0 0 1 9-9M8.5 9a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m7 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"/></g></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M322.248 85.684L61.432 224.717l-41.145 109.94l7.233 3.85l153.673 81.8l308.495-164.215l-37.752-99.903zm119.035 95.187l25.11 66.45l-102.56 54.594L430.39 186.64l10.893-5.77zm-89.576 47.417L284.957 343.9l-41.67 22.182l72.195-118.62l36.225-19.175zM72.38 248.78l28.21 14.933l-54.012 54.012zm210.827 15.767L211.19 382.87l.26.16l-17.208 9.16l5.795-83.618zm-165.334 8.312l16.963 8.98l-60.445 60.445l-16.93-9.012zM181.42 306.9l-6.174 89.07l-54.1-28.798z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.856 22c12.222-3 5.378-15-2.933-20c-.978 3.5-2.445 4.5-5.378 8c-3.884 4.634-1.955 10 3.422 12c-.815-1-2.917-3.1-1.467-6c.5-1 1.5-2 1-4c.978.5 3 1 3.5 3.5c.815-1 1.66-3.1.878-5.5c6.122 4.5 3.622 9 .978 12" color="currentColor"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M400 320c0 88.37-55.63 144-144 144s-144-55.63-144-144c0-94.83 103.23-222.85 134.89-259.88a12 12 0 0 1 18.23 0C296.77 97.15 400 225.17 400 320Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M344 328a72 72 0 0 1-72 72"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M461.563 38.938C313.435 165.053 232.49 371.144 210.313 492.5h77.218c31.597-122.495 51.135-263.494 174.033-453.563zM78.375 91.374c52.397 62.796 102.31 132.45 142.094 199.28a1188 1188 0 0 1 20.81 36.408a956 956 0 0 1 26.095-58.282c-51.817-71.23-113.464-135.005-189-177.405zm391.188 133.72c-51.588 46.498-78.856 114.453-90.594 190.655c13.775 25.835 26.704 51.295 38.936 75.875h39.375c-25.25-71.46-11.537-162.36 12.283-266.53M67 240.437c72.962 73.26 120.794 188.6 80.094 250.78h45c4.494-25.12 11.34-53.633 20.687-84.25C194.338 322.68 131.42 242.927 67 240.44zm-32.875 87.937C87.145 409.31 95.83 453.34 75.063 490.97h67.5c-13.1-72.02-31.444-116.305-108.438-162.595zm300.938 45.594c-10.65 41.36-19.188 80.437-28.813 118.25h91.72c-19.144-38.286-39.92-78.392-62.908-118.25z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 15H6l7-14v8h5l-7 14z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path fill="currentColor" d="M45.983 48.787c.623.684 1.71.765 2.474-.04C53.244 43.74 56 37.02 56 29.678s-2.756-14.08-7.543-19.069c-.764-.824-1.85-.744-2.474-.06c-.624.704-.483 1.69.24 2.454c4.165 4.365 6.498 10.218 6.498 16.675s-2.333 12.29-6.497 16.655c-.724.765-.865 1.77-.241 2.454m-35.966 0c.624-.684.483-1.69-.241-2.454c-4.164-4.365-6.497-10.198-6.497-16.655s2.333-12.31 6.497-16.675c.724-.764.865-1.75.241-2.454c-.623-.684-1.71-.764-2.494.06C2.756 15.598 0 22.336 0 29.68c0 7.341 2.756 14.06 7.523 19.068c.784.805 1.87.724 2.494.04m30.153-5.35c.643.744 1.77.744 2.534-.12c3.34-3.622 5.23-8.429 5.23-13.639s-1.89-10.037-5.23-13.658c-.764-.845-1.891-.865-2.535-.1c-.643.724-.442 1.67.282 2.494c2.696 2.997 4.204 6.92 4.204 11.264c0 4.325-1.508 8.268-4.204 11.265c-.724.824-.925 1.75-.282 2.494m-24.34 0c.644-.744.443-1.67-.281-2.494c-2.696-2.997-4.204-6.94-4.204-11.265c0-4.345 1.508-8.267 4.204-11.264c.724-.825.925-1.77.281-2.494c-.643-.765-1.77-.745-2.554.1c-3.34 3.62-5.21 8.448-5.21 13.658s1.87 10.017 5.21 13.638c.784.865 1.91.865 2.554.12m5.633-5.733c.643-.724.362-1.63-.262-2.494c-1.207-1.509-1.81-3.44-1.81-5.532s.603-4.043 1.81-5.531c.624-.885.905-1.77.262-2.495c-.664-.764-1.871-.784-2.595.141a12.65 12.65 0 0 0-2.756 7.885c0 2.957 1.026 5.713 2.756 7.885c.724.905 1.93.885 2.595.141m13.074 0c.664.744 1.871.764 2.575-.14a12.53 12.53 0 0 0 2.756-7.886c0-2.957-1.006-5.712-2.756-7.885c-.704-.925-1.91-.905-2.575-.14c-.643.724-.362 1.609.262 2.494c1.146 1.528 1.79 3.44 1.79 5.531c0 2.092-.583 4.023-1.79 5.532c-.644.865-.905 1.77-.262 2.494M28 32.594c1.569 0 2.957-1.327 2.957-2.956c0-1.61-1.388-2.957-2.957-2.957c-1.59 0-2.957 1.348-2.957 2.957c0 1.63 1.368 2.957 2.957 2.957"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 50 50"><path fill="currentColor" d="M23 47.689v-6.342l-3.357 1.992L18 42.305v-2.229l5-2.986v-4.168l-4 2.451v-4.416l-4 2.094v5.99l-1.653 1.23L12 39.16v-4.012L6.426 38.27L4 37.271v-2.529l5.685-3.17L6 29.75v-2.32l2.123-1.127l5.214 3.068l3.612-2.084l-.082-.065l-3.665-2.123l3.568-2.228l-3.577-2.083L7.98 23.84L6 22.871v-2.307l3.542-1.978L4 15.533v-2.529l2.321-1.114L12 15.087v-4.076l1.485-1.127l1.943 1.18l-.056 6.105l3.673 2.122l.033-4.311L23 17.079v-4.167l-5-2.988V7.71l1.643-1.05L23 8.652V2.324L24.994 1L27 2.324v6.328l3.906-2.031L33 7.84v1.992l-6 3.08v4.167l4-2.267v4.534l4-2.084v-6.524l1.455-.866l1.545.865v4.167l5.842-3.08L46 13.042v2.359l-5.495 3.17L44 20.525v2.254l-1.83.996l-5.327-3.158l-3.679 2.346l3.549 2.228l-3.659 2.122l3.772 1.992l5.389-2.986L44 27.535v2.15l-3.32 1.887l5.32 3.17v2.49l-2.522 1.037L38 35.281v3.955l-1.52 1.049L35 39.236v-6.002l-4-2.213v4.168l-4-2.268v4.168l5 2.986v2.359l-1.647.904L27 41.348v6.342L24.994 49zm-1.466-22.597L23.42 28h3.514l1.613-2.908L26.843 22h-3.514z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1em" viewBox="0 0 640 512"><path fill="currentColor" d="M18.32 255.78L192 223.96l-91.28 68.69c-10.08 10.08-2.94 27.31 11.31 27.31h222.7c-9.44-26.4-14.73-54.47-14.73-83.38v-42.27l-119.73-87.6c-23.82-15.88-55.29-14.01-77.06 4.59L5.81 227.64c-12.38 10.33-3.45 30.42 12.51 28.14m556.87 34.1l-100.66-50.31A47.99 47.99 0 0 1 448 196.65v-36.69h64l28.09 22.63c6 6 14.14 9.37 22.63 9.37h30.97a32 32 0 0 0 28.62-17.69l14.31-28.62a32 32 0 0 0-3.02-33.51l-74.53-99.38C553.02 4.7 543.54 0 533.47 0H296.02c-7.13 0-10.7 8.57-5.66 13.61L352 63.96L292.42 88.8c-5.9 2.95-5.9 11.36 0 14.31L352 127.96v108.62c0 72.08 36.03 139.39 96 179.38c-195.59 6.81-344.56 41.01-434.1 60.91C5.78 478.67 0 485.88 0 494.2C0 504 7.95 512 17.76 512h499.08c63.29.01 119.61-47.56 122.99-110.76c2.52-47.28-22.73-90.4-64.64-111.36M489.18 66.25l45.65 11.41c-2.75 10.91-12.47 18.89-24.13 18.26c-12.96-.71-25.85-12.53-21.52-29.67"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M259.125 16.938L216.22 128.094L97.343 164.25l106.53-4.22l-36.436 94.407L270.156 106.25l50.22 64.406l-61.25-153.72zm50.406 63.687l36.376 102.28l-102.344-6.75l172.063 53.876l-46.5 67.126l128.47-104.28l-116.94-7.69l-71.124-104.56zm-123.467 98.97L20.97 190.437l87.936 71.375l-.375 127.125l27.75-104.907l82.345 66.845L109.345 207.5l76.718-27.906zm71.156 18.968c-22.404 0-44.817 25.943-67.22 77.875c43.462 77.53 88.133 86.365 134.438 0c-22.403-51.93-44.816-77.875-67.22-77.875zm.405 15.687c11.05 8.62 19 30.54 19 56.438c0 25.896-7.95 47.818-19 56.437c-11.05-8.62-19-30.54-19-56.438c0-25.896 7.95-47.818 19-56.437m82.53 10.594l5.19 180.22L266.75 383l140.47 87.438l-30.408-111.313l73.563-103.47l-82.875 69.376l-27.344-100.186zM152.94 309.03l-43.594 159.595l98.906-61.53l120.656 39.436l-90.5-58.217l87.094-54.188l-171.22 56.53l-1.343-81.624z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M152 25c-16.8 0-28 3.51-35.2 8.64c-7.3 5.14-11.1 11.95-12.7 21.34c-3.1 18.79 5.3 47.62 21.7 76.62c14.9 26.2 35.9 52.6 58.5 73.6c18.5 12.7 38.4 25.1 60.1 35.6c-25.1-45.3-38.9-96.8-51-138.3c-7-23.9-13.5-44.59-20.6-58.37c-3.6-6.89-7.3-11.96-10.8-14.98c-3.4-3.01-6.2-4.15-10-4.15m208 0c-3.8 0-6.6 1.14-10 4.15c-3.5 3.02-7.2 8.09-10.8 14.98c-7.1 13.78-13.6 34.47-20.6 58.37c-12.1 41.5-25.9 93-51 138.3c21.7-10.5 41.6-22.9 60.1-35.6c22.6-21 43.6-47.4 58.5-73.6c16.4-29 24.8-57.83 21.7-76.62c-1.6-9.39-5.4-16.2-12.7-21.34C388 28.51 376.8 25 360 25M51.17 139.9c-3.33.1-6.23 1.1-9.03 2.9c-11.19 11.8-17.01 22.5-19.03 31.8c-2.07 9.5-.58 17.8 3.91 26c8.99 16.5 31.6 32.1 60.12 43.1c22.16 8.5 47.66 14.3 72.16 16.9c23.1-3 46.1-5.8 67-8.8c-45.3-23.8-82.6-54-112.8-77c-17.83-13.7-33.31-24.8-45.61-30.4c-6.15-2.8-11.05-4.3-15.26-4.5zm408.23 0c-4.2.2-9.1 1.7-15.3 4.5c-12.3 5.6-27.8 16.7-45.6 30.4c-30.2 23-67.5 53.2-112.8 77c20.9 3 43.9 5.8 67 8.8c24.5-2.6 50-8.4 72.2-16.9c28.5-11 51.1-26.6 60.1-43.1c4.5-8.2 6-16.5 3.9-26c-2-9.3-7.9-20-19-31.8c-2.8-1.8-5.8-2.8-9.1-2.9zM243.3 267.2c-41.1 6.7-91.6 11.5-134.6 19.3c-24.01 4.3-45.47 9.7-60.74 16.4s-23.08 14.2-24.53 21.5c-2.82 14.4-1.5 24.5 1.9 31.5c3.41 6.9 8.94 11.4 17.35 14.4c16.84 5.9 44.94 3.4 74.52-6.4c4-1.3 8.1-2.8 12.1-4.4c38.5-28.5 81.1-58.1 110.2-84.3c1.4-2.7 2.7-5.4 3.8-8m25.4 0c1.1 2.6 2.4 5.3 3.8 8c29.1 26.2 71.7 55.8 110.2 84.3c4 1.6 8.1 3.1 12.1 4.4c29.6 9.8 57.7 12.3 74.5 6.4c8.4-3 14-7.5 17.4-14.4c3.4-7 4.7-17.1 1.9-31.5c-1.5-7.3-9.3-14.8-24.6-21.5c-15.2-6.7-36.7-12.1-60.7-16.4c-43-7.8-93.5-12.6-134.6-19.3m-21.1 24.9c-33.2 29.3-78.9 60.2-117.6 89.4c-22.4 17-42.43 33.3-55.78 47.7c-13.34 14.5-18.69 26.4-17.39 33.1c2.83 14.3 7.86 22.6 13.45 27.1c5.6 4.4 12.33 5.9 21.52 4.4c18.4-2.8 44.5-19 69.2-43.1c24.7-24.2 48.4-55.8 64.7-87.9c12.5-24.5 20.4-49.2 21.9-70.7m16.8 0c1.5 21.5 9.4 46.2 21.9 70.7c16.3 32.1 40 63.7 64.7 87.9c24.7 24.1 50.8 40.3 69.2 43.1c9.2 1.5 15.9 0 21.5-4.4c5.6-4.5 10.6-12.8 13.5-27.1c1.3-6.7-4.1-18.6-17.4-33.1c-13.4-14.4-33.4-30.7-55.8-47.7c-38.7-29.2-84.4-60.1-117.6-89.4"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12.283 1.851A10.154 10.154 0 0 0 1.846 12.002q0 .388.03.773A1.85 1.85 0 0 1 .872 14.56L0 15.005v2.074l2.568-1.309l.832-.424l.82-.417l14.71-7.496l1.653-.842L24 4.85V2.776l-3.387 1.728l-2.89 1.473l-13.955 7.108a8 8 0 0 1-.07-1.086a8.313 8.313 0 0 1 12.366-7.247l1.654-.843l.247-.126a10.15 10.15 0 0 0-5.682-1.932M24 6.925L5.055 16.571l-1.653.844L0 19.15v2.072L3.378 19.5l2.89-1.473l13.97-7.117a9 9 0 0 1 .07 1.092A8.313 8.313 0 0 1 7.93 19.248l-.101.054l-1.793.914a10.154 10.154 0 0 0 16.119-8.214q0-.392-.03-.78a1.85 1.85 0 0 1 1.003-1.785L24 8.992Z"/></svg>',
  '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M29.391 14.527L17.473 2.609C17.067 2.203 16.533 2 16 2s-1.067.203-1.473.609L2.609 14.527C2.203 14.933 2 15.466 2 16s.203 1.067.609 1.473L14.526 29.39c.407.407.941.61 1.474.61s1.067-.203 1.473-.609L29.39 17.474c.407-.407.61-.94.61-1.474s-.203-1.067-.609-1.473M16 24a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m1.125-6.752v1.877h-2.25V15H17c1.034 0 1.875-.841 1.875-1.875S18.034 11.25 17 11.25h-2a1.877 1.877 0 0 0-1.875 1.875v.5h-2.25v-.5A4.13 4.13 0 0 1 15 9h2a4.13 4.13 0 0 1 4.125 4.125a4.13 4.13 0 0 1-4 4.123"/><path fill="none" d="M16 21a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 16 21m1.125-3.752a4.13 4.13 0 0 0 4-4.123A4.13 4.13 0 0 0 17 9h-2a4.13 4.13 0 0 0-4.125 4.125v.5h2.25v-.5c0-1.034.841-1.875 1.875-1.875h2c1.034 0 1.875.841 1.875 1.875S18.034 15 17 15h-2.125v4.125h2.25z"/></svg>',
];


//* ------------------------------------------------ FUNCIONES ------------------------------------------------ *\\

//? ------------------------ Lista pokemon (para list.js) ------------------------ \\

function getPokemonList(url = "https://pokeapi.co/api/v2/pokemon") {
  return fetch(url, param)
    .then((data) => data.json())
    .then((res) => {
      if (!res.error) {
        return res;
      } else {
        console.log(res.error);
        return [];
      }
    })
    .catch((error) => {
      console.error("Hubo un error con getPokemonList en api.js:", error);
      return [];
    });
}

//? ------------------------ Datos pokemon (para profilePokemon.js) ------------------------ \\

function getPokemon(url) {
  return fetch(url, param)
    .then((data) => data.json())
    .then((results) => {
      if (!results.error) {
        let imageUrl = getPicture(results.sprites);
        let typePromise = getTypes(results.types);
        let abilitiesPromise = getAbilities(results.abilities);
        let statsPromise = getStats(results.stats, results.weight, results.height);
        let speciesPromise = getSpecies(results.species);

        return Promise.all([typePromise, abilitiesPromise, statsPromise, speciesPromise])
          .then(([types, abilities, stats, species]) => {
            let pokemon = new Pokemon(
              results.id,
              results.name,
              types,
              abilities,
              stats,
              species,
              imageUrl,
              url = 'https://pokeapi.co/api/v2/pokemon/'+results.id
            );
            console.log(pokemon);
            return pokemon;
          });
      } else {
        console.log(results.error);
        return results.error;
      }
    })
    .catch((error) => {
      console.error("Hubo un error con getPokemon en api.js:", error);
    });
}

//* ------------------------------------------------ DATOS POKEMON ------------------------------------------------ *\\
//? ------------------------ funciones auxiliares ------------------------ \\
// ------------ Traducir (general) ------------ \\

function translate(item, lang) {
  let translation = item.find(
    (translation) => translation.language.name === lang
  );
  if (translation) {
    return translation.flavor_text || translation.name || null;
  }
  return null;
}

// ------------ tratamiento datos Pokemon (getPokemon) ------------ \\
function getPicture(pictureList) {
  let defaultPicture = pictureList.other.showdown.front_default;
  let backupPicture = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png";

  if (defaultPicture) {
    return defaultPicture;
  } else {
    return recursivePictureSearch(pictureList);
  }

  function recursivePictureSearch(node) {
    if (node.front_default) {
      return node.front_default;
    }

    for (let key in node) {
      if (typeof node[key] === 'object') {
        let result = recursivePictureSearch(node[key]);
        if (result) {
          return result;
        }
      }
    }

    return backupPicture;
  }
}


function getTypes(typeList) {
  return Promise.all(
    typeList.map((item) => {
      // Realiza una solicitud fetch para obtener los datos del tipo de Pokémon
      return fetch(item.type.url, param)
        .then((data) => data.json())
        .then((res) => {
          let typeId = res.id;
          // Traduce el nombre del tipo de Pokémon
          let typeName = translate(res.names, language);
          // Obtiene el icono del tipo de Pokémon
          let icon = iconTypes[res.id-1];
          // Inicializa el objeto damage_relations
          let damage_relations = {};
          // Array para almacenar las promesas de traducción de damage_relations
          let damageRelationsPromises = [];
          // Itera sobre cada tipo de relación de daño (double_damage_from, double_damage_to, etc.)
          for (let relationType in res.damage_relations) {
            // Obtiene el array de relaciones para el tipo de relación actual
            let relationArray = res.damage_relations[relationType];
            // Mapea cada relación a una promesa de fetch para traducir el nombre del tipo
            let translatedRelations = relationArray.map((relation) => {
              return fetch(relation.url, param)
                .then((data) => data.json())
                .then((relationRes) => {
                  // Traduce el nombre del tipo de relación
                  return translate(relationRes.names, language);
                });
            });

            // Almacena todas las promesas en un array
            damageRelationsPromises.push(
              Promise.all(translatedRelations).then((translated) => {
                // Asigna el array de nombres traducidos al objeto damage_relations
                damage_relations[relationType] = translated;
              })
            );
          }

          // Espera a que todas las promesas de traducción de damage_relations se completen
          return Promise.all(damageRelationsPromises)
            .then(() => {
              // Devuelve un objeto con el nombre del tipo, el icono y las relaciones de daño traducidas
              return { typeId,typeName, icon, damage_relations };
            })
            .catch((error) => {
              console.error("Hubo un error con damageRelationPromises:", error);
            });
        });
    })
  )
    .then((types) => {
      // console.log("types: ", types);
      return types;
    })
    .catch((error) => {
      console.error("Hubo un error con types", error);
    });
}

function getAbilities(abilitiesList) {
  return Promise.all(
    abilitiesList.map((item) =>
      // acceder a cada ability
      fetch(item.ability.url, param)
        .then((data) => data.json())
        .then((res) => {
          let abilityName = translate(res.names, language);
          let description = translate(res.flavor_text_entries, language);
          return { abilityName, description };
        })
    )
  )
    .then((abilities) => {
      // console.log("abilities: ", abilities);
      return abilities;
    })
    .catch((error) => {
      console.error("Hubo un error con abilities", error);
    });
}

function getStats(statsList, weight, height) {
  return Promise.all(
    statsList.map((item) => {
      return fetch(item.stat.url, param)
        .then((data) => data.json())
        .then((res) => {
          let statName = translate(res.names, language);
          return {
            name: statName,
            count: item.base_stat,
          };
        });
    })
  )
    .then((Stats) => {
      Stats.push(
        { name: "Peso", count: weight/10 },
        { name: "Altura", count: height*10}
      );
      // console.log("Stats: ", Stats);
      return Stats;
    })
    .catch((error) => {
      console.error("Hubo un error con stats", error);
    });
}

function getSpecies(species) {
  return fetch(species.url, param)
    .then((data) => data.json())
    .then((resSpecies) => {
      // color
      let colorPromise = fetch(resSpecies.color.url, param)
        .then(data => data.json())
        .then((resColor) => {
          let id = resColor.id;
          let color = translate(resColor.names, language);
          return{id, color};
        });
      // Evolution chain
      let evolutionChainPromise = fetch(resSpecies.evolution_chain.url, param)
        .then((data) => data.json())
        .then((resEvolution) => {

          let evolutionChain = [];
          function recursiveChain(node) {
            evolutionChain.push(node.species);
            let fullEvolution = node.evolves_to;
            for (let currentEvolution of fullEvolution) {
              recursiveChain(currentEvolution);
            }
          }
          recursiveChain(resEvolution.chain);
          // console.log("Evolucion: ", evolutionChain);
          return evolutionChain;
        });
      return Promise.all([colorPromise, evolutionChainPromise]).then(
        ([color, evolutionChain]) => {
          let speciesAttr = {
            color: color,
            evolutionChain: evolutionChain,
          };
          return speciesAttr;
        });
    })
    .catch((error) => {
      console.error("Hubo un error con getSpecies:", error);
    });
}

//* ------------------------------------------------ DATOS POKEMON ------------------------------------------------ *\\

export default {
  getPokemonList,
  getPokemon,
};
