import fs from "fs/promises";

const copy = async function (source, target) {
  const data = await fs.readFile(source, { encoding: "utf8" });
  await fs.writeFile(target, data, { encoding: "utf8" });
};

try {
  await copy("input.txt", "output.txt");
  console.log("Copied successfully.");
} catch (err) {
  console.log("Failed to copy", err);
}
