import React from 'react'

function Test() {
  return (
    <div>
      <div>
    <div class="h-screen chatscreen p-5 mt-32">
      <section class=" shadow-xl rounded-md w-full lg:w-11/12 lg:mx-auto flex">
        {/* <!-- Left section --> */}
        <div class="w-full md:w-3/6 lg:w-3/6 xl:w-3/6 flex flex-col justify-start items-stretch  bg-white bg-opacity-80 rounded-md lg:rounded-none lg:rounded-l-md p-3">
          <div class="flex flex-row justify-between items-center mb-4">
            {/* <div class="flex flex-row">
              <button class="bg-red-500 text-white rounded-full p-1 mr-2 cursor-pointer h-4 w-4 focus:outline-none focus:ring" aria-label="Close">
              </button>
              <button class="bg-yellow-500 text-white rounded-full p-1 mr-2 cursor-pointer h-4 w-4 focus:outline-none focus:ring" aria-label="Restore Down">
              </button>
              <button class="bg-green-500 text-white rounded-full p-1 mr-5 cursor-pointer h-4 w-4 focus:outline-none focus:ring" aria-label="Minimize">
              </button>
            </div> */}
            <div class="p-1 rounded-full text-gray-500">
              <button class="flex flex-col justify-center items-center p-2 rounded-full focus:ring-2 hover:bg-gray-50 hover:bg-opacity-30 focus:outline-none" aria-label="Add">
                <svg class="fill-current h-4 w-4" viewBox="0 0 25 25">
                  <path d="M11 11v-11h1v11h11v1h-11v11h-1v-11h-11v-1h11z"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="flex-auto flex flex-col">
            <div class="flex-auto flex flex-row">
              <div class="p-1 flex flex-col justify-between items-center">
                <div class="">
                  <div class="p-1 flex justify-center items-center text-gray-500 cursor-pointer">
                    <button class="flex flex-col justify-center items-center w-full p-1 rounded-lg hover:bg-gray-50 hover:bg-opacity-30 focus:outline-none focus:ring" aria-label="Hamburger menu">
                      <svg class="fill-current h-5 w-5" viewBox="0 0 20 20">
                        <path d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
                          c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
                          s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
                          c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"></path>
                      </svg>
                    </button>
                  </div>
                  <ul class="">
                    <li class="my-2 text-gray-900 cursor-pointer">
                      <button class="flex flex-col justify-center items-center w-full p-2 rounded-lg bg-gray-600 bg-opacity-10 focus:outline-none focus:ring relative">
                        <svg class="fill-current h-7 w-7" viewBox="0 0 20 20">
                          <path d="M17.659,3.681H8.468c-0.211,0-0.383,0.172-0.383,0.383v2.681H2.341c-0.21,0-0.383,0.172-0.383,0.383v6.126c0,0.211,0.172,0.383,0.383,0.383h1.532v2.298c0,0.566,0.554,0.368,0.653,0.27l2.569-2.567h4.437c0.21,0,0.383-0.172,0.383-0.383v-2.681h1.013l2.546,2.567c0.242,0.249,0.652,0.065,0.652-0.27v-2.298h1.533c0.211,0,0.383-0.172,0.383-0.382V4.063C18.042,3.853,17.87,3.681,17.659,3.681 M11.148,12.87H6.937c-0.102,0-0.199,0.04-0.27,0.113l-2.028,2.025v-1.756c0-0.211-0.172-0.383-0.383-0.383H2.724V7.51h5.361v2.68c0,0.21,0.172,0.382,0.383,0.382h2.68V12.87z M17.276,9.807h-1.533c-0.211,0-0.383,0.172-0.383,0.383v1.755L13.356,9.92c-0.07-0.073-0.169-0.113-0.27-0.113H8.851v-5.36h8.425V9.807z"></path>
                        </svg>
                        <p class="text-xs font-semibold">All chats</p>
                        <span class="bg-blue-600 w-4 h-4 text-xs rounded-full text-white font-semibold absolute right-3 top-1">2</span>
                      </button>
                    </li>
                    <li class="my-2 text-gray-500">
                      <button class="flex flex-col justify-center items-center w-full p-2 rounded-lg hover:bg-gray-50 hover:bg-opacity-30 focus:outline-none focus:ring">
                        <svg class="fill-current h-7 w-78" viewBox="0 0 20 20">
                          <path d="M17.657,2.982H2.342c-0.234,0-0.425,0.191-0.425,0.426v10.21c0,0.234,0.191,0.426,0.425,0.426h3.404v2.553c0,0.397,0.48,0.547,0.725,0.302l2.889-2.854h8.298c0.234,0,0.426-0.191,0.426-0.426V3.408C18.083,3.174,17.892,2.982,17.657,2.982M17.232,13.192H9.185c-0.113,0-0.219,0.045-0.3,0.124l-2.289,2.262v-1.96c0-0.233-0.191-0.426-0.425-0.426H2.767V3.833h14.465V13.192z M10,7.237c-0.821,0-1.489,0.668-1.489,1.489c0,0.821,0.668,1.489,1.489,1.489c0.821,0,1.488-0.668,1.488-1.489C11.488,7.905,10.821,7.237,10,7.237 M10,9.364c-0.352,0-0.638-0.288-0.638-0.638c0-0.351,0.287-0.638,0.638-0.638c0.351,0,0.638,0.287,0.638,0.638C10.638,9.077,10.351,9.364,10,9.364 M14.254,7.237c-0.821,0-1.489,0.668-1.489,1.489c0,0.821,0.668,1.489,1.489,1.489s1.489-0.668,1.489-1.489C15.743,7.905,15.075,7.237,14.254,7.237 M14.254,9.364c-0.351,0-0.638-0.288-0.638-0.638c0-0.351,0.287-0.638,0.638-0.638c0.352,0,0.639,0.287,0.639,0.638C14.893,9.077,14.605,9.364,14.254,9.364 M5.746,7.237c-0.821,0-1.489,0.668-1.489,1.489c0,0.821,0.668,1.489,1.489,1.489c0.821,0,1.489-0.668,1.489-1.489C7.234,7.905,6.566,7.237,5.746,7.237 M5.746,9.364c-0.351,0-0.638-0.288-0.638-0.638c0-0.351,0.287-0.638,0.638-0.638c0.351,0,0.638,0.287,0.638,0.638C6.384,9.077,6.096,9.364,5.746,9.364"></path>
                        </svg>
                        <p class="text-xs font-semibold">Unread</p>
                      </button>
                    </li>
                    {/* <li class="my-2 text-gray-500">
                      <button class="flex flex-col justify-center items-center w-full p-2 rounded-lg hover:bg-gray-50 hover:bg-opacity-30 focus:outline-none focus:ring">
                        <svg class="fill-current h-7 w-7" viewBox="0 0 20 20">
                          <path d="M10,10.9c2.373,0,4.303-1.932,4.303-4.306c0-2.372-1.93-4.302-4.303-4.302S5.696,4.223,5.696,6.594C5.696,8.969,7.627,10.9,10,10.9z M10,3.331c1.801,0,3.266,1.463,3.266,3.263c0,1.802-1.465,3.267-3.266,3.267c-1.8,0-3.265-1.465-3.265-3.267C6.735,4.794,8.2,3.331,10,3.331z"></path>
                          <path d="M10,12.503c-4.418,0-7.878,2.058-7.878,4.685c0,0.288,0.231,0.52,0.52,0.52c0.287,0,0.519-0.231,0.519-0.52c0-1.976,3.132-3.646,6.84-3.646c3.707,0,6.838,1.671,6.838,3.646c0,0.288,0.234,0.52,0.521,0.52s0.52-0.231,0.52-0.52C17.879,14.561,14.418,12.503,10,12.503z"></path>
                        </svg>
                        <p class="text-xs font-semibold">Personal</p>
                      </button>
                    </li> */}
                    {/* <li class="my-2 text-gray-500">
                      <button class="flex flex-col justify-center items-center w-full p-2 rounded-lg hover:bg-gray-50 hover:bg-opacity-30 focus:outline-none focus:ring">
                        <svg class="fill-current h-7 w-7" viewBox="0 0 20 20">
                          <path d="M15.808,14.066H6.516v-1.162H5.354v1.162H4.193c-0.321,0-0.581,0.26-0.581,0.58s0.26,0.58,0.581,0.58h1.162
                            v1.162h1.162v-1.162h9.292c0.32,0,0.58-0.26,0.58-0.58S16.128,14.066,15.808,14.066z M15.808,9.419h-1.742V8.258h-1.162v1.161
                            h-8.71c-0.321,0-0.581,0.26-0.581,0.581c0,0.321,0.26,0.581,0.581,0.581h8.71v1.161h1.162v-1.161h1.742
                            c0.32,0,0.58-0.26,0.58-0.581C16.388,9.679,16.128,9.419,15.808,9.419z M17.55,0.708H2.451c-0.962,0-1.742,0.78-1.742,1.742v15.1
                            c0,0.961,0.78,1.74,1.742,1.74H17.55c0.962,0,1.742-0.779,1.742-1.74v-15.1C19.292,1.488,18.512,0.708,17.55,0.708z M18.13,17.551
                            c0,0.32-0.26,0.58-0.58,0.58H2.451c-0.321,0-0.581-0.26-0.581-0.58v-15.1c0-0.321,0.26-0.581,0.581-0.581H17.55
                            c0.32,0,0.58,0.26,0.58,0.581V17.551z M15.808,4.774H9.419V3.612H8.258v1.162H4.193c-0.321,0-0.581,0.26-0.581,0.581
                            s0.26,0.581,0.581,0.581h4.065v1.162h1.161V5.935h6.388c0.32,0,0.58-0.26,0.58-0.581S16.128,4.774,15.808,4.774z"></path>
                        </svg>
                        <p class="text-xs font-semibold">Edit</p>
                      </button>
                    </li> */}
                  </ul>
                </div>
                {/* <ul>
                  <li class="my-2 text-gray-500">
                    <button class="flex flex-col justify-center items-center p-2 rounded-lg hover:bg-gray-50 hover:bg-opacity-30 focus:outline-none focus:ring">
                      <svg class="fill-current h-7 w-7" viewBox="0 0 20 20">
                        <path d="M17.498,11.697c-0.453-0.453-0.704-1.055-0.704-1.697c0-0.642,0.251-1.244,0.704-1.697c0.069-0.071,0.15-0.141,0.257-0.22c0.127-0.097,0.181-0.262,0.137-0.417c-0.164-0.558-0.388-1.093-0.662-1.597c-0.075-0.141-0.231-0.22-0.391-0.199c-0.13,0.02-0.238,0.027-0.336,0.027c-1.325,0-2.401-1.076-2.401-2.4c0-0.099,0.008-0.207,0.027-0.336c0.021-0.158-0.059-0.316-0.199-0.391c-0.503-0.274-1.039-0.498-1.597-0.662c-0.154-0.044-0.32,0.01-0.416,0.137c-0.079,0.106-0.148,0.188-0.22,0.257C11.244,2.956,10.643,3.207,10,3.207c-0.642,0-1.244-0.25-1.697-0.704c-0.071-0.069-0.141-0.15-0.22-0.257C7.987,2.119,7.821,2.065,7.667,2.109C7.109,2.275,6.571,2.497,6.07,2.771C5.929,2.846,5.85,3.004,5.871,3.162c0.02,0.129,0.027,0.237,0.027,0.336c0,1.325-1.076,2.4-2.401,2.4c-0.098,0-0.206-0.007-0.335-0.027C3.001,5.851,2.845,5.929,2.77,6.07C2.496,6.572,2.274,7.109,2.108,7.667c-0.044,0.154,0.01,0.32,0.137,0.417c0.106,0.079,0.187,0.148,0.256,0.22c0.938,0.936,0.938,2.458,0,3.394c-0.069,0.072-0.15,0.141-0.256,0.221c-0.127,0.096-0.181,0.262-0.137,0.416c0.166,0.557,0.388,1.096,0.662,1.596c0.075,0.143,0.231,0.221,0.392,0.199c0.129-0.02,0.237-0.027,0.335-0.027c1.325,0,2.401,1.076,2.401,2.402c0,0.098-0.007,0.205-0.027,0.334C5.85,16.996,5.929,17.154,6.07,17.23c0.501,0.273,1.04,0.496,1.597,0.66c0.154,0.047,0.32-0.008,0.417-0.137c0.079-0.105,0.148-0.186,0.22-0.256c0.454-0.453,1.055-0.703,1.697-0.703c0.643,0,1.244,0.25,1.697,0.703c0.071,0.07,0.141,0.15,0.22,0.256c0.073,0.098,0.188,0.152,0.307,0.152c0.036,0,0.073-0.004,0.109-0.016c0.558-0.164,1.096-0.387,1.597-0.66c0.141-0.076,0.22-0.234,0.199-0.393c-0.02-0.129-0.027-0.236-0.027-0.334c0-1.326,1.076-2.402,2.401-2.402c0.098,0,0.206,0.008,0.336,0.027c0.159,0.021,0.315-0.057,0.391-0.199c0.274-0.5,0.496-1.039,0.662-1.596c0.044-0.154-0.01-0.32-0.137-0.416C17.648,11.838,17.567,11.77,17.498,11.697 M16.671,13.334c-0.059-0.002-0.114-0.002-0.168-0.002c-1.749,0-3.173,1.422-3.173,3.172c0,0.053,0.002,0.109,0.004,0.166c-0.312,0.158-0.64,0.295-0.976,0.406c-0.039-0.045-0.077-0.086-0.115-0.123c-0.601-0.6-1.396-0.93-2.243-0.93s-1.643,0.33-2.243,0.93c-0.039,0.037-0.077,0.078-0.116,0.123c-0.336-0.111-0.664-0.248-0.976-0.406c0.002-0.057,0.004-0.113,0.004-0.166c0-1.75-1.423-3.172-3.172-3.172c-0.054,0-0.11,0-0.168,0.002c-0.158-0.312-0.293-0.639-0.405-0.975c0.044-0.039,0.085-0.078,0.124-0.115c1.236-1.236,1.236-3.25,0-4.486C3.009,7.719,2.969,7.68,2.924,7.642c0.112-0.336,0.247-0.664,0.405-0.976C3.387,6.668,3.443,6.67,3.497,6.67c1.75,0,3.172-1.423,3.172-3.172c0-0.054-0.002-0.11-0.004-0.168c0.312-0.158,0.64-0.293,0.976-0.405C7.68,2.969,7.719,3.01,7.757,3.048c0.6,0.6,1.396,0.93,2.243,0.93s1.643-0.33,2.243-0.93c0.038-0.039,0.076-0.079,0.115-0.123c0.336,0.112,0.663,0.247,0.976,0.405c-0.002,0.058-0.004,0.114-0.004,0.168c0,1.749,1.424,3.172,3.173,3.172c0.054,0,0.109-0.002,0.168-0.004c0.158,0.312,0.293,0.64,0.405,0.976c-0.045,0.038-0.086,0.077-0.124,0.116c-0.6,0.6-0.93,1.396-0.93,2.242c0,0.847,0.33,1.645,0.93,2.244c0.038,0.037,0.079,0.076,0.124,0.115C16.964,12.695,16.829,13.021,16.671,13.334 M10,5.417c-2.528,0-4.584,2.056-4.584,4.583c0,2.529,2.056,4.584,4.584,4.584s4.584-2.055,4.584-4.584C14.584,7.472,12.528,5.417,10,5.417 M10,13.812c-2.102,0-3.812-1.709-3.812-3.812c0-2.102,1.71-3.812,3.812-3.812c2.102,0,3.812,1.71,3.812,3.812C13.812,12.104,12.102,13.812,10,13.812"></path>
                      </svg>
                      <p class="text-xs font-semibold">Settings</p>
                    </button>
                  </li>
                </ul> */}
              </div>
              <div class="w-full p-1">
                <div class="w-full p-1">
                  <input
                    type="text"
                    placeholder="Search"
                    class="search-input bg-gray-600 bg-opacity-10 placeholder-gray-500 text-gray-400 text-sm py-1 px-10 rounded-md outline-none w-full focus:outline-none focus:ring"
                  />
                </div>
                <div className="">
                <ul class="min-w-full h-96  overflow-y-scroll messagelist">
                  <li class="my-2 p-2 flex flex-row cursor-pointer rounded-lg hover:bg-gray-50 hover:bg-opacity-50">
                    <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-997145684-1547233351.jpg?crop=1xw:1xh;center,top&resize=480:*" class="h-12 w-12 rounded-full mr-4" alt=""/>
                    <div class="w-full flex flex-col justify-center">
                      <div class="flex flex-row justify-between items-center">
                        <h2 class="text-xs font-bold">Benjamin Julien</h2>
                        <div class="text-xs flex flex-row">
                          <svg class="w-4 h-4 text-blue-600 fill-current mr-1" viewBox="0 0 19 14">
                            <path fill-rule="nonzero" d="M4.96833846,10.0490996 L11.5108251,2.571972 C11.7472185,2.30180819 12.1578642,2.27443181 12.428028,2.51082515 C12.6711754,2.72357915 12.717665,3.07747757 12.5522007,3.34307913 L12.4891749,3.428028 L5.48917485,11.428028 C5.2663359,11.6827011 4.89144111,11.7199091 4.62486888,11.5309823 L4.54038059,11.4596194 L1.54038059,8.45961941 C1.2865398,8.20577862 1.2865398,7.79422138 1.54038059,7.54038059 C1.7688373,7.31192388 2.12504434,7.28907821 2.37905111,7.47184358 L2.45961941,7.54038059 L4.96833846,10.0490996 L11.5108251,2.571972 L4.96833846,10.0490996 Z M9.96833846,10.0490996 L16.5108251,2.571972 C16.7472185,2.30180819 17.1578642,2.27443181 17.428028,2.51082515 C17.6711754,2.72357915 17.717665,3.07747757 17.5522007,3.34307913 L17.4891749,3.428028 L10.4891749,11.428028 C10.2663359,11.6827011 9.89144111,11.7199091 9.62486888,11.5309823 L9.54038059,11.4596194 L8.54038059,10.4596194 C8.2865398,10.2057786 8.2865398,9.79422138 8.54038059,9.54038059 C8.7688373,9.31192388 9.12504434,9.28907821 9.37905111,9.47184358 L9.45961941,9.54038059 L9.96833846,10.0490996 L16.5108251,2.571972 L9.96833846,10.0490996 Z"></path>
                          </svg>
                          <span class="text-gray-400">
                            10:45
                          </span>
                        </div>
                      </div>
                      <div class="flex flex-row justify-between items-center">
                        <p class="text-xs text-gray-500">On projection apartments unsatiable...</p>
                        <span class="text-sm bg-blue-500 rounded-full w-5 h-5 text-center text-white font-bold">4</span>
                      </div>
                    </div>
                  </li>
                  <li class="my-2 p-2 flex flex-row bg-blue-500 rounded-lg cursor-pointer">
                  <img class="w-12 h-12 mr-4 rounded-full" src="https://www.statnews.com/wp-content/uploads/2018/01/AdobeStock_107381486-645x645.jpeg" alt="" />
                                       <div class="w-full flex flex-col justify-center text-white">
                      <div class="flex flex-row justify-between">
                        <h2 class="text-xs  font-bold">Alexa Androz</h2>
                        <span class="text-xs">10:45</span>
                      </div>
                      <div class="flex flex-row justify-between items-center">
                        <p class="text-xs">There are many variations of passages...</p>
                      </div>
                    </div>
                  </li>
                  <li class="my-2 p-2 flex flex-row cursor-pointer rounded-lg hover:bg-gray-50 hover:bg-opacity-50">
                    <img class="w-12 h-12 mr-4 rounded-full" src="https://www.telegraph.co.uk/multimedia/archive/03249/archetypal-female-_3249633c.jpg" alt="" />
                    <div class="w-full flex flex-col justify-center">
                      <div class="flex flex-row justify-between">
                        <h2 class="text-xs font-bold">Angela Vang</h2>
                        <div class="text-xs flex flex-row">
                          <svg class="w-4 h-4 text-blue-600 fill-current mr-1" viewBox="0 0 20 20">
                            <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"></path>
                          </svg>
                          <span class="text-gray-400">
                            10:45
                          </span>
                        </div>
                      </div>
                      <div class="flex flex-row justify-between items-center">
                        <p class="text-xs text-gray-500">Sudden looked elinor off gay estate...</p>
                      </div>
                    </div>
                  </li>  
                  {/* <li class="my-2 p-2 flex flex-row cursor-pointer rounded-lg hover:bg-gray-50 hover:bg-opacity-50">
                    <img class="w-12 h-12 mr-4 rounded-full" src="https://www.telegraph.co.uk/multimedia/archive/03249/archetypal-female-_3249633c.jpg" alt="" />
                    <div class="w-full flex flex-col justify-center">
                      <div class="flex flex-row justify-between">
                        <h2 class="text-xs font-bold">Angela Vang</h2>
                        <div class="text-xs flex flex-row">
                          <svg class="w-4 h-4 text-blue-600 fill-current mr-1" viewBox="0 0 20 20">
                            <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"></path>
                          </svg>
                          <span class="text-gray-400">
                            10:45
                          </span>
                        </div>
                      </div>
                      <div class="flex flex-row justify-between items-center">
                        <p class="text-xs text-gray-500">Sudden looked elinor off gay estate...</p>
                      </div>
                    </div>
                  </li>      */}
                    {/* <li class="my-2 p-2 flex flex-row cursor-pointer rounded-lg hover:bg-gray-50 hover:bg-opacity-50">
                    <img class="w-12 h-12 mr-4 rounded-full" src="https://www.telegraph.co.uk/multimedia/archive/03249/archetypal-female-_3249633c.jpg" alt="" />
                    <div class="w-full flex flex-col justify-center">
                      <div class="flex flex-row justify-between">
                        <h2 class="text-xs font-bold">Angela Vang</h2>
                        <div class="text-xs flex flex-row">
                          <svg class="w-4 h-4 text-blue-600 fill-current mr-1" viewBox="0 0 20 20">
                            <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"></path>
                          </svg>
                          <span class="text-gray-400">
                            10:45
                          </span>
                        </div>
                      </div>
                      <div class="flex flex-row justify-between items-center">
                        <p class="text-xs text-gray-500">Sudden looked elinor off gay estate...</p>
                      </div>
                    </div>
                  </li> */}
                           <li class="my-2 p-2 flex flex-row cursor-pointer rounded-lg hover:bg-gray-50 hover:bg-opacity-50">
                    <img class="w-12 h-12 mr-4 rounded-full" src="https://www.telegraph.co.uk/multimedia/archive/03249/archetypal-female-_3249633c.jpg" alt="" />
                    <div class="w-full flex flex-col justify-center">
                      <div class="flex flex-row justify-between">
                        <h2 class="text-xs font-bold">Angela Vang</h2>
                        <div class="text-xs flex flex-row">
                          <svg class="w-4 h-4 text-blue-600 fill-current mr-1" viewBox="0 0 20 20">
                            <path d="M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z"></path>
                          </svg>
                          <span class="text-gray-400">
                            10:45
                          </span>
                        </div>
                      </div>
                      <div class="flex flex-row justify-between items-center">
                        <p class="text-xs text-gray-500">Sudden looked elinor off gay estate...</p>
                      </div>
                    </div>
                  </li>
                  <li class="my-2 p-2 flex flex-row cursor-pointer rounded-lg hover:bg-gray-50 hover:bg-opacity-50">
                    <img class="w-12 h-12 mr-4 rounded-full" src="https://wallstreetinsanity.com/wp-content/uploads/This-Survey-Shows-Us-How-Different-Men-And-Women-View-The-Perfect-Female-Face-.jpg" alt="" />
                    <div class="w-full flex flex-col justify-center">
                      <div class="flex flex-row justify-between">
                        <h2 class="text-xs font-bold">Olivia</h2>
                        <div class="text-xs flex flex-row">
                          <span class="text-gray-400">
                            10:45
                          </span>
                        </div>
                      </div>
                      <div class="flex flex-row justify-between items-center">
                        <p class="text-xs text-gray-500">Breakfast agreeable incommode depar...</p>
                      </div>
                    </div>
                  </li>
                  <li class="my-2 p-2 flex flex-row cursor-pointer rounded-lg hover:bg-gray-50 hover:bg-opacity-50">
                    <img class="w-12 h-12 mr-4 rounded-full" src="https://www.statnews.com/wp-content/uploads/2018/01/AdobeStock_107381486-645x645.jpeg" alt="" />
                    <div class="w-full flex flex-col justify-center">
                      <div class="flex flex-row justify-between">
                        <h2 class="text-xs font-bold">Yaeko Lindblom</h2>
                        <div class="text-xs flex flex-row">
                          <svg class="w-4 h-4 text-blue-600 fill-current mr-1" viewBox="0 0 19 14">
                            <path fill-rule="nonzero" d="M4.96833846,10.0490996 L11.5108251,2.571972 C11.7472185,2.30180819 12.1578642,2.27443181 12.428028,2.51082515 C12.6711754,2.72357915 12.717665,3.07747757 12.5522007,3.34307913 L12.4891749,3.428028 L5.48917485,11.428028 C5.2663359,11.6827011 4.89144111,11.7199091 4.62486888,11.5309823 L4.54038059,11.4596194 L1.54038059,8.45961941 C1.2865398,8.20577862 1.2865398,7.79422138 1.54038059,7.54038059 C1.7688373,7.31192388 2.12504434,7.28907821 2.37905111,7.47184358 L2.45961941,7.54038059 L4.96833846,10.0490996 L11.5108251,2.571972 L4.96833846,10.0490996 Z M9.96833846,10.0490996 L16.5108251,2.571972 C16.7472185,2.30180819 17.1578642,2.27443181 17.428028,2.51082515 C17.6711754,2.72357915 17.717665,3.07747757 17.5522007,3.34307913 L17.4891749,3.428028 L10.4891749,11.428028 C10.2663359,11.6827011 9.89144111,11.7199091 9.62486888,11.5309823 L9.54038059,11.4596194 L8.54038059,10.4596194 C8.2865398,10.2057786 8.2865398,9.79422138 8.54038059,9.54038059 C8.7688373,9.31192388 9.12504434,9.28907821 9.37905111,9.47184358 L9.45961941,9.54038059 L9.96833846,10.0490996 L16.5108251,2.571972 L9.96833846,10.0490996 Z"></path>
                          </svg>
                          <span class="text-gray-400">
                            10:45
                          </span>
                        </div>
                      </div>
                      <div class="flex flex-row justify-between items-center">
                        <p class="text-xs text-gray-500">New the her nor case that lady paid...</p>
                        <span class="text-sm bg-blue-500 rounded-full w-5 h-5 text-center text-white font-bold">1</span>
                      </div>
                    </div>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Middle section --> */}
        <div class="hidden w-3/6 bg-white h-full md:flex flex-col justify-start items-stretch border-r-2 border-l-2 border-gray-100 lg:rounded-r-md xl:rounded-none">
          {/* <!-- Header with name --> */}
          <div class="flex flex-row items-center justify-between px-3 py-2 bg-gray-50 bg-opacity-40 border-b-2 border-gray-100">
            <div class="">
              <h2 class="font-medium">Alexa Androz</h2>
              {/* <p class="text-xs text-gray-500">4 memebres</p> */}
            </div>
            <div class="flex flex-row">
              <button type="button" class="p-2 ml-2 text-gray-400 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring" aria-label="Search">
                <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20">
                  <path d="M12.323,2.398c-0.741-0.312-1.523-0.472-2.319-0.472c-2.394,0-4.544,1.423-5.476,3.625C3.907,7.013,3.896,8.629,4.49,10.102c0.528,1.304,1.494,2.333,2.72,2.99L5.467,17.33c-0.113,0.273,0.018,0.59,0.292,0.703c0.068,0.027,0.137,0.041,0.206,0.041c0.211,0,0.412-0.127,0.498-0.334l1.74-4.23c0.583,0.186,1.18,0.309,1.795,0.309c2.394,0,4.544-1.424,5.478-3.629C16.755,7.173,15.342,3.68,12.323,2.398z M14.488,9.77c-0.769,1.807-2.529,2.975-4.49,2.975c-0.651,0-1.291-0.131-1.897-0.387c-0.002-0.004-0.002-0.004-0.002-0.004c-0.003,0-0.003,0-0.003,0s0,0,0,0c-1.195-0.508-2.121-1.452-2.607-2.656c-0.489-1.205-0.477-2.53,0.03-3.727c0.764-1.805,2.525-2.969,4.487-2.969c0.651,0,1.292,0.129,1.898,0.386C14.374,4.438,15.533,7.3,14.488,9.77z"></path>
                </svg>
              </button>
              <button type="button" class="p-2 ml-2 text-gray-400 xl:text-blue-500 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring" aria-label="Open">
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <g><rect fill="none" height="24" width="24"/><g><path d="M2,4v16h20V4H2z M20,8.67h-2.5V6H20V8.67z M17.5,10.67H20v2.67h-2.5V10.67z M4,6h11.5v12H4V6z M17.5,18v-2.67H20V18H17.5z"/></g></g>
                </svg>
              </button>
              <button type="button" class="p-2 ml-2 text-gray-400 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring" aria-label="More">
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path fill-rule="nonzero" d="M12,16 C13.1045695,16 14,16.8954305 14,18 C14,19.1045695 13.1045695,20 12,20 C10.8954305,20 10,19.1045695 10,18 C10,16.8954305 10.8954305,16 12,16 Z M12,10 C13.1045695,10 14,10.8954305 14,12 C14,13.1045695 13.1045695,14 12,14 C10.8954305,14 10,13.1045695 10,12 C10,10.8954305 10.8954305,10 12,10 Z M12,4 C13.1045695,4 14,4.8954305 14,6 C14,7.1045695 13.1045695,8 12,8 C10.8954305,8 10,7.1045695 10,6 C10,4.8954305 10.8954305,4 12,4 Z"/>
                </svg>
              </button>
            </div>
          </div>
          {/* <!-- Messages --> */}
          <div class="flex-auto flex flex-col justify-between overflow-y-auto messagelist">
            <div class="flex flex-col h-96">
               {/* frnds messsage start */}
              <div class="flex flex-row p-2 w-11/12">
                
                <div class="w-1/12 py-2 flex">
                  <img src="https://www.statnews.com/wp-content/uploads/2018/01/AdobeStock_107381486-645x645.jpeg" class="h-12 w-12 rounded-full self-end" alt=""/>
                </div>
                <div class="w-11/12 p-2">
                  <div class="bg-gray-50 p-3 rounded-xl mb-2 relative">
                    <h2 class="text-sm font-semibold mb-2">Alexa Androz</h2>
                    <p class="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span class="text-xs text-gray-500 absolute right-2 bottom-2">09:24</span>
                  </div>
                  
                </div>
              </div>
              {/* friends message end */}
              {/* own message start*/}
              <div class="flex flex-row justify-end">
                <div class="p-1">
                  
                  <div class="px-4 py-3 rounded-full my-2 bg-blue-500 text-white flex flex-row items-center">
                    <p class="text-sm flex">
                      There are many variations of passages of Lorem Ipsum 
                    </p>
                    <div class="ml-2 flex flex-row text-xs text-gray-300">
                      <span class="mr-1">
                        10:46
                      </span>
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 19 14">
                        <path fill-rule="nonzero" d="M4.96833846,10.0490996 L11.5108251,2.571972 C11.7472185,2.30180819 12.1578642,2.27443181 12.428028,2.51082515 C12.6711754,2.72357915 12.717665,3.07747757 12.5522007,3.34307913 L12.4891749,3.428028 L5.48917485,11.428028 C5.2663359,11.6827011 4.89144111,11.7199091 4.62486888,11.5309823 L4.54038059,11.4596194 L1.54038059,8.45961941 C1.2865398,8.20577862 1.2865398,7.79422138 1.54038059,7.54038059 C1.7688373,7.31192388 2.12504434,7.28907821 2.37905111,7.47184358 L2.45961941,7.54038059 L4.96833846,10.0490996 L11.5108251,2.571972 L4.96833846,10.0490996 Z M9.96833846,10.0490996 L16.5108251,2.571972 C16.7472185,2.30180819 17.1578642,2.27443181 17.428028,2.51082515 C17.6711754,2.72357915 17.717665,3.07747757 17.5522007,3.34307913 L17.4891749,3.428028 L10.4891749,11.428028 C10.2663359,11.6827011 9.89144111,11.7199091 9.62486888,11.5309823 L9.54038059,11.4596194 L8.54038059,10.4596194 C8.2865398,10.2057786 8.2865398,9.79422138 8.54038059,9.54038059 C8.7688373,9.31192388 9.12504434,9.28907821 9.37905111,9.47184358 L9.45961941,9.54038059 L9.96833846,10.0490996 L16.5108251,2.571972 L9.96833846,10.0490996 Z"></path>
                      </svg>
                    </div>
                  </div>
                 
                </div>
              </div>
               {/*own message end  */}
                  {/* frnds messsage start */}
              <div class="flex flex-row p-2 w-11/12">
                
                <div class="w-1/12 py-2 flex">
                  <img src="https://www.statnews.com/wp-content/uploads/2018/01/AdobeStock_107381486-645x645.jpeg" class="h-12 w-12 rounded-full self-end" alt=""/>
                </div>
                <div class="w-11/12 p-2">
                  <div class="bg-gray-50 p-3 rounded-xl mb-2 relative">
                    <h2 class="text-sm font-semibold mb-2">Alexa Androz</h2>
                    <p class="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span class="text-xs text-gray-500 absolute right-2 bottom-2">09:24</span>
                  </div>
                  
                </div>
              </div>
              {/* friends message end */}
                 {/* frnds messsage start */}
                 <div class="flex flex-row p-2 w-11/12">
                
                <div class="w-1/12 py-2 flex">
                  <img src="https://www.statnews.com/wp-content/uploads/2018/01/AdobeStock_107381486-645x645.jpeg" class="h-12 w-12 rounded-full self-end" alt=""/>
                </div>
                <div class="w-11/12 p-2">
                  <div class="bg-gray-50 p-3 rounded-xl mb-2 relative">
                    <h2 class="text-sm font-semibold mb-2">Alexa Androz</h2>
                    <p class="text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <span class="text-xs text-gray-500 absolute right-2 bottom-2">09:24</span>
                  </div>
                  
                </div>
              </div>
              {/* friends message end */}
                  {/* own message start*/}
                  <div class="flex flex-row justify-end">
                <div class="p-1">
                  
                  <div class="px-4 py-3 rounded-full my-2 bg-blue-500 text-white flex flex-row items-center">
                    <p class="text-sm flex">
                      There are many variations of passages of Lorem Ipsum 
                    </p>
                    <div class="ml-2 flex flex-row text-xs text-gray-300">
                      <span class="mr-1">
                        10:46
                      </span>
                      <svg class="w-4 h-4 fill-current" viewBox="0 0 19 14">
                        <path fill-rule="nonzero" d="M4.96833846,10.0490996 L11.5108251,2.571972 C11.7472185,2.30180819 12.1578642,2.27443181 12.428028,2.51082515 C12.6711754,2.72357915 12.717665,3.07747757 12.5522007,3.34307913 L12.4891749,3.428028 L5.48917485,11.428028 C5.2663359,11.6827011 4.89144111,11.7199091 4.62486888,11.5309823 L4.54038059,11.4596194 L1.54038059,8.45961941 C1.2865398,8.20577862 1.2865398,7.79422138 1.54038059,7.54038059 C1.7688373,7.31192388 2.12504434,7.28907821 2.37905111,7.47184358 L2.45961941,7.54038059 L4.96833846,10.0490996 L11.5108251,2.571972 L4.96833846,10.0490996 Z M9.96833846,10.0490996 L16.5108251,2.571972 C16.7472185,2.30180819 17.1578642,2.27443181 17.428028,2.51082515 C17.6711754,2.72357915 17.717665,3.07747757 17.5522007,3.34307913 L17.4891749,3.428028 L10.4891749,11.428028 C10.2663359,11.6827011 9.89144111,11.7199091 9.62486888,11.5309823 L9.54038059,11.4596194 L8.54038059,10.4596194 C8.2865398,10.2057786 8.2865398,9.79422138 8.54038059,9.54038059 C8.7688373,9.31192388 9.12504434,9.28907821 9.37905111,9.47184358 L9.45961941,9.54038059 L9.96833846,10.0490996 L16.5108251,2.571972 L9.96833846,10.0490996 Z"></path>
                      </svg>
                    </div>
                  </div>
                 
                </div>
              </div>
               {/*own message end  */}
            </div>
          </div>
          {/* <!-- Input for writing a messages --> */}
          <div class="flex flex-row justify-between items-center p-3">
            <div class="">
              <button type="button" class="p-2 text-gray-400 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring" aria-label="Upload a files">
                <svg class="fill-current h-6 w-6" viewBox="0 0 20 20">
                  <path d="M4.317,16.411c-1.423-1.423-1.423-3.737,0-5.16l8.075-7.984c0.994-0.996,2.613-0.996,3.611,0.001C17,4.264,17,5.884,16.004,6.88l-8.075,7.984c-0.568,0.568-1.493,0.569-2.063-0.001c-0.569-0.569-0.569-1.495,0-2.064L9.93,8.828c0.145-0.141,0.376-0.139,0.517,0.005c0.141,0.144,0.139,0.375-0.006,0.516l-4.062,3.968c-0.282,0.282-0.282,0.745,0.003,1.03c0.285,0.284,0.747,0.284,1.032,0l8.074-7.985c0.711-0.71,0.711-1.868-0.002-2.579c-0.711-0.712-1.867-0.712-2.58,0l-8.074,7.984c-1.137,1.137-1.137,2.988,0.001,4.127c1.14,1.14,2.989,1.14,4.129,0l6.989-6.896c0.143-0.142,0.375-0.14,0.516,0.003c0.143,0.143,0.141,0.374-0.002,0.516l-6.988,6.895C8.054,17.836,5.743,17.836,4.317,16.411"></path>
                </svg>
              </button>
            </div>
            <div class="flex-1 px-3">
              <input type="text" class="w-full border-2 border-gray-100 rounded-full px-4 py-1 outline-none text-gray-500 focus:outline-none focus:ring" placeholder="Write a message..."/>
            </div>
            <div class="flex flex-row">
              <button type="button" class="p-2 text-gray-400 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring" aria-label="Show emojis">
                <svg class="fill-current h-6 w-6" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                </svg>
              </button>
              <button type="button" class="p-2 ml-2 text-gray-400 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring" aria-label="Record a voice">
                <svg class="fill-current h-6 w-6" viewBox="0 0 20 20">
                  <path d="M10.403,15.231v2.035h2.827c0.223,0,0.403,0.181,0.403,0.404c0,0.223-0.181,0.403-0.403,0.403H6.77c-0.223,0-0.404-0.181-0.404-0.403c0-0.224,0.181-0.404,0.404-0.404h2.826v-2.035C6.89,15.024,4.751,12.758,4.751,10c0-0.223,0.181-0.403,0.404-0.403S5.559,9.777,5.559,10c0,2.449,1.992,4.441,4.441,4.441c2.449,0,4.441-1.992,4.441-4.441c0-0.223,0.182-0.403,0.404-0.403s0.403,0.18,0.403,0.403C15.248,12.758,13.108,15.024,10.403,15.231 M13.026,4.953V10c0,1.669-1.357,3.027-3.027,3.027S6.972,11.669,6.972,10V4.953c0-1.669,1.358-3.028,3.028-3.028S13.026,3.284,13.026,4.953M12.221,4.953c0-1.225-0.996-2.22-2.221-2.22s-2.221,0.995-2.221,2.22V10c0,1.225,0.996,2.22,2.221,2.22s2.221-0.995,2.221-2.22V4.953z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Right section --> */}
        {/* <div class="hidden w-2/6 xl:block bg-white rounded-r-md p-5 overflow-y-auto">
          <header class="flex flex-row justify-end items-center">
            <button type="button" class="p-2 ml-2 text-gray-400 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring">
              <svg class="fill-current h-6 w-6" viewBox="0 0 20 20">
                <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
              </svg>
            </button>
          </header> */}
          {/* <main>
            <div class="flex flex-col justify-center items-center my-4">
              <img src="https://t.aimg.sk/magaziny/Ts0fWXOKR12frPTjZ3a8UA~Prav-burger-dom-ca-buchta.png?t=LzB4MzU6NTg2eDM2NS85MjB4NzYwL3NtYXJ0L2ZpbHRlcnM6Zm9ybWF0KGpwZWcp&h=aSkfJNypYaRvL4kRNsFH8g&e=2145916800&v=5" class="w-32 h-32 mb-4 rounded-full" alt=""/>
              <h2 class="font-bold text-gray-700">
                Food porn group
              </h2>
            </div>
            <div class="my-6">
              <ul class="flex flex-row justify-center items-center">
                <li>
                  <button type="button" class="flex flex-col justify-center items-center p-2 m-2 w-16 h-16 text-gray-400 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring">
                    <svg class="fill-current h-6 w-6 mb-2" viewBox="0 0 24 24">
                      <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H9zm-3-3v-3h3v-2H6V7H4v3H1v2h3v3z"/>
                    </svg>
                    <p class="text-xs font-semibold">Add</p>
                  </button>
                </li>
                <li>
                  <button type="button" class="flex flex-col justify-center items-center p-2 m-2 w-16 h-16 text-gray-400 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring">
                    <svg class="fill-current h-6 w-6 mb-2" viewBox="0 0 24 24">
                      <path fill-rule="nonzero" d="M11,20 L13,20 C13.5522847,20 14,20.4477153 14,21 C14,21.5128358 13.6139598,21.9355072 13.1166211,21.9932723 L13,22 L11,22 C10.4477153,22 10,21.5522847 10,21 C10,20.4871642 10.3860402,20.0644928 10.8833789,20.0067277 L11,20 L13,20 L11,20 Z M3.30352462,2.28241931 C3.6693482,1.92735525 4.23692991,1.908094 4.62462533,2.21893936 L4.71758069,2.30352462 L21.2175807,19.3035246 C21.6022334,19.6998335 21.5927842,20.332928 21.1964754,20.7175807 C20.8306518,21.0726447 20.2630701,21.091906 19.8753747,20.7810606 L19.7824193,20.6964754 L18.127874,18.9919007 L18,18.9999993 L4,18.9999993 C3.23933773,18.9999993 2.77101468,18.1926118 3.11084891,17.5416503 L3.16794971,17.4452998 L5,14.6972244 L5,8.9999993 C5,7.98873702 5.21529462,7.00715088 5.62359521,6.10821117 L3.28241931,3.69647538 C2.89776658,3.3001665 2.90721575,2.66707204 3.30352462,2.28241931 Z M7.00817933,8.71121787 L7,9 L7,14.6972244 C7,15.0356672 6.91413188,15.3676193 6.75167088,15.6624466 L6.66410059,15.8066248 L5.86851709,17 L16.1953186,17 L7.16961011,7.7028948 C7.08210009,8.02986218 7.02771758,8.36725335 7.00817933,8.71121787 Z M12,2 C15.7854517,2 18.8690987,5.00478338 18.995941,8.75935025 L19,9 L19,12 C19,12.5522847 18.5522847,13 18,13 C17.4871642,13 17.0644928,12.6139598 17.0067277,12.1166211 L17,12 L17,9 C17,6.23857625 14.7614237,4 12,4 C11.3902636,4 10.7970241,4.10872043 10.239851,4.31831953 C9.72293204,4.51277572 9.14624852,4.25136798 8.95179232,3.734449 C8.75733613,3.21753002 9.01874387,2.6408465 9.53566285,2.4463903 C10.3171048,2.15242503 11.1488212,2 12,2 Z"></path>
                    </svg>
                    <p class="text-xs font-semibold">Mute</p>
                  </button>
                </li>
                <li>
                  <button type="button" class="flex flex-col justify-center items-center p-2 m-2 w-16 h-16 text-gray-400 rounded-full hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring">
                    <svg class="fill-current h-6 w-6 mb-2" viewBox="0 0 24 24">
                      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M17,8l-1.41,1.41L17.17,11H9v2h8.17l-1.58,1.58L17,16l4-4L17,8z M5,5h7V3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h7v-2H5V5z"/></g>
                    </svg>
                    <p class="text-xs font-semibold">Leave</p>
                  </button>
                </li>
              </ul>
            </div>
            <div class="my-4">
              <ul>
                <li class="flex flex-row my-3">
                  <div class="mr-4">
                    <img src="https://www.kormanmd.com/wp-content/uploads/sites/38/2019/02/botox-men-2-768x720.jpg" class="w-12 h-12 rounded-full" alt=""/>
                  </div>
                  <div class="flex flex-col justify-center">
                    <h2 class="text-sm font-bold">Jose Waldow</h2>
                    <p class="text-xs text-blue-600 font-normal">Online</p>
                  </div>
                </li>
                <li class="flex flex-row my-3">
                  <div class="mr-4">
                    <img src="https://www.telegraph.co.uk/multimedia/archive/03249/archetypal-male-fa_3249635c.jpg" class="w-12 h-12 rounded-full" alt=""/>
                  </div>
                  <div class="flex flex-col justify-center">
                    <h2 class="text-sm font-bold">Sherwood Rosol</h2>
                    <p class="text-xs text-blue-600 font-normal">Online</p>
                  </div>
                </li>
                <li class="flex flex-row my-3">
                  <div class="mr-4">
                    <img src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2019/02/5-create-fake-people-in-2-seconds-on-this-insane-site.jpg" class="w-12 h-12 rounded-full" alt=""/>
                  </div>
                  <div class="flex flex-col justify-center">
                    <h2 class="text-sm font-bold">Leena Hannan</h2>
                    <p class="text-xs text-gray-400 font-normal">last seen 40 minutes ago</p>
                  </div>
                </li>
                <li class="flex flex-row my-3">
                  <div class="mr-4">
                    <img src="https://www.statnews.com/wp-content/uploads/2018/01/AdobeStock_107381486-645x645.jpeg" class="w-12 h-12 rounded-full" alt=""/>
                  </div>
                  <div class="flex flex-col justify-center">
                    <h2 class="text-sm font-bold">Yaeko Lindblom</h2>
                    <p class="text-xs text-gray-400 font-normal">last seen 40 minutes ago</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="">
              <ul class="flex flex-row justify-between items-center bg-gray-50 rounded-lg p-1">
                <li class="bg-white px-3 py-1 text-xs font-semibold rounded-md cursor-pointer">Media</li>
                <li class="text-xs text-gray-500 font-semibold px-3 py-1 cursor-pointer">Links</li>
                <li class="text-xs text-gray-500 font-semibold px-3 py-1 cursor-pointer">Files</li>
                <li class="text-xs text-gray-500 font-semibold px-3 py-1 cursor-pointer">Voice</li>
              </ul>
              <ul class="grid grid-cols-3 gap-2 my-3">
                <li class="">
                  <img class="rounded-md" src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/38/1474395998-ghk-0216-comfortfoodcover-meatballs.jpg?crop=0.856xw:0.571xh;0.0224xw,0.296xh&resize=640:*" alt=""/>
                </li>
                <li class="">
                  <img class="rounded-md" src="https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg" alt=""/>
                </li>
                <li class="">
                  <img class="rounded-md" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1036880806.jpg?crop=0.6666666666666666xw:1xh;center,top&resize=640:*" alt=""/>
                </li>
                <li class="">
                  <img class="rounded-md" src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636" alt=""/>
                </li>
              </ul>
            </div>
          </main> */}
        {/* </div> */}
      </section>
    </div>

    </div>
    </div>
  )
}

export default Test
