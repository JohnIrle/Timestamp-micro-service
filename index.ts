// SPDX-FileCopyrightText: 2019 John Irle
//
// SPDX-License-Identifier: MIT

import { app } from "./app";
const PORT = 5000;

const start = async () => {
  app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
};

start();
