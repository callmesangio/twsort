import { createSorter } from "prettier-plugin-tailwindcss/sorter";

if (process.argv.length !== 3) {
  console.error("Wrong number of arguments.");
  process.exit(1);
}

const sorter = await createSorter({
  stylesheetPath: "./app/assets/tailwind/application.css",
});

const sorted = sorter.sortClassAttributes(process.argv.slice(2));

process.stdout.write(sorted[0]);
