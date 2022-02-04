
import express from 'express';
import MailChimp from '../../assets/mailChimp';
import MockApi from '../../assets/mockApi';

const SyncController = async (request: express.Request, response:express.Response) => {
  const mockApi = new MockApi();
  const contacts = await mockApi.getContacts();
  const mailChimp = new MailChimp();
  const syncContacts = await mailChimp.sync(contacts);
  response.json(syncContacts);
};

export default SyncController;
