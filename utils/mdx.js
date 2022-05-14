import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

const { readFile } = fs.promises;

function rehypePrettyCodeWithConf() {
  const options = {
    theme: "monokai",
    onVisitLine(node) {
      // Prevent lines from collapsing in `display: grid` mode, and
      // allow empty lines to be copy/pasted
      if (node.children.length === 0) {
        node.children = [{ type: "text", value: " " }];
      }
    },
    // Feel free to add classNames that suit your docs
    onVisitHighlightedLine(node) {
      node.properties.className.push("highlight");
    },
    onVisitHighlightedWord(node) {
      node.properties.className = ["word"];
    },
  };

  return rehypePrettyCode(options);
}

export async function getPost(root, slug) {
  let filePath = path.join(root, `${slug}.mdx`);

  let source = await readFile(filePath, "utf8");
  let mdxResult = await bundleMDX({
    source,
    // cwd: isFile ? undefined : path.join(root, slug),
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypePrettyCodeWithConf,
      ];

      return options;
    },
  });

  return {
    slug,
    ...mdxResult,
  };
}
