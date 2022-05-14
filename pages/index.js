import React from "react";
let toc = {
  introduction: {
    name: "Introduction",
  },
  getting_started: {
    name: "Getting Started",
    children: {
      installation: "Installation",
      setup_your_environment: "Set up your environment",
      first_steps: "First steps",
      command_line_interface: "Command line interface",
      configuration_file: "Configuration file",
      permissions: "Permissions",
      debugging_your_code: "Debugging your code",
    },
  },
  runtime: {
    name: "The Runtime",
    children: {
      stability: "Stability",
      program_lifecycle: "Program lifecycle",
      permission_apis: "Permission APIs",
      web_platform_apis: "Web Platform APIs",
      http_server_apis: "HTTP Server APIs",
      http_server_apis_low_level: "HTTP Server APIs (low level)",
      location_api: "Location API",
      web_storage_api: "Web Storage API",
      workers: "Workers",
      ffi_api: "Foreign Function Interface API",
    },
  },
  linking_to_external_code: {
    name: "Linking to external code",
    children: {
      reloading_modules: "Reloading modules",
      integrity_checking: "Integrity checking",
      proxies: "Proxies",
      private: "Private modules",
      import_maps: "Import maps",
    },
  },
  node: {
    name: "Interoperating with Node and NPM",
    children: {
      compatibility_mode: "Node compatibility mode",
      std_node: "The std/node library",
      cdns: "Packages from CDNs",
      import_maps: "Using import maps",
      faqs: "Frequently asked questions",
      cheatsheet: "Node->Deno cheatsheet",
      dnt: "dnt - Deno to Node Transform",
    },
  },
  typescript: {
    name: "Using TypeScript",
    children: {
      overview: "Overview",
      configuration: "Configuration",
      types: "Types and type declarations",
      migration: "Migrating to/from JavaScript",
      runtime: "Runtime compiler APIs",
      faqs: "Frequently asked questions",
    },
  },
  jsx_dom: {
    name: "Using JSX and the DOM",
    children: {
      overview: "Overview",
      jsx: "Configuring JSX",
      linkedom: "Using LinkeDOM",
      deno_dom: "Using deno-dom",
      jsdom: "Using jsdom",
      css: "Parsing CSS",
      twind: "Using Twind",
    },
  },
  webassembly: {
    name: "Using WebAssembly",
    children: {
      using_wasm: "Using WebAssembly in Deno",
      using_streaming_wasm: "Using the streaming WebAssembly APIs",
      wasm_resources: "Helpful resources",
    },
  },
  standard_library: {
    name: "Standard library",
  },
  examples: {
    name: "Examples",
    children: {
      hello_world: "Hello world",
      import_export: "Import and export modules",
      manage_dependencies: "Manage dependencies",
      fetch_toc: "Fetch data",
      read_write_files: "Read and write files",
      unix_cat: "Unix cat program",
      http_server: "HTTP web server",
      file_server: "File server",
      tcp_echo: "TCP echo server",
      subprocess: "Creating a subprocess",
      os_signals: "OS signals",
      file_system_events: "File system events",
      module_metadata: "Module metadata",
    },
  },
  testing: {
    name: "Testing",
    children: {
      assertions: "Assertions",
      coverage: "Coverage",
      documentation: "Documentation",
      sanitizers: "Sanitizers",
      behavior_driven_development: "Behavior-driven development",
      mocking: "Mocking",
      snapshot_testing: "Snapshots",
    },
  },
  tools: {
    name: "Tools",
    children: {
      script_installer: "Script installer",
      formatter: "Formatter",
      repl: "Read-eval-print-loop",
      bundler: "Bundler",
      compiler: "Compiling executables",
      documentation_generator: "Documentation generator",
      dependency_inspector: "Dependency inspector",
      linter: "Linter",
      task_runner: "Task runner",
      vendor: "Vendoring dependencies",
      benchmarker: "Benchmarking",
    },
  },
  continuous_integration: {
    name: "Continuous integration",
  },
  vscode_deno: {
    name: "Using Visual Studio Code",
    children: {
      testing_api: "Testing API",
    },
  },
  language_server: {
    name: "Language Server",
    children: {
      overview: "Overview of the language server",
      imports: "Import suggestions and intelligent registries",
      testing_api: "Testing API",
    },
  },
  publishing: {
    name: "Publishing Modules",
  },
  embedding_deno: {
    name: "Embedding Deno",
  },
  help: {
    name: "Help",
  },
  contributing: {
    name: "Contributing",
    children: {
      building_from_source: "Building from source",
      web_platform_tests: "Web platform tests",
      style_guide: "Style guide",
      architecture: "Architecture",
      release_schedule: "Release schedule",
    },
  },
};
function TableOfContents() {
  return (
    <div className="pt-2 pb-8 h-0 flex-1 flex flex-col overflow-y-auto">
      <nav className="flex-1 px-4">
        <ol className="list-decimal list-inside font-semibold nested">
          {Object.entries(toc).map(([slug, entry]) => {
            return (
              <li key={slug} className="my-2">
                <a
                  href={`/manual/${slug}`}
                  className="text-gray-900 hover:text-gray-600 font-bold"
                >
                  {entry.name}
                </a>
                {entry.children ? (
                  <ol className="pl-4 list-decimal nested">
                    {Object.entries(entry.children).map(([childSlug, name]) => (
                      <li key={`${slug}/${childSlug}`} className="my-0.5">
                        <a
                          href={`/manual/${slug}/${childSlug}`}
                          className="text-gray-900 hover:text-gray-600 font-normal"
                        >
                          {name}
                        </a>
                      </li>
                    ))}
                  </ol>
                ) : null}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}

function SidebarLogo() {
  return (
    <div className="bg-gray-100 pb-4 pt-4 border-b border-gray-200">
      <a className="flex items-center flex-shrink-0 px-4">
        <img src="/logo.svg" alt="logo" className="w-auto h-12" />
        <div className="mx-4 flex flex-col justify-center">
          <div className="font-bold text-gray-900 leading-6 text-2xl tracking-tight">
            Deno Manual
          </div>
        </div>
      </a>
      <div className="mt-5 px-4">
        <label forHtml="version" className="sr-only">
          Version
        </label>
        <div className="mt-1 sm:mt-0 sm:col-span-2">
          <div className="max-w-xs rounded-md shadow-sm">
            <select
              id="version"
              className="block rounded border-gray-300 w-full transition duration-150 ease-in-out sm:text-sm! sm:leading-5!"
              autoComplete="off"
            >
              <option value="main">main</option>
              <option selected="" value="v1.21.3">
                v1.21.3
              </option>
              <option value="v1.21.2">v1.21.2</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarMobile({ show, toggleShow, children }) {
  return (
    <div className={`md:hidden ${show ? "" : "hidden"}`} id="manualSidebar">
      <div className="fixed inset-0 flex z-40">
        <div className="fixed inset-0">
          <label
            className="absolute inset-0 bg-gray-600 opacity-75"
            forHtml="manualSidebarToggle"
          ></label>
        </div>
        <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
          <div className="absolute top-0 right-0 -mr-14 p-1">
            <label
              className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
              aria-label="Close sidebar"
              onClick={toggleShow}
              forHtml="manualSidebarToggle"
            >
              <svg
                className="h-6 w-6 text-white"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokelinecap="round"
                  strokelinejoin="round"
                  strokewidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </label>
          </div>
          <SidebarLogo></SidebarLogo>
          {children}
        </div>
        <div className="flex-shrink-0 w-14"></div>
      </div>
    </div>
  );
}

function SidebarDesktop({ children }) {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-72 border-r border-gray-200 bg-gray-50">
        <SidebarLogo></SidebarLogo>
        {children}
      </div>
    </div>
  );
}

function MarkdownContent() {
  return (
    <div className="max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 pb-12 sm:pb-20">
      <div className="pt-1">
        <div className="py-8 px-4 prose">{/* markdown */}</div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200">
        <a
          href="/manual/getting_started"
          className="text-gray-900 hover:text-gray-600 font-normal"
        >
          ← Getting Started
        </a>
        <a
          href="/manual/getting_started/setup_your_environment"
          className="text-gray-900 hover:text-gray-600 font-normal float-right"
        >
          Set up your environment →
        </a>
      </div>
    </div>
  );
}

function HeaderDesktop() {
  return (
    <div className="h-16 bg-white shadow hidden md:block">
      <div className="max-w-screen-md mx-auto px-12 w-full flex justify-between h-full">
        <label forHtml="search_field" className="sr-only">
          Search
        </label>
        <button className="w-full text-gray-400 focus-within:text-gray-600 flex items-center">
          <div className="flex items-center pointer-events-none">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillrule="evenodd"
                cliprule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
          </div>
          <div className="pl-6">
            Search the docs (press{" "}
            <code className="py-1 px-2 font-mono bg-gray-100 text-sm break-all rounded-[6px]">
              /
            </code>{" "}
            to focus)
          </div>
        </button>
      </div>
    </div>
  );
}

function HeaderMobile({ toggleShow }) {
  return (
    <div className="z-10 flex-shrink-0 flex h-16 bg-white shadow md:hidden">
      <a className="px-4 flex items-center justify-center md:hidden">
        <img src="/logo.svg" alt="logo" className="w-auto h-10" />
      </a>
      <div className="border-l border-r border-gray-200 flex-1 px-4 flex justify-between">
        <div className="flex-1 flex">
          <div className="w-full flex justify-between h-full">
            <label forHtml="search_field" className="sr-only">
              Search
            </label>
            <button className="w-full text-gray-400 focus-within:text-gray-600 flex items-center">
              <div className="flex items-center pointer-events-none">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillrule="evenodd"
                    cliprule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  ></path>
                </svg>
              </div>
              <div className="pl-6">
                <span className="inline sm:hidden">Search docs</span>
                <span className="hidden sm:inline">
                  Search the docs (press{" "}
                  <code className="py-1 px-2 font-mono bg-gray-100 text-sm break-all rounded-[6px]">
                    /
                  </code>{" "}
                  to focus)
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <label
        className="focus:outline-none focus:bg-gray-100 md:hidden flex items-center"
        forHtml="manualSidebarToggle"
        onClick={toggleShow}
      >
        <div className="px-4 text-gray-500 focus:text-gray-600">
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokelinecap="round"
              strokelinejoin="round"
              strokewidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            ></path>
          </svg>
        </div>
      </label>
    </div>
  );
}

export default function Home() {
  let [show, setShow] = React.useState(false);
  function toggleShow() {
    setShow((prev) => !prev);
  }
  return (
    <div className="h-screen">
      <div>
        <div className="h-screen flex overflow-hidden">
          <SidebarMobile show={show} toggleShow={toggleShow}>
            <TableOfContents></TableOfContents>
          </SidebarMobile>
          <SidebarDesktop>
            <TableOfContents></TableOfContents>
          </SidebarDesktop>
          {/* content */}
          <div className="flex flex-col w-0 flex-1 overflow-hidden">
            <main
              className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
              tabIndex="0"
            >
              <HeaderMobile toggleShow={toggleShow}></HeaderMobile>
              <HeaderDesktop></HeaderDesktop>
              <MarkdownContent></MarkdownContent>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
