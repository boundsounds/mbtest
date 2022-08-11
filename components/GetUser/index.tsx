// import { selector, useRecoilValue } from "recoil";

// const getUserData = selector({
//     key: 'UserData',
//     get: async ({get}) => {
//       const response = await ({
//         userID: get(currentUserIDState),
//       });
//       return response.name;
//     },
//   });
  
//   function CurrentUserInfo() {
//     const userName = useRecoilValue(getUserData);
//     return <div>{userName}</div>;
//   }