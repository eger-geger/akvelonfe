import { Store, createStore, Action } from 'redux';
import { User } from './user';

export class State {

  constructor(
    public readonly users: Array<User>
  ) {

  }
}

export class StateService {
  private readonly store: Store<State>;

  constructor() {
    this.store = createStore(reducer, new State([
      new User('vasia.pupkin@gmail.com', 'Vasia', 'Pupkin', new Date(1980, 1, 26), 1),
      new User('anton.bobrov@gmali.com', 'Anton', 'Bobrov', new Date(1990, 4, 9), 2),
      new User('valera.komar@gmali.com', 'Valeriy', 'Komarov', new Date(1960, 2, 13), 3)
    ]));
  }

  public addUser(user: User) {
    this.store.dispatch({user, type: UserActionType.Add});
  }

  public removeUser(user: User) {
    this.store.dispatch({user, type: UserActionType.Remove});
  }

  public updateUser(user: User) {
    this.store.dispatch({user, type: UserActionType.Update});
  }

  public subscribe(fn:(s:State) => void){
    this.store.subscribe(() => fn(this.state));
  }

  public get state():State{
    return this.store.getState();
  }
}

enum UserActionType {
  Add, Remove, Update
}

function reducer(state: State, action: Action): State {
  return new State(getUsers(state.users, action));
}

function getUsers(users: User[], action): User[] {
  switch (action.type) {
    case UserActionType.Add:
      return [...users, action.user];

    case UserActionType.Remove:
      return users.reduce((acc:User[], user:User) => {
        return user.id == action.user.id 
          ? acc : [...acc, user];
      }, []);
      
    case UserActionType.Update:
      return users.reduce((acc:User[], user:User) => {
        return user.id == action.user.id 
          ? [...acc, action.user] 
          : [...acc, user];
      }, []);
  }

  return users;
}