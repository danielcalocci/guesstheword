import Config from '../config/config';
import { Contacts } from './mockApi';
type SyncContacts = {
    'syncedContacts': number,
    'contacts':
      {
        'firstName': string,
        'lastName': string,
        'email': string,
      }[],
  }

class MailChimp {
    apiKey: string;
    serverPrefix: string;
    client: any;
    config: any;

    constructor () {
      this.apiKey = Config.mailChimp.apiKey;
      this.serverPrefix = Config.mailChimp.serverPrefix;
      this.client = require('../../node_modules/@mailchimp/mailchimp_marketing');
      this.config = {
        apiKey: this.apiKey,
        server: this.serverPrefix
      };
      this.client.setConfig(this.config);
    }

    async clearLists () {
      const lists = await this.client.lists.getAllLists();
      for (const list of lists.lists) {
        await this.client.lists.deleteList(list.id);
      }
    }

    async addPersonalList () {
      const response = await this.client.lists.createList({
        name: 'Daniel Marcicano',
        contact: {
          company: 'company',
          address1: 'address1@email.com',
          address2: 'address2@email.com',
          city: 'city',
          state: 'state',
          zip: '00000-000',
          country: 'country',
          phone: '00000'
        },
        permission_reminder: 'permission_reminder',
        use_archive_bar: false,
        campaign_defaults: {
          from_name: 'from_name',
          from_email: 'from_email@email.com',
          subject: 'subject',
          language: 'eng'
        },
        notify_on_subscribe: 'notify_on_subscribe@email.com',
        notify_on_unsubscribe: 'notify_on_unsubscribe@email.com',
        email_type_option: false,
        double_optin: false,
        marketing_permissions: false
      });
      return response.id;
    }

    async setup () {
      await this.clearLists();
      return await this.addPersonalList();
    }

    async addMember (listId: string, email: string, firstName: string, lastName: string) {
      const member = {
        email_address: email,
        status: 'subscribed',
        merge_fields: { FNAME: firstName, LNAME: lastName }
      };

      const response = await this.client.lists.addListMember(listId, member).catch((ex:any) => { return ex; });
      if (response.response?.statusCode) {
        return { error: JSON.parse(response.response.text) };
      } else {
        return response;
      }
    }

    async sync (contactsList: Contacts):Promise<SyncContacts> {
      const newListId = await this.setup();

      const syncedContacts:SyncContacts = {
        syncedContacts: 0,
        contacts: []
      };

      for (const contact of contactsList) {
        const response = await this.addMember(newListId, contact.email, contact.firstName, contact.lastName);
        if (response.error) {
          console.log(response);
        } else {
          syncedContacts.syncedContacts += 1;
          const contactSynced = { email: contact.email, firstName: contact.firstName, lastName: contact.lastName };
          syncedContacts.contacts.push(contactSynced);
          console.log(contactSynced);
        }
      }

      return syncedContacts;
    }
}

export default MailChimp;
