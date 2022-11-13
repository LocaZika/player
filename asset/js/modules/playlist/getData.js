export default async (fileDB) => {
  const getFile = await fetch(`./asset/database/${fileDB}`);
  const getData = await getFile.json();
  return getData;
};
