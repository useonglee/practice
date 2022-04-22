import axios from "axios";
import React from "react";
import { atom, selector, useRecoilValue } from "recoil";

const currentUserIDState = atom({
  key: "CurrentUserID",
  default: 1,
});

// const currentUserNameState = selector({
//   key: "CurrentUserName",
//   get: ({ get }) => {
//     return tableOfUsers[get(currentUserIDState)].name;
//   },
// });

const currentUserNameQuery = selector({
  key: "CurrentUserName",
  get: async ({ get }) => {
    const response = await axios.get(
      `/api/user-name?id=${get(currentUserIDState)}`
    );

    return response.data.name;
  },
});

function CurrentUser() {
  const userName = useRecoilValue(currentUserNameQuery);

  return <div>{userName}</div>;
}

export default function CurrentUserInfo() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <CurrentUser />
    </React.Suspense>
  );
}
