export default (data: any) => {
  let id = data.OBJECT_ID;

  if (!id || id.length < 9) {
    id = `${id}:${data.NORAD_CAT_ID}`;
  }
  return id;
};
