// Init
import React, { useContext, useState, useEffect, createContext } from 'react';

// Initializing Create Context Hook
const storeContext = createContext();
const storeUpdateContext = createContext();
const onlineStatusContext = createContext(true);
// Also initializing useContexts here then we only call these functions where we need that data
export function Store() {
  return useContext(storeContext);
}

export function UpdateStore() {
  return useContext(storeUpdateContext);
}
export function OnlineStatus() {
  return useContext(onlineStatusContext);
}

// Initializing Store Provider
export function StoreProvider({ children }) {
  let [isConnected, setConnected] = useState(navigator.onLine);
  // Initializing State
  let [store, setStore] = useState({
    loggedIn: false,
    user: null,
    courses: [],
    draft: [],
    singleDraft: null,
    topRatedContentCreator: [],
    blogs: [],
    singleBlog: {},
    creator: null,
    searchCreator: [],
    searchCourse: [],
    searchState: 'course',
    searchInput: '',
    Games: [],
    searchLoader: false,
    learner: true,
    contentDashboardButton: 'Courses'
  });

  useEffect(() => {
    window.addEventListener('offline', () => {
      setConnected(false);
    });
    window.addEventListener('online', () => {
      setConnected(true);
    });

    return () => {
      window.removeEventListener('offline', () => {
        setConnected(false);
      });
      window.removeEventListener('online', () => {
        setConnected(true);
      });
    };
  }, []);

  const updateStore = (data) => {
    setStore((prev) => {
      return { ...prev, ...data };
    });
  };

  // Render
  return (
    <storeContext.Provider value={store}>
      <storeUpdateContext.Provider value={updateStore}>
        <onlineStatusContext.Provider value={isConnected}>
          {children}
        </onlineStatusContext.Provider>
      </storeUpdateContext.Provider>
    </storeContext.Provider>
  );
}
