const change_loader = (bool) => ({ type: "LOADER", payload: bool });
const change_pageName = (pageName) => ({
  type: "PAGE_NAME",
  payload: pageName,
});

export { change_pageName };
