
import express from 'express';
import * as path from 'path';
const HomeController = async (request: express.Request, response:express.Response) => {
  response.sendFile(path.join(__dirname, '/index.html'));
};

export default HomeController;
