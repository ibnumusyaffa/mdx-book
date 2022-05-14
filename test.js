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


const paths = [];
const test = []
for (const parent in toc) {
  let parentValue = toc[parent];
  paths.push({
    params: {
      slug: [parent],
    },
  });

  test.push([parent])

  if (!parentValue.children) {
    continue;
  }

  for (const child in parentValue.children) {
    paths.push({
      params: {
        slug: [parent, child],
      },
    });
    test.push([parent,child])
  }
}

console.log(paths)
console.log(test)