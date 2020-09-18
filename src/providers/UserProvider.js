import React, { Component, createContext } from 'react';
import { auth, createOrGetUserProfileDocument } from '../firebase';

const initialUserState = { user: null, loading: true };

export const UserContext = createContext(initialUserState);

class UserProvider extends Component {
  state = initialUserState;
  async componentDidMount() {
    //will be fired when login to logout state or vice versa
    auth.onAuthStateChanged(async (userAuth) => {
      console.log('UserProvider -> componentdidmount -> userAuth', userAuth);
      if (userAuth) {
        const userRef = await createOrGetUserProfileDocument(userAuth);
        console.log('userRef', userRef);
        // Attach listener to listen to user changes in firestore
        userRef.onSnapshot((snapshot) => {
          // console.log('snapshot', snapshot);
          // console.log('snapshot data', snapshot.data);
          this.setState({
            user: { uid: snapshot.id, ...snapshot.data() },
            loading: false,
          });
        });
      }
      this.setState({ user: userAuth, loading: false });
    });
  }

  render() {
    //console.log('this.props', this.props);
    //console.log('user', this.state.user);
    const { user, loading } = this.state;
    const { children } = this.props;
    return (
      <div>
        <UserContext.Provider value={{ user, loading }}>
          {children}
        </UserContext.Provider>
      </div>
    );
  }
}

export default UserProvider;
