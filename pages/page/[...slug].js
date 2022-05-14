import React from "react";
import path from "path";
import { getMDXComponent } from "mdx-bundler/client";
import Pre from "../../components/Pre";
import { getPost } from "../../utils/mdx";
import Link from "next/link";

let toc = {
  introduction: {
    name: "Introduction",
  },
  getting_started: {
    name: "Getting Started",
    children: {
      installation: "Installation",
      setup_your_environment: "Set up your environment",
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
                <Link
                  href={`/page/${slug}`}
                  className="text-gray-900 hover:text-gray-600 font-bold"
                >
                  {entry.name}
                </Link>
                {entry.children ? (
                  <ol className="pl-4 list-decimal nested">
                    {Object.entries(entry.children).map(([childSlug, name]) => (
                      <li key={`${slug}/${childSlug}`} className="my-0.5">
                        <Link
                          href={`/page/${slug}/${childSlug}`}
                          className="text-gray-900 hover:text-gray-600 font-normal"
                        >
                          {name}
                        </Link>
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

function Content({ children }) {
  return (
    <div className="max-w-screen-md mx-auto px-4 sm:px-6 md:px-8 pb-12 sm:pb-20">
      <div className="pt-1">
        <div className="py-8 prose prose-green max-w-none">{children}</div>
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

export default function Home({ code, ...other }) {
  let [show, setShow] = React.useState(false);
  function toggleShow() {
    setShow((prev) => !prev);
  }

  let MDXComponent = React.useMemo(() => getMDXComponent(code), [code]);
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
              <Content>
                <MDXComponent
                  components={{
                    pre: Pre,
                  }}
                />
              </Content>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  let slug = params.slug.join("/");
  let root = path.join(process.cwd(), "content");
  let post = await getPost(root, slug);

  return {
    props: post,
  };
}

export async function getStaticPaths() {
  const paths = [];
  for (const parent in toc) {
    let parentValue = toc[parent];
    paths.push({
      params: {
        slug: [parent],
      },
    });

    if (!parentValue.children) {
      continue;
    }

    for (const child in parentValue.children) {
      paths.push({
        params: {
          slug: [parent, child],
        },
      });
    }
  }

  return {
    paths,
    fallback: false,
  };
}
