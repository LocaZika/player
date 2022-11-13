export default async (fileText) => {
  const getFile = await fetch(`./asset/img/${fileText}`);
  const getText = await getFile.text();
  return getText;
};
