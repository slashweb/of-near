import {NearBindgen, near, call, view, Vector} from 'near-sdk-js';
import {ContentModel} from "../models/ContentModel";
import {UserModel} from "../models/User";

@NearBindgen({})


class CreatorsContent {
    // Variable to save all the content of the users
    listOfContents: Vector<ContentModel> = new Vector<ContentModel>('list-of-contents');
    // Variable to save all the users inside the contract
    listOfUsers: Vector<UserModel> = new Vector<UserModel>('list-of-users');

    @view({})
    get_users(): Vector<UserModel> {
        return this.listOfUsers;
    }

    @view({})
    handle_exists({handle}: { handle: string }): Boolean {
        return this.listOfUsers.toArray().filter(user => user.handle === handle).length > 0
    }

    @view({}) // This method is read-only and can be called for free
    get_greeting(): Vector<ContentModel> {
        return this.listOfContents;
    }

    @call({}) // This method changes the state, for which it cost gas
    create_new_content({title, description}: {
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

    @call({}) // This method changes the state, for which it cost gas
    create_new_user({handle, type}: {
        handle: string,
        type: string
    }): void {
        const newUser = {
            handle,
            type,
            account_id: near.signerAccountId()
        }
        this.listOfUsers.push(newUser)
    }
}