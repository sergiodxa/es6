async function exclamatify () {
  try {
    const datos = await getMessage(); // hola mundo
    return `${datos}!`;
  } catch (error) {
    console.log(error);
  }
}

(async function () {
  console.log(await exclamatify()); // hola mundo!
})();