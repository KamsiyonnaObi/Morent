import { create } from "zustand";

// type userStore to store user
interface userStore {
  authenticatedUser: { [key: string]: any };
  refreshState: () => void;
}

const useUserState = create<userStore>((set) => ({
  authenticatedUser: {},

  refreshState: async () => {
    // ping auth route
    const res = await fetch("/api/auth");
    const data = await res.json();
    if (data.message === "Unauthorized") {
      // set authenticatedUser to a falsy value
      set((state) => ({ authenticatedUser: {} }));
      return;
    }
    // set authenticatedUser to responseObj from server
    set(() => ({
      authenticatedUser: data.message,
    }));
  },
}));

export default useUserState;
