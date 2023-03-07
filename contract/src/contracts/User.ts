import {NearBindgen, near, call, view, Vector} from 'near-sdk-js';
import {UserModel} from "../models/User";

@NearBindgen({})

class User {
  listOfUsers: Vector<UserModel> = new Vector<UserModel>('list-of-users');

  @view({}) // This method is read-only and can be called for free
  get_users(): Vector<UserModel> {
    return this.listOfUsers;
  }

  @view({})
  handle_exists({ handle}: { handle: string} ): Boolean {
      return this.listOfUsers.toArray().filter(user => user.handle === handle).length > 0
  }

  @call({}) // This method changes the state, for which it cost gas
  create_new_user({ handle, type }: {
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