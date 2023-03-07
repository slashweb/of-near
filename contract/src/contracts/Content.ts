import {NearBindgen, near, call, view, Vector} from 'near-sdk-js';
import { ContentModel } from "../models/ContentModel";

@NearBindgen({})

class Content {
  listOfContents: Vector<ContentModel> = new Vector<ContentModel>('list-of-contents');

  @view({}) // This method is read-only and can be called for free
  get_greeting(): Vector<ContentModel> {
    return this.listOfContents;
  }

  @call({}) // This method changes the state, for which it cost gas
  set_greeting({ title, description }: {
    title: string,
    description: string
  }): void {
    const newContent = {
      title,
      description,
      account_id: near.signerAccountId()
    }
    this.listOfContents.push(newContent)
  }
}